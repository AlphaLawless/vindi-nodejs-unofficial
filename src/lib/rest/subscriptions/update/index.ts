import { Http } from '@/lib/http'
import type {
  SubscriptionUpdateRequest,
  SubscriptionUpdateResponse
} from './protocols'

export const update = async ({
  config,
  body,
  id
}: SubscriptionUpdateRequest): Promise<SubscriptionUpdateResponse> => {
  return await Http.fetch<SubscriptionUpdateResponse>(
    `/v1/subscriptions/${id}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
      },
      body: JSON.stringify(body),
      ...config.options
    }
  )
}
