import type { VindiClient } from '@/vindi-client'
import { get } from './get'
import type { BillItemsGetData, BillItemsGetResponse } from './get/protocols'

export class BillItems {
  constructor(private config: VindiClient) {}

  /**
   * Vindi Get a Bill Items.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/bill_items/getV1BillItemsId More Information}
   */
  get(billitemsGetData: BillItemsGetData): Promise<BillItemsGetResponse> {
    const { id, requestOptions } = billitemsGetData
    this.config.options = { ...this.config.options, ...requestOptions }
    return get({ config: this.config, id })
  }
}
