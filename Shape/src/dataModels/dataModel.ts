export interface Dims {
  a: number;
  b?: number;
  c?: number;
}

export interface Area {
  shape: string;
  id: number;
  area: number;
  dimension: Dims;
  createdAt: Date
}
