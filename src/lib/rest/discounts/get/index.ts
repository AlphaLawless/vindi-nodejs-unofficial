import { Http } from '@/lib/http'
import type { DiscountGetRequest, DiscountGetResponse } from './protocols'

export const get = async ({
  config,
  id
}: DiscountGetRequest): Promise<DiscountGetResponse> => {
  return await Http.fetch<DiscountGetResponse>(`/v1/discounts/${id}`, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    ...config.options
  })
}
