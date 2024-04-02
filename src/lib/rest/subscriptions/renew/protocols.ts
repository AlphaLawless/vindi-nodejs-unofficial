import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { SubscriptionReturn } from '../protocols'

export declare interface SubscriptionRenewRequest
  extends Exclude<SubscriptionRenewData, 'requestOptions'> {
  config: VindiClient
}

export declare interface SubscriptionRenewData {
  id: string | number
  requestOptions?: Options
}

export declare interface SubscriptionRenewResponse
  extends ApiResponse,
    SubscriptionReturn {}
