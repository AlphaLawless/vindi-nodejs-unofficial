import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { PeriodUsagesReturn } from '../protocols'

export declare interface PeriodUsageGetRequest
  extends Exclude<PeriodUsageGetData, 'requestOptions'> {
  config: VindiClient
}

export declare interface PeriodUsageGetData {
  id: string | number
  requestOptions?: Options
}

export declare interface PeriodUsageGetResponse extends ApiResponse {
  usages: PeriodUsagesReturn
}
