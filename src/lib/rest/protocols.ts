export type VindiMetadata = unknown

export interface QueryParams<
  SearchAttributes extends string,
  SortBy = SearchAttributes
> {
  /**
   * Default Value: 1
   */
  page?: number
  /**
   * Default Value: 25
   */
  per_page?: number
  /**
   * See how to work the query param. Link in PT-BR.
   *
   * @see {@link https://atendimento.vindi.com.br/hc/pt-br/articles/204163150-Como-eu-fa%C3%A7o-para-criar-uma-consulta-de-listas-buscas-e-filtros-usando-uma-query More Information}
   */
  query?: `${SearchAttributes}:${string}`
  sort_by?: SortBy
  sort_order?: 'asc' | 'desc'
}
