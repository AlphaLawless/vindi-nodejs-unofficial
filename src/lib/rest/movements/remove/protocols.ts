import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { MovementReturn } from '../protocols'

export declare interface MovementExcludeRequest
  extends Exclude<MovementExcludeData, 'requestOptions'> {
  config: VindiClient
}

export declare interface MovementExcludeData {
  id: string | number
  requestOptions?: Options
}

export declare interface MovementExcludeResponse
  extends ApiResponse,
    MovementReturn {}
