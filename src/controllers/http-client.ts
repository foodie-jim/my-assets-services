import Logger from '../configurations/logger';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor() {
    this.instance = axios.create();

    this.initializeResponseInterceptor();
  }

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.request.use(this.handleRequest);
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleError
    );
  };

  private handleRequest = (request: AxiosRequestConfig) => {
    Logger.debug("[HttpClient] " + JSON.stringify(request, null, 2));
    return request;
  };

  private handleResponse = ({ data }: AxiosResponse) => data;

  protected handleError = (error: unknown) => Promise.reject(error);
}

export default HttpClient;
