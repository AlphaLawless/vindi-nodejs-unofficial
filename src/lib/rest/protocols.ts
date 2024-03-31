export type VindiMetadata = unknown

export interface QueryParams<SearchAttributes> {
  page: number
  per_page: number
  query?: string
  sort_by?: SearchAttributes
  sort_order?: 'asc' | 'desc'
}
