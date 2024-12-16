import { Http } from '@/lib/http'
import type { MerchantListRequest, MerchantListResponse } from './protocols'

export const list = async ({
  config,
  params
}: MerchantListRequest): Promise<MerchantListResponse> => {
  return await Http.fetch<MerchantListResponse>('/v1/merchants', {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    queryParams: {
      ...params
    },
    ...config.options
  })
}
