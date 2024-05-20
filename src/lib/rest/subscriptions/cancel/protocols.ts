import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { BillReturn, SubscriptionReturn } from '../protocols'

export declare interface SubscriptionCancelQueryParams {
  cancel_bills?: boolean
  comments?: string
}

export declare interface SubscriptionCancelRequest
  extends Exclude<SubscriptionCancelData, 'requestOptions'> {
  config: VindiClient
}

export declare interface SubscriptionCancelData {
  id: string | number
  params?: SubscriptionCancelQueryParams
  requestOptions?: Options
}

export declare interface SubscriptionCancelResponse extends ApiResponse {
  subscription: SubscriptionReturn
  bill?: BillReturn
}
