import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { PeriodReturn, PeriodUsagesReturn } from '../protocols'

export declare interface PeriodCreateRequest
  extends Exclude<PeriodCreateData, 'requestOptions'> {
  config: VindiClient
}

export declare interface PeriodCreateData {
  id: string | number
  requestOptions?: Options
}

export declare interface PeriodCreateResponse extends ApiResponse {
  period: PeriodReturn & { usages: PeriodUsagesReturn[] }
}
