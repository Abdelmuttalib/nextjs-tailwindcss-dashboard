export type StatusTypeT = 'INFO' | 'WARNING' | 'DEBUG' | 'ERROR' | 'CRITICAL';

export interface LogT {
  _id: string;
  date: string;
  projectId: string;
  deviceId: string;
  type: 'INFO' | 'WARNING' | 'DEBUG' | 'ERROR' | 'CRITICAL';
  info: string;
  description: string;
  __v: number;
}

export interface LogsResponseT {
  logs: LogT[];
  totalPages: number | string;
}
