import { Http } from '@/lib/http'
import type {
  PaymentProfilesListRequest,
  PaymentProfilesListResponse
} from './protocols'

export const list = async ({
  config,
  params
}: PaymentProfilesListRequest): Promise<PaymentProfilesListResponse> => {
  return await Http.fetch<PaymentProfilesListResponse>('/v1/payment_profiles', {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    queryParams: {
      ...params
    },
    ...config.options
  })
}
