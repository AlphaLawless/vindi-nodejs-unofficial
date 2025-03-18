import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { ChargesReturn } from '../protocols'

export declare interface ReissueChargeRequest
  extends Exclude<ReissueChargeData, 'requestOptions'> {
  config: VindiClient
}

export declare interface ReissueChargeData {
  id: string | number
  body?: {
    payment_method_code: string
    installments: number
    comments?: string
  }
  requestOptions?: Options
}

export declare interface ReissueChargeResponse extends ApiResponse {
  charge: ChargesReturn
}
