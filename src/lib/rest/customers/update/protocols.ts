import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { VindiMetadata } from '../../protocols'
import type { Address, CustomerReturn, Phone } from '../protocols'

/**
 * Phone object for updating customer phones.
 * - To update an existing phone: provide the ID and the attributes to update
 * - To create a new phone: provide only the attributes without an ID
 * - To remove a phone: provide the ID and set _destroy to "1"
 */
export declare interface CustomerUpdatePhone
  extends Omit<Phone, 'id' | 'extension'> {
  id?: number
  extension?: string
  _destroy?: '1'
}

/**
 * Body for updating a customer.
 * All fields are optional since you can update only specific attributes.
 * @remarks
 * The **phones** array has special behavior:
 * - Can be omitted to not update any phones
 * - Each phone object can create, update, or remove a phone number
 * - For updates: include the phone ID and new attributes
 * - For creation: omit the ID and include only the attributes
 * - For deletion: include the ID and set _destroy: "1"
 */
export declare interface CustomerUpdateBody {
  name?: string
  email?: string
  registry_code?: string
  code?: string
  notes?: string
  metadata?: VindiMetadata
  address?: Partial<Address>
  phones?: Array<CustomerUpdatePhone>
}

export declare interface CustomerUpdateRequest
  extends Exclude<CustomerUpdateData, 'requestOptions'> {
  config: VindiClient
}

export declare interface CustomerUpdateData {
  id: string | number
  body: CustomerUpdateBody
  requestOptions?: Options
}

export declare interface CustomerUpdateResponse extends ApiResponse {
  customer: CustomerReturn
}
