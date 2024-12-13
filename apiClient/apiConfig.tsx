// apiConfig.ts
import axios, { AxiosInstance } from "axios";
import ApiBaseUrl from "@/components/commonExports/apiBaseUrl";

const ApiClient: AxiosInstance = axios.create({
  baseURL: ApiBaseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  } as any,
});

export default ApiClient;
