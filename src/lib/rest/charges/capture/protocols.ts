import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { ChargesReturn } from '../protocols'

export declare interface CaptureChargeRequest
  extends Exclude<CaptureChargeData, 'requestOptions'> {
  config: VindiClient
}

export declare interface CaptureChargeData {
  id: string | number
  requestOptions?: Options
}

export declare interface CaptureChargeResponse extends ApiResponse {
  charge: ChargesReturn
}
