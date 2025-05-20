export const API_BASE_URL = 'https://gegabitesapi.onrender.com';

export const API_HEADERS = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${typeof window !== "undefined" ? localStorage.getItem("access_token") : ""}`,
});
