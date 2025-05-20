import axios from "axios";
import { API_BASE_URL } from "./Api.jsx";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// دالة لجلب التوكن من localStorage
const getAccessToken = () =>
  typeof window !== "undefined" ? localStorage.getItem("access_token") : "";

// لتجنب إرسال أكثر من طلب refresh بنفس الوقت
let isRefreshing = false;
let refreshSubscribers = [];

const onRefreshed = (token) => {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
};

const refreshAccessToken = async () => {
  if (isRefreshing) {
    return new Promise((resolve) => {
      refreshSubscribers.push((token) => resolve(token));
    });
  }

  isRefreshing = true;

  try {
    const response = await axios.post(`${API_BASE_URL}/api/v1/user/refresh`);
    const newToken = response.data.accessToken;

    localStorage.setItem("access_token", newToken);
    onRefreshed(newToken);

    return newToken;
  } catch (error) {
    console.log(error)
    localStorage.removeItem("access_token");
    window.location.href = "/login";
    return null;
  } finally {
    isRefreshing = false;
  }
};

// ✅ قبل إرسال أي طلب، أضف التوكن للهيدر
apiClient.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ✅ عند استلام رد فيه خطأ 401، حاول تجديد التوكن
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newToken = await refreshAccessToken();
        if (newToken) {
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return apiClient(originalRequest);
        }
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
