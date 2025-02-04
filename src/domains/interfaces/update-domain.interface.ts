import { ErrorResponse } from '../../interfaces';
import { Domain } from './domain';

export interface UpdateDomainsOptions {
  id: string;
  clickTracking?: boolean;
  openTracking?: boolean;
  tls?: 'enforced' | 'opportunistic';
}

export type UpdateDomainsResponseSuccess = Pick<Domain, 'id'> & {
  object: 'domain';
};

export interface UpdateDomainsResponse {
  data: UpdateDomainsResponseSuccess | null;
  error: ErrorResponse | null;
}
