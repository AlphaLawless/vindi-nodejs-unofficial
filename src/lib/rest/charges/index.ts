import type { VindiClient } from '@/vindi-client'
import { get } from './get'
import type { ChargeGetData, ChargeGetResponse } from './get/protocols'
import { list } from './list'
import type { ChargesListData, ChargesListResponse } from './list/protocols'
import { remove } from './remove'
import type { ChargeRemoveData, ChargeRemoveResponse } from './remove/protocols'
import { update } from './update'
import type { ChargeUpdateData, ChargeUpdateResponse } from './update/protocols'

export class Charge {
  constructor(private config: VindiClient) {}

  /**
   * Vindi List Charges.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/charges/getV1ChargesMore Information}
   */
  list(chargesListData: ChargesListData = {}): Promise<ChargesListResponse> {
    const { requestOptions, params } = chargesListData
    this.config.options = { ...this.config.options, ...requestOptions }
    return list({ config: this.config, params })
  }

  /**
   * Vindi Update a Charge.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/charges/putV1ChargesId More Information}
   */
  update(chargeUpdateData: ChargeUpdateData): Promise<ChargeUpdateResponse> {
    const { body, id, requestOptions } = chargeUpdateData
    this.config.options = { ...this.config.options, ...requestOptions }
    return update({ config: this.config, id, body })
  }

  /**
   * Vindi Get a Charge.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/charges/getV1ChargesId More Information}
   */
  get(chargeGetData: ChargeGetData): Promise<ChargeGetResponse> {
    const { id, requestOptions } = chargeGetData
    this.config.options = { ...this.config.options, ...requestOptions }
    return get({ config: this.config, id })
  }

  /**
   * Vindi Remove a Charge.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/charges/deleteV1ChargesId More Information}
   */
  remove(chargeRemoveData: ChargeRemoveData): Promise<ChargeRemoveResponse> {
    const { id, requestOptions, params } = chargeRemoveData
    this.config.options = { ...this.config.options, ...requestOptions }
    return remove({ config: this.config, id, params })
  }
}
