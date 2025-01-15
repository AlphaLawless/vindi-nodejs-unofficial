import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { SubscriptionReturn } from '../protocols'

export declare interface SubscriptionGetRequest
  extends Exclude<SubscriptionGetData, 'requestOptions'> {
  config: VindiClient
}

export declare interface SubscriptionGetData {
  id: string | number
  requestOptions?: Options
}

export declare interface SubscriptionGetResponse extends ApiResponse {
  subscription: SubscriptionReturn
}
