import type { VindiClient } from '@/vindi-client'
import { list } from './list'
import type { MerchantListData, MerchantListResponse } from './list/protocols'

export class Merchant {
  constructor(private config: VindiClient) {}

  /**
   * Vindi List Merchants.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/merchants/getV1Merchants More Information}
   */
  list(merchantListData: MerchantListData = {}): Promise<MerchantListResponse> {
    const { requestOptions, params } = merchantListData
    this.config.options = { ...this.config.options, ...requestOptions }
    return list({ config: this.config, params })
  }
}
