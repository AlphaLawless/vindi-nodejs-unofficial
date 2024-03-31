import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { PlanReturn } from '../protocols'

export declare interface PlanGetRequest
  extends Exclude<PlanGetData, 'requestOptions'> {
  config: VindiClient
}

export declare interface PlanGetData {
  id: string | number
  requestOptions?: Options
}

export declare interface PlanGetResponse extends ApiResponse, PlanReturn {}
