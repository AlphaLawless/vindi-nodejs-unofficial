import { Http } from '@/lib/http'
import type {
  ProductItemRemoveRequest,
  ProductItemRemoveResponse
} from './protocols'

export const remove = async ({
  config,
  id
}: ProductItemRemoveRequest): Promise<ProductItemRemoveResponse> => {
  return await Http.fetch<ProductItemRemoveResponse>(
    `/v1/product_items/${id}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Basic ${Buffer.from(`${config.key}:`).toString(
          'base64'
        )}`
      },
      ...config.options
    }
  )
}
