import type { VindiClient } from '@/vindi-client'
import { list } from './list'
import type { RolesListData, RolesListResponse } from './list/protocols'

export class Roles {
  constructor(private config: VindiClient) {}

  /**
   * Vindi List Roles.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/roles/getV1Roles More Information}
   */
  list(rolesListData: RolesListData = {}): Promise<RolesListResponse> {
    const { requestOptions, params } = rolesListData
    this.config.options = { ...this.config.options, ...requestOptions }
    return list({ config: this.config, params })
  }
}
