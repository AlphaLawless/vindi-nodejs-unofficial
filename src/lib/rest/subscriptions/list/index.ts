import { Http } from '@/lib/http'
import type {
  SubscriptionListRequest,
  SubscriptionListResponse
} from './protocols'

export const list = async ({
  config,
  params
}: SubscriptionListRequest): Promise<SubscriptionListResponse> => {
  return await Http.fetch<SubscriptionListResponse>('/v1/subscriptions', {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    queryParams: {
      ...params
    },
    ...config.options
  })
}
