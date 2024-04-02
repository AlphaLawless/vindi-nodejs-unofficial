import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { SubscriptionBody, SubscriptionReturn } from '../protocols'

export declare interface SubscriptionCreateRequest
  extends Exclude<SubscriptionCreateData, 'requestOptions'> {
  config: VindiClient
}

export declare interface SubscriptionCreateData {
  body: SubscriptionBody
  requestOptions?: Options
}

export declare interface SubscriptionCreateResponse extends ApiResponse {
  Subscription: SubscriptionReturn
}
