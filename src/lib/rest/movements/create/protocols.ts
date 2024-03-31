import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { MovementBody, MovementReturn } from '../protocols'

export declare interface MovementCreateRequest
  extends Exclude<MovementCreateData, 'requestOptions'> {
  config: VindiClient
}

export declare interface MovementCreateData {
  body: MovementBody
  requestOptions?: Options
}

export declare interface MovementCreateResponse extends ApiResponse {
  movement: MovementReturn
}
