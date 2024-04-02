import { Http } from '@/lib/http'
import type {
  SubscriptionGetRequest,
  SubscriptionGetResponse
} from './protocols'

export const get = async ({
  config,
  id
}: SubscriptionGetRequest): Promise<SubscriptionGetResponse> => {
  return await Http.fetch<SubscriptionGetResponse>(`/v1/subscriptions/${id}`, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    ...config.options
  })
}
