import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { ChargesReturn } from '../protocols'

export declare interface RefundChargeRequest
  extends Exclude<RefundChargeData, 'requestOptions'> {
  config: VindiClient
}

export declare interface RefundChargeData {
  id: string | number
  body?: {
    amount?: number
    cancel_bill?: boolean
    comments?: string
  }
  requestOptions?: Options
}

export declare interface RefundChargeResponse extends ApiResponse {
  charge: ChargesReturn
}
