import { Http } from '@/lib/http'
import type { ProductsCreateRequest, ProductsCreateResponse } from './protocols'

export const create = async ({
  config,
  body
}: ProductsCreateRequest): Promise<ProductsCreateResponse> => {
  return await Http.fetch<ProductsCreateResponse>('/v1/products', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    body: JSON.stringify(body),
    ...config.options
  })
}
