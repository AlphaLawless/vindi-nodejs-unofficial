import { Http } from '@/lib/http'
import type {
  FraudReviewChargeRequest,
  FraudReviewChargeResponse
} from './protocols'

export const fraud_review = async ({
  config,
  body,
  id
}: FraudReviewChargeRequest): Promise<FraudReviewChargeResponse> => {
  return await Http.fetch<FraudReviewChargeResponse>(
    `/v1/charges/${id}/fraude_review`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
      },
      body: JSON.stringify(body),
      ...config.options
    }
  )
}
