import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { ChargesReturn } from '../protocols'

export declare interface FraudReviewChargeRequest
  extends Exclude<FraudReviewChargeData, 'requestOptions'> {
  config: VindiClient
}

export declare interface FraudReviewChargeData {
  id: string | number
  body?: {
    fraud_review_action?: 'approve' | 'reject'
    comments?: string
  }
  requestOptions?: Options
}

export declare interface FraudReviewChargeResponse extends ApiResponse {
  charge: ChargesReturn
}
