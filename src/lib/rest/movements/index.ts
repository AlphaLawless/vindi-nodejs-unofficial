import type { VindiClient } from '@/vindi-client'
import { create } from './create'
import type {
  MovementCreateData,
  MovementCreateResponse
} from './create/protocols'
import { remove } from './remove'
import type {
  MovementRemoveData,
  MovementRemoveResponse
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
   * Vindi Remove a Movement.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/movements/deleteV1MovementsId More Information}
   */
  remove(
    movementRemoveData: MovementRemoveData
  ): Promise<MovementRemoveResponse> {
    const { id, requestOptions } = movementRemoveData
    this.config.options = { ...this.config.options, ...requestOptions }
    return remove({ config: this.config, id })
  }
}
