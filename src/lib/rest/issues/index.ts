import type { VindiClient } from '@/vindi-client'
import { get } from './get'
import type { IssueGetData, IssueGetResponse } from './get/protocols'
import { list } from './list'
import type { IssueListData, IssueListResponse } from './list/protocols'
import { update } from './upgrade'
import type { IssueUpdateData, IssueUpdateResponse } from './upgrade/protocols'

export class Issue {
  constructor(private config: VindiClient) {}

  /**
   * Vindi List Issues.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/issues/getV1Issues More Information}
   */
  list(issueListData: IssueListData = {}): Promise<IssueListResponse> {
    const { requestOptions, params } = issueListData
    this.config.options = { ...this.config.options, ...requestOptions }
    return list({ config: this.config, params })
  }

  /**
   * Vindi Get a Issues.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/issues/getV1IssuesId More Information}
   */
  get(issueGetData: IssueGetData): Promise<IssueGetResponse> {
    const { id, requestOptions } = issueGetData
    this.config.options = { ...this.config.options, ...requestOptions }
    return get({ config: this.config, id })
  }

  /**
   * Vindi Update a Issues.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/issues/putV1IssuesId More Information}
   */
  update(issueUpdateData: IssueUpdateData): Promise<IssueUpdateResponse> {
    const { body, id, requestOptions } = issueUpdateData
    this.config.options = { ...this.config.options, ...requestOptions }
    return update({ config: this.config, id, body })
  }
}
