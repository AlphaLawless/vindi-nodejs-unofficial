import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { PeriodReturn, PeriodUsagesReturn } from '../protocols'

export declare interface PeriodGetRequest
  extends Exclude<PeriodGetData, 'requestOptions'> {
  config: VindiClient
}

export declare interface PeriodGetData {
  id: string | number
  requestOptions?: Options
}

export declare interface PeriodGetResponse extends ApiResponse {
  period: PeriodReturn & { usages: PeriodUsagesReturn[] }
}
