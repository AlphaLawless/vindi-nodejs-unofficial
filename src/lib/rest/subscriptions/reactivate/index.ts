import { Http } from '@/lib/http'
import type {
  SubscriptionReactivateRequest,
  SubscriptionReactivateResponse
} from './protocols'

export const reactivate = async ({
  config,
  id
}: SubscriptionReactivateRequest): Promise<SubscriptionReactivateResponse> => {
  return await Http.fetch<SubscriptionReactivateResponse>(
    `/v1/subscriptions/${id}/reactivate`,
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
