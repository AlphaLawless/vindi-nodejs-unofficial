import { Http } from '@/lib/http'
import type {
  SubscriptionCreateRequest,
  SubscriptionCreateResponse
} from './protocols'

export const create = async ({
  config,
  body
}: SubscriptionCreateRequest): Promise<SubscriptionCreateResponse> => {
  return await Http.fetch<SubscriptionCreateResponse>('/v1/subscriptions', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    body: JSON.stringify(body),
    ...config.options
  })
}
