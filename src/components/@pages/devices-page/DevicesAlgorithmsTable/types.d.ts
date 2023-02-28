export interface InitializedDeviceAlgorithmsT {
  [key: string]: number | string;
}
export interface UninitializedDeviceAlgorithmsT {
  [key: string]: string;
}

export type AlgorithmT =
  | 'safety'
  | 'lean'
  | 'gate'
  | 'plateRecognition'
  | 'buildingProgress'
  | 'leanSecondDegree';

export interface DeviceAlgorithmsStatusT {
  status: boolean;
  unionId: string;
}

export type DeviceAlgorithmsCountT = Record<AlgorithmT, number>;

export interface DeviceAlgorithmsCounts {
  counts: DeviceAlgorithmsCountT[];
}

export type DeviceAlgorithmsT = DeviceAlgorithmsStatusT &
  DeviceAlgorithmsCounts;
