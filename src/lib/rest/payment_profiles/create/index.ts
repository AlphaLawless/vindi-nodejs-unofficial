import { Http } from '@/lib/http'
import type {
  PaymentProfilesCreateRequest,
  PaymentProfilesCreateResponse
} from './protocols'

export const create = async ({
  config,
  body
}: PaymentProfilesCreateRequest): Promise<PaymentProfilesCreateResponse> => {
  return await Http.fetch<PaymentProfilesCreateResponse>(
    '/v1/payment_profiles',
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${config.key}:`).toString(
          'base64'
        )}`
      },
      body: JSON.stringify(body),
      ...config.options
    }
  )
}
