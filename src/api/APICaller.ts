import axios, { AxiosResponse } from 'axios';

import RequiresToken from "../decorator/RequiresToken";
import APIPayload from "./types/APIPayload";
import APIResponse from "./types/APIResponse";
import AggregatePayload, { AggregateScope } from './types/AggregatePayload';
import { AggregateData } from "./types/AggregateData";
import IAPICaller from './types/IAPICaller';

class APICaller implements IAPICaller {
  baseURL: string;

  @RequiresToken
  async fetch<T extends APIResponse> (apiPayload: APIPayload): Promise<T> {
    const response: AxiosResponse<T> = await axios(`${this.baseURL}${apiPayload.url}`, {
      method: apiPayload.method,
      params: {
        access_token: "", // fetch and synced everytime callAPI is called
      },
      headers: {
        preHeader: "here",
        ...apiPayload.headers,
      },
      data: apiPayload.body,
      withCredentials: true,
    });
    return response.data;
  }

  async fetchAggregate<T extends APIResponse>(fetchPayload: Record<string, [APIPayload, AggregateScope]>): Promise<T> {
    const aggregateData: Record<string, AggregateData> = Object
      .entries(fetchPayload)
      .reduce((acc, [key, [payload, scope]]) => ({
        ...acc,
        [key]: {
          method: payload.method,
          path: payload.url,
          payload: payload.body,
          scope,
        },
      }), {});
    const compiledBody: AggregatePayload = {
      aggregate: aggregateData
    };
    const compiledHeader: Record<string, string> = Object
      .values(fetchPayload)
      .reduce((acc, [payload]) => ({ ...acc, ...payload.headers }), {});
    const compiledPayload: APIPayload = {
      method: "POST",
      url: `${this.baseURL}/aggregate`,
      body: compiledBody,
      headers: compiledHeader
    };
    const resp: T = await this.fetch<T>(compiledPayload);
    return resp;
  }
}

export default APICaller;
