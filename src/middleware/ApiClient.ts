import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
  AxiosError,
  AxiosHeaders,
} from 'axios'
import i18n from '@/plugins/i18n-plugin'
import { severity } from '@/models'
import { useToastStore } from '@/stores/toast'

class ApiService {
  private service: AxiosInstance

  constructor() {

    this.service = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
      timeout: Number(import.meta.env.VITE_TIMEOUT),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    this.service.interceptors.request.use(this.handleRequest, this.handleError)
    this.service.interceptors.response.use(this.handleResponse, this.handleError)
  }

  private handleRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    if (!config.headers) {
      config.headers = new AxiosHeaders()
    }

    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  }

  private handleResponse(response: AxiosResponse) {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  }

  private handleError(error: AxiosError): any {
    const t = i18n.global.t
    const toastStore = useToastStore()

    if (error.response) {
      const { status, data } = error.response
      switch (status) {
        case 401:
          toastStore.showToast(
            severity.DANGER,
            t('common.errors.401.title'),
            t('common.errors.401.message'),
          )
          break
        case 403:
          toastStore.showToast(
            severity.DANGER,
            t('common.errors.403.title'),
            t('common.errors.403.message'),
          )
          break
        case 404:
          toastStore.showToast(
            severity.WARNING,
            t('common.errors.404.title'),
            t('common.errors.404.message'),
          )
          break
        case 500:
          toastStore.showToast(
            severity.DANGER,
            t('common.errors.500.title'),
            t('common.errors.500.message'),
          )
          break
        default:
          toastStore.showToast(
            severity.DANGER,
            t('common.errors.default.title'),
            t('common.errors.default.title', { status: status, data: data }),
          )
      }
    } else if (error.request) {
      toastStore.showToast(
        severity.WARNING,
        t('common.errors.noResponse.title'),
        t('common.errors.noResponse.message'),
      )
    } else {
      toastStore.showToast(
        severity.DANGER,
        t('common.errors.requestError.title'),
        t('common.errors.requestError.message', { message: error.message }),
      )
    }

    return Promise.reject(error)
  }

  // GET
  public async get<T>(
    url: string,
    params?: Record<string, any>,
    config?: AxiosRequestConfig,
  ): Promise<any> {
    return await this.service.get<T>(url, { params, ...config })
  }

  // POST
  public async post<T>(
    url: string,
    data?: Record<string, any>,
    config?: AxiosRequestConfig,
  ): Promise<any> {
    return await this.service.post<T>(url, data, config)
  }

  // PUT
  public async put<T>(
    url: string,
    data?: Record<string, any>,
    config?: AxiosRequestConfig,
  ): Promise<any> {
    return await this.service.put<T>(url, data, config)
  }

  // DELETE
  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<any> {
    return await this.service.delete<T>(url, config)
  }
}

export default new ApiService()
