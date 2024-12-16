import { Http } from '@/lib/http'
import type { ProductUpdateRequest, ProductUpdateResponse } from './protocols'

export const update = async ({
  config,
  body,
  id
}: ProductUpdateRequest): Promise<ProductUpdateResponse> => {
  return await Http.fetch<ProductUpdateResponse>(`/v1/products/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    body: JSON.stringify(body),
    ...config.options
  })
}
