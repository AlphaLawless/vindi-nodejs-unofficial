import { Http } from '@/lib/http'
import type {
  PublicCreatePaymentProfileRequest,
  PublicCreatePaymentProfileResponse
} from './protocols'

export const create = async ({
  config,
  body
}: PublicCreatePaymentProfileRequest): Promise<PublicCreatePaymentProfileResponse> => {
  return await Http.fetch<PublicCreatePaymentProfileResponse>(
    '/v1/public/payment_profiles',
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
      },
      body: JSON.stringify(body),
      ...config.options
    }
  )
}
