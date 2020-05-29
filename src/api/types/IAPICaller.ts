import APIPayload from "./APIPayload";
import APIResponse from "./APIResponse";
import { AggregateScope } from "./AggregatePayload";

interface IAPICaller {
  baseURL: string;
  fetch<T extends APIResponse>(apiPayload: APIPayload): Promise<T>;
  fetchAggregate<T extends APIResponse>(fetchPayload: Record<string, [APIPayload, AggregateScope]>): Promise<T>;
}

export default IAPICaller;
