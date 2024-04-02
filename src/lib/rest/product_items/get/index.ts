import { Http } from '@/lib/http'
import type { ProductItemGetRequest, ProductItemGetResponse } from './protocols'

export const get = async ({
  config,
  id
}: ProductItemGetRequest): Promise<ProductItemGetResponse> => {
  return await Http.fetch<ProductItemGetResponse>(`/v1/product_items/${id}`, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    ...config.options
  })
}
