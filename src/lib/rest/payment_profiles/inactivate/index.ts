import { Http } from '@/lib/http'
import type {
  PaymentProfilesInactivateRequest,
  PaymentProfilesInactivateResponse
} from './protocols'

export const inactivate = async ({
  config,
  id,
  params
}: PaymentProfilesInactivateRequest): Promise<PaymentProfilesInactivateResponse> => {
  return await Http.fetch<PaymentProfilesInactivateResponse>(
    `/v1/payment_profiles/${id}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Basic ${Buffer.from(`${config.key}:`).toString(
          'base64'
        )}`
      },
      queryParams: {
        ...params
      },
      ...config.options
    }
  )
}
