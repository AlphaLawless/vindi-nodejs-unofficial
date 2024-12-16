import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { VindiMetadata } from '../../protocols'
import type { PlanReturn } from '../protocols'

/**
 * PlanItems object for managing plan-related products.
 * - To update an existing item: provide the ID and the attributes to update
 * - To create a new item: provide only the attributes without an ID
 * - To remove an item: provide the ID and set _destroy to 1
 */
export declare interface PlanItemUpdate {
  id?: number
  cycles?: number
  product_id?: number
  _destroy?: number
}

/**
 * Body for updating a plan.
 * All fields are optional since you can update only specific attributes.
 * @remarks
 * The **plan_items** array has special behavior:
 * - Can be omitted to not update any related products
 * - Each plan_items object can create, update, or remove a product relation
 * - For updates: include the item ID and new attributes
 * - For creation: omit the ID and include only the attributes
 * - For deletion: include the ID and set _destroy: 1
 */
export declare interface PlanUpdateBody {
  name?: string
  interval?: string
  interval_count?: number
  billing_trigger_type?: string
  billing_trigger_day?: number
  billing_cycles?: number
  code?: string
  description?: string
  installments?: number
  invoice_split?: boolean
  status?: string
  plan_items?: Array<PlanItemUpdate>
  metadata?: VindiMetadata
}

export declare interface PlanUpdateRequest
  extends Exclude<PlanUpdateData, 'requestOptions'> {
  config: VindiClient
}

export declare interface PlanUpdateData {
  id: string | number
  body: PlanUpdateBody
  requestOptions?: Options
}

export declare interface PlanUpdateResponse extends ApiResponse {
  plan: PlanReturn
}
