import type { VindiClient } from '@/vindi-client'
import { get } from './get'
import type { PeriodGetData, PeriodGetResponse } from './get/protocols'
import { list } from './list'
import type { PeriodListData, PeriodListResponse } from './list/protocols'
import { update } from './update'
import type { PeriodUpdateData, PeriodUpdateResponse } from './update/protocols'
import { usages } from './usages'
import type {
  PeriodUsageGetData,
  PeriodUsageGetResponse
} from './usages/protocols'

export class Period {
  constructor(private config: VindiClient) {}

  /**
   * Vindi List Periods.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/periods/getV1Periods More Information}
   */
  list(periodListData: PeriodListData = {}): Promise<PeriodListResponse> {
    const { requestOptions, params } = periodListData
    this.config.options = { ...this.config.options, ...requestOptions }
    return list({ config: this.config, params })
  }

  /**
   * Vindi Update a Period.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/periods/putV1PeriodsId More Information}
   */
  update(periodUpdateData: PeriodUpdateData): Promise<PeriodUpdateResponse> {
    const { body, id, requestOptions } = periodUpdateData
    this.config.options = { ...this.config.options, ...requestOptions }
    return update({ config: this.config, id, body })
  }

  /**
   * Vindi Get a Period.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/periods/getV1PeriodsId More Information}
   */
  get(periodGetData: PeriodGetData): Promise<PeriodGetResponse> {
    const { id, requestOptions } = periodGetData
    this.config.options = { ...this.config.options, ...requestOptions }
    return get({ config: this.config, id })
  }

  /**
   * Vindi Create Period.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/periods/postV1PeriodsIdBill More Information}
   */
  create(periodCreateData: any): string {
    const { body, requestOptions } = periodCreateData
    this.config.options = { ...this.config.options, ...requestOptions }
    return 'WIP, see more on https://vindi.github.io/api-docs/dist/#/periods/postV1PeriodsIdBill'
  }

  /**
   * Vindi Get a Period Usage.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/periods/getV1PeriodsIdUsages More Information}
   */
  usages(
    periodUsageGetData: PeriodUsageGetData
  ): Promise<PeriodUsageGetResponse> {
    const { id, requestOptions } = periodUsageGetData
    this.config.options = { ...this.config.options, ...requestOptions }
    return usages({ config: this.config, id })
  }
}
