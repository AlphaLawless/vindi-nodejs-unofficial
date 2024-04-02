import { Http } from '@/lib/http'
import type {
  ProductItemCreateRequest,
  ProductItemCreateResponse
} from './protocols'

export const create = async ({
  config,
  body
}: ProductItemCreateRequest): Promise<ProductItemCreateResponse> => {
  return await Http.fetch<ProductItemCreateResponse>('/v1/product_items', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    body: JSON.stringify(body),
    ...config.options
  })
}
