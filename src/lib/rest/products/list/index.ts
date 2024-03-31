import { Http } from '@/lib/http'
import type { ProductsListRequest, ProductsListResponse } from './protocols'

export const list = async ({
  config,
  params
}: ProductsListRequest): Promise<ProductsListResponse> => {
  return await Http.fetch<ProductsListResponse>('/v1/products', {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    queryParams: {
      ...params
    },
    ...config.options
  })
}
