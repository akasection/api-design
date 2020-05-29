import { Method } from "axios";
import { AggregateScope } from "./AggregatePayload";
export interface AggregateData {
  method: Method;
  path: string;
  payload?: Record<string, unknown>;
  scope: AggregateScope;
}
