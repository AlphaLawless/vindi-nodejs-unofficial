import { Http } from '@/lib/http'
import type {
  PaymentMethodsGetRequest,
  PaymentMethodsGetResponse
} from './protocols'

export const get = async ({
  config,
  id
}: PaymentMethodsGetRequest): Promise<PaymentMethodsGetResponse> => {
  return await Http.fetch<PaymentMethodsGetResponse>(
    `/v1/payment_methods/${id}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(`${config.key}:`).toString(
          'base64'
        )}`
      },
      ...config.options
    }
  )
}
