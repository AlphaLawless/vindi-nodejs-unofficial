import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { PeriodReturn, PeriodUsagesReturn } from '../protocols'

export declare interface PeriodUpdateRequest
  extends Exclude<PeriodUpdateData, 'requestOptions'> {
  config: VindiClient
}

export declare interface PeriodUpdateData {
  id: string | number
  body: {
    billing_at?: string
    end_at?: string
  }
  requestOptions?: Options
}

export declare interface PeriodUpdateResponse extends ApiResponse {
  period: PeriodReturn & { usages: PeriodUsagesReturn[] }
}
