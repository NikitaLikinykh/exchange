import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`, // Укажите базовый URL
  withCredentials: true,
  timeout: 5000, // Укажите тайм-аут в миллисекундах
});

// Перехватчик запросов
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Перехватчик ответов
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // ...обработка ошибок...
    return Promise.reject(error);
  }
);

export default axiosInstance;
