import { Http } from '@/lib/http'
import type {
  SubscriptionRenewRequest,
  SubscriptionRenewResponse
} from './protocols'

export const renew = async ({
  config,
  id
}: SubscriptionRenewRequest): Promise<SubscriptionRenewResponse> => {
  return await Http.fetch<SubscriptionRenewResponse>(
    `/v1/subscriptions/${id}/renew`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${config.key}:`).toString(
          'base64'
        )}`
      },
      ...config.options
    }
  )
}
