import { Http } from '@/lib/http'
import type {
  SubscriptionCancelRequest,
  SubscriptionCancelResponse
} from './protocols'

export const cancel = async ({
  config,
  id,
  params
}: SubscriptionCancelRequest): Promise<SubscriptionCancelResponse> => {
  return await Http.fetch<SubscriptionCancelResponse>(
    `/v1/subscriptions/${id}`,
    {
      method: 'DELETE',
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
