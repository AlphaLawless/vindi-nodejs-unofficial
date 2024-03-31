import type VindiClient from '../../..'
import { get } from './get'
import type {
  UserCurrentGetData,
  UserCurrentGetResponse
} from './get/protocols'

export class User {
  constructor(private config: VindiClient) {}

  /**
   * Vindi Get Current User.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/users/getV1UsersCurrent More Information}
   */
  get(
    userCurrentData: UserCurrentGetData = {}
  ): Promise<UserCurrentGetResponse> {
    const { requestOptions } = userCurrentData
    this.config.options = { ...this.config.options, ...requestOptions }
    return get({ config: this.config })
  }
}
