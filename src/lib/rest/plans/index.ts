import type { VindiClient } from '@/vindi-client'
import { create } from './create'
import type { PlanCreateData, PlanCreateResponse } from './create/protocols'
import { get } from './get'
import type { PlanGetData, PlanGetResponse } from './get/protocols'
import { list } from './list'
import type { PlanListData, PlanListResponse } from './list/protocols'
import { items } from './plans_items'
import type { PlanItemsData, PlanItemsResponse } from './plans_items/protocols'
import { update } from './update'
import type { PlanUpdateData, PlanUpdateResponse } from './update/protocols'

export class Plan {
  constructor(private config: VindiClient) {}

  /**
   * Vindi Create Customer.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/plans/postV1Plans More Information}
   */
  create(planCreateData: PlanCreateData): Promise<PlanCreateResponse> {
    const { body, requestOptions } = planCreateData
    this.config.options = { ...this.config.options, ...requestOptions }
    return create({ body, config: this.config })
  }

  /**
   * Vindi List Plans.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/plans/getV1Plans More Information}
   */
  list(planListData: PlanListData = {}): Promise<PlanListResponse> {
    const { requestOptions, params } = planListData
    this.config.options = { ...this.config.options, ...requestOptions }
    return list({ config: this.config, params })
  }

  /**
   * Vindi Get a Plan.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/plans/getV1PlansId More Information}
   */
  get(planGetData: PlanGetData): Promise<PlanGetResponse> {
    const { id, requestOptions } = planGetData
    this.config.options = { ...this.config.options, ...requestOptions }
    return get({ config: this.config, id })
  }

  /**
   * Vindi Update Plan.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/plans/putV1PlansId More Information}
   */
  update(plansUpdateData: PlanUpdateData): Promise<PlanUpdateResponse> {
    const { requestOptions, id, body } = plansUpdateData
    this.config.options = { ...this.config.options, ...requestOptions }
    return update({ config: this.config, id, body })
  }

  /**
   * Vindi Get a Plan Items.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/plans/getV1PlansIdPlanItems More Information}
   */
  items(planItemsGetData: PlanItemsData): Promise<PlanItemsResponse> {
    const { id, requestOptions } = planItemsGetData
    this.config.options = { ...this.config.options, ...requestOptions }
    return items({ config: this.config, id })
  }
}
