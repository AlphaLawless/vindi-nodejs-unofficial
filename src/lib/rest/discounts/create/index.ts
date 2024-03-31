import { Http } from '@/lib/http'
import type { DiscountCreateRequest, DiscountCreateResponse } from './protocols'

export const create = async ({
  config,
  body
}: DiscountCreateRequest): Promise<DiscountCreateResponse> => {
  return await Http.fetch<DiscountCreateResponse>('/v1/discounts', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    body: JSON.stringify(body),
    ...config.options
  })
}
