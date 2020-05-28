import { Method } from "axios";

export type AggregateScope =
  | 'public'
  | 'user'
  | 'store'
;
export interface AggregateData {
  method: Method;
  path: string;
  payload?: Record<string, unknown>;
  scope: AggregateScope;
}

export interface AggregatePayload extends Record<string, unknown> {
  aggregate: Record<string, AggregateData>;
}

export default AggregatePayload;
