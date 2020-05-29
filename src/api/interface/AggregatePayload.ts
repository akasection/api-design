import { AggregateData } from "./AggregateData";

export type AggregateScope =
  | 'public'
  | 'user'
  | 'store'
;
export interface AggregatePayload extends Record<string, unknown> {
  aggregate: Record<string, AggregateData>;
}

export default AggregatePayload;
