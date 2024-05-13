import type { VindiClient } from '@/vindi-client'
import { list } from './list'
import type { BillsListData, BillsListResponse } from './list/protocols'

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
}
