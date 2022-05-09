export interface Filters {
  page: number;
  status?: string;
  species?: string;
  gender?: string;
  name?: string;
}

export interface SelectedFilter {
  filter: string;
  value: string;
}

export interface FilterData {
  name: string;
  active: boolean;
}
