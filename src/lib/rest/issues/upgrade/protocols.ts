import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { IssueReturn } from '../protocols'

export declare interface IssueUpdateRequest
  extends Exclude<IssueUpdateData, 'requestOptions'> {
  config: VindiClient
}

export declare interface IssueUpdateData {
  id: string | number
  body: {
    status: string
  }
  requestOptions?: Options
}

export declare interface IssueUpdateResponse extends ApiResponse {
  issue: IssueReturn
}
