import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { PlanBody, PlanReturn } from '../protocols'

export declare interface PlanCreateRequest
  extends Exclude<PlanCreateData, 'requestOptions'> {
  config: VindiClient
}

export declare interface PlanCreateData {
  body: PlanBody
  requestOptions?: Options
}

export declare interface PlanCreateResponse extends ApiResponse {
  plan: PlanReturn
}
