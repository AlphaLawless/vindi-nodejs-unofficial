import type { VindiMetadata } from '../protocols'

export declare interface CustomerReturn {
  id: number
  name: string
  email: string
  registry_code: string
  code: string
  notes: string
  status: string
  created_at: string
  updated_at: string
  metadata: VindiMetadata
  address: Address
  phones: Phone[]
}

export declare interface CustomerBody {
  name: string
  email: string
  registry_code: string
  code: string
  notes?: string
  metadata?: VindiMetadata
  address: Omit<Address, 'additional_details' | 'number'> & {
    number?: string
    additional_details?: string
  }
  phones: Omit<Phone, 'id'>[]
}

export declare interface Address {
  street: string
  number: string
  additional_details: string
  zipcode: string
  neighborhood: string
  city: string
  state: string
  country: string
}

export declare interface Phone {
  id: number
  phone_type: string
  number: string
  extension: string
}
