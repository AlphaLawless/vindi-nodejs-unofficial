import type { VindiClient } from '@/vindi-client'
import { cancel } from './cancel'
import type { BillCancelData, BillCancelResponse } from './cancel/protocols'
import { get } from './get'
import type { BillGetData, BillGetResponse } from './get/protocols'
import { list } from './list'
import type { BillsListData, BillsListResponse } from './list/protocols'
import { update } from './update'
import type { BillUpdateRequest, BillUpdateResponse } from './update/protocols'

export class Bills {
  constructor(private config: VindiClient) {}

  /**
   * Vindi List Bills.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/bills/getV1Bills More Information}
   */
  list(billsListData: BillsListData = {}): Promise<BillsListResponse> {
    const { requestOptions, params } = billsListData
    this.config.options = { ...this.config.options, ...requestOptions }
    return list({ config: this.config, params })
  }

  /**
   * Vindi Get a Bill.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/bills/getV1BillsId More Information}
   */
  get(billGetData: BillGetData): Promise<BillGetResponse> {
    const { id, requestOptions } = billGetData
    this.config.options = { ...this.config.options, ...requestOptions }
    return get({ config: this.config, id })
  }

  /**
   * Vindi Cancel a Bill.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/bills/deleteV1BillsId More Information}
   */
  cancel(billCancelData: BillCancelData): Promise<BillCancelResponse> {
    const { id, requestOptions, params } = billCancelData
    this.config.options = { ...this.config.options, ...requestOptions }
    return cancel({ config: this.config, id, params })
  }

  /**
   * Vindi Update a Bill.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/bills/putV1BillsId More Information}
   */
  update(billUpdateData: BillUpdateRequest): Promise<BillUpdateResponse> {
    const { body, id, requestOptions } = billUpdateData
    this.config.options = { ...this.config.options, ...requestOptions }
    return update({ config: this.config, id, body })
  }
}
