import { randomUUID } from 'node:crypto'
import { SDKConfig } from '../config/sdk-config'
import type { Options } from '../protocols'

type primitives = string
type Headers = Record<string, primitives>

interface HttpRequestProps<T extends Headers = Headers> extends Options {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  headers?: T
  body?: any | null
}

type QueryParams = Record<string, string | number>

interface HttpClientConfig extends HttpRequestProps {
  queryParams?: QueryParams
}

export class Http {
  static appendQueryParamsToUrl(url: string, queryParams?: QueryParams) {
    if (!queryParams) return url

    const searchParams = new URLSearchParams()

    for (const key in queryParams) {
      if (Object.prototype.hasOwnProperty.call(queryParams, key)) {
        searchParams.append(key, queryParams[key].toString())
      }
    }

    return url.includes('?')
      ? `${url}&${searchParams.toString()}`
      : `${url}?${searchParams.toString()}`
  }

  static async fetch<ReturnProps>(
    endpoint: string,
    config?: HttpClientConfig & RequestInit
  ): Promise<ReturnProps> {
    const {
      method = 'GET',
      queryParams,
      idempotencyKey = randomUUID(),
      sandbox,
      ...custom
    } = config || {}

    const makeUrl = `${SDKConfig.getApiEndpoint(sandbox)}${endpoint}`
    const url = Http.appendQueryParamsToUrl(makeUrl, queryParams)
    custom.headers = {
      ...custom.headers,
      [SDKConfig.Headers.CONTENT_TYPE]: 'application/json',
      [SDKConfig.Headers.ACCEPT]: SDKConfig.MEDIA_TYPE,
      [SDKConfig.Headers.USER_AGENT]: SDKConfig.getUserAgent()
    }

    if (method && method !== 'GET') {
      custom.headers = {
        ...custom.headers,
        [SDKConfig.Headers.IDEMPOTENCY_KEY]: idempotencyKey
      }
    }

    const fetchFn = async () => {
      const response = await fetch(url, {
        ...custom,
        method
      })

      if (response.ok) {
        const data = await response.json()
        const api_response = {
          status: response.status,
          headers: response.headers
        }

        return Object.assign({}, data, api_response) as ReturnProps
      }

      throw await response.json()
    }

    return await fetchFn()
  }
}
