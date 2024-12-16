import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { MovementReturn } from '../protocols'

export declare interface MovementRemoveRequest
  extends Exclude<MovementRemoveData, 'requestOptions'> {
  config: VindiClient
}

export declare interface MovementRemoveData {
  id: string | number
  requestOptions?: Options
}

export declare interface MovementRemoveResponse extends ApiResponse {
  movement: MovementReturn
}
