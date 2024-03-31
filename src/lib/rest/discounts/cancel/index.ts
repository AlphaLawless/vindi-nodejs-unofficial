import { Http } from '@/lib/http'
import type { DiscountCancelRequest, DiscountCancelResponse } from './protocols'

export const cancel = async ({
  config,
  id
}: DiscountCancelRequest): Promise<DiscountCancelResponse> => {
  return await Http.fetch<DiscountCancelResponse>(`/v1/discounts/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    ...config.options
  })
}
