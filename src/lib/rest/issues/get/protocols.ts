import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { IssueReturn } from '../protocols'

export declare interface IssueGetRequest
  extends Exclude<IssueGetData, 'requestOptions'> {
  config: VindiClient
}

export declare interface IssueGetData {
  id: string | number
  requestOptions?: Options
}

export declare interface IssueGetResponse extends ApiResponse, IssueReturn {}
