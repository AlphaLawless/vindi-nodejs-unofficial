import { Http } from '@/lib/http'
import type { ProductsGetRequest, ProductsGetResponse } from './protocols'

export const get = async ({
  config,
  id
}: ProductsGetRequest): Promise<ProductsGetResponse> => {
  return await Http.fetch<ProductsGetResponse>(`/v1/products/${id}`, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    ...config.options
  })
}
