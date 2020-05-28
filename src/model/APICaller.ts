import axios from 'axios';

import RequiresToken from "../decorator/RequiresToken";
import APIPayload from "../interface/APIPayload";
import APIResponse from "../interface/APIResponse";
import AggregatePayload, { AggregateData, AggregateScope } from '../interface/AggregatePayload';

class APICaller implements APICaller {
  baseURL: string;

  @RequiresToken
  async fetch<T>(apiPayload: APIPayload): Promise<APIResponse<T>> {
    const response = await axios(`${this.baseURL}${apiPayload.url}`, {
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

  async fetchAggregate<T extends APIPayload>(fetchPayload: Record<string, [T, AggregateScope]>): Promise<APIResponse<T>> {
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
    const resp: APIResponse<T> = await this.fetch<T>(compiledPayload);
    return resp;
  }
}

export default APICaller;
