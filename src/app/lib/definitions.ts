export type Indicator = {
  indicatorId: number;
  title: string;
  subtitle: string;
  mapPath: string;
  histogramPath: string;
  tablePath: string;
  odsPath: string;
  formula: string;
  remarks: string;
  year: number;
  source: string;
  bestDistrict: number | string;
  bestValue: number;
  worseDistrict: number | string;
  worseValue: number;
  median: number;
  mean: number;
  asymmetry: number;
};

export type IndicatorGroup = {
  id: number;
  subject: string;
  indicators: Indicator[];
};
