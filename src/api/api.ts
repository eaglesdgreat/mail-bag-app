import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

// Default config for the axios instance
const axiosParam = {
  // Set different base URL based on the environment
  baseURL: process.env.NODE_ENV === "development"
    ? "https://mailbagapi-y3d9xgs0.b4a.run/api"
    : "https://mailbagapi-y3d9xgs0.b4a.run/api"
}

// Create axios instance with default params
const axiosInstance = axios.create(axiosParam);

const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) => axios.get<T>(url, config),
    delete: <T>(url: string, config: AxiosRequestConfig = {}) => axios.delete<T>(url, config),
    post: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) => axios.post<T>(url, body, config),
    patch: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) => axios.patch<T>(url, body, config),
    put: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) => axios.put<T>(url, body, config),
  }
};

export default api(axiosInstance);
