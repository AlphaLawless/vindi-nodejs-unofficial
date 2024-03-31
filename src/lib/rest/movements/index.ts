import type { VindiClient } from '@/vindi-client'
import { create } from './create'
import type {
  MovementCreateData,
  MovementCreateResponse
} from './create/protocols'
import { exclude } from './remove'
import type {
  MovementExcludeData,
  MovementExcludeResponse
} from './remove/protocols'

export class Movement {
  constructor(private config: VindiClient) {}

  /**
   * Vindi Create Movement.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/movements/postV1Movements More Information}
   */
  create(
    movementCreateData: MovementCreateData
  ): Promise<MovementCreateResponse> {
    const { body, requestOptions } = movementCreateData
    this.config.options = { ...this.config.options, ...requestOptions }
    return create({ body, config: this.config })
  }

  /**
   * Vindi Exclude a Movement.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/movements/deleteV1MovementsId More Information}
   */
  exclude(
    movementExcludeData: MovementExcludeData
  ): Promise<MovementExcludeResponse> {
    const { id, requestOptions } = movementExcludeData
    this.config.options = { ...this.config.options, ...requestOptions }
    return exclude({ config: this.config, id })
  }
}
