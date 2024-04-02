import { Http } from '@/lib/http'
import type {
  SubscriptionGetProductItemsRequest,
  SubscriptionGetProductItemsResponse
} from './protocols'

export const product_items = async ({
  config,
  id,
  params
}: SubscriptionGetProductItemsRequest): Promise<SubscriptionGetProductItemsResponse> => {
  return await Http.fetch<SubscriptionGetProductItemsResponse>(
    `/v1/subscriptions/${id}/product_items`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(`${config.key}:`).toString(
          'base64'
        )}`
      },
      queryParams: {
        ...params
      },
      ...config.options
    }
  )
}
