import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { VindiMetadata } from '../../protocols'
import type { PricingRange, ProductReturn } from '../protocols'

export declare interface PricingSchemaUpdate {
  price?: number
  minimum_price?: number
  schema_type?: string
  pricing_ranges?: Array<Omit<PricingRange, 'id'>>
}

export declare interface ProductUpdateBody {
  name?: string
  code?: string
  unit?: string
  status?: string
  description?: string
  invoice?: string
  pricing_schema?: PricingSchemaUpdate
  metadata?: VindiMetadata
}

export declare interface ProductUpdateRequest
  extends Exclude<ProductUpdateData, 'requestOptions'> {
  config: VindiClient
}

export declare interface ProductUpdateData {
  id: string | number
  body: ProductUpdateBody
  requestOptions?: Options
}

export declare interface ProductUpdateResponse extends ApiResponse {
  product: ProductReturn
}
