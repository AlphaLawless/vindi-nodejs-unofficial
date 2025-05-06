import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { BillReturn, SubscriptionReturn } from '../protocols'

export declare interface SubscriptionReactivateRequest
  extends Exclude<SubscriptionReactivateData, 'requestOptions'> {
  config: VindiClient
}

export declare interface SubscriptionReactivateData {
  id: string | number
  requestOptions?: Options
}

export declare interface SubscriptionReactivateResponse extends ApiResponse {
  subscription: SubscriptionReturn
  bill: BillReturn | null
}
