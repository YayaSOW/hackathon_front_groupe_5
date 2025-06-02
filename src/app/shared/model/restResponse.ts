export interface RestResponse<T> {
  status: number;
  results : T;
  page? : number[];
  currentpage?: number;
  totalPages?: number;
  totalItems?: number;
  first?: boolean;
  last?: boolean;
  type: string;
}
