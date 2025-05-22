export const API_BASE_URL = 
  "https://gega-bites-api.vercel.app";

export const getApiHeaders = () => {
  const headers = {
    "Content-Type": "application/json"
  };

  // التأكد من أننا في متصفح قبل استخدام localStorage
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("access_token");
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }

  return headers;
};