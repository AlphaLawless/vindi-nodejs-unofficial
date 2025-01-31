import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { ChargesReturn } from '../protocols'

export declare interface ChargeUpdateRequest
  extends Exclude<ChargeUpdateData, 'requestOptions'> {
  config: VindiClient
}

export declare interface ChargeUpdateData {
  id: string | number
  body: {
    due_at?: string
    installments?: number
  }
  requestOptions?: Options
}

export declare interface ChargeUpdateResponse extends ApiResponse {
  charge: ChargesReturn
}
