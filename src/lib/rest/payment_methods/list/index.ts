import { Http } from '@/lib/http'
import type {
  PaymentMethodsListRequest,
  PaymentMethodsListResponse
} from './protocols'

export const list = async ({
  config,
  params
}: PaymentMethodsListRequest): Promise<PaymentMethodsListResponse> => {
  return await Http.fetch<PaymentMethodsListResponse>('/v1/payment_methods', {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    queryParams: {
      ...params
    },
    ...config.options
  })
}
