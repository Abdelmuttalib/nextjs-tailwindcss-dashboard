export type StatusTypeT = 'INFO' | 'WARNING' | 'DEBUG' | 'ERROR' | 'CRITICAL';

export type LogT = {
  _id: string;
  date: string;
  projectId: string;
  deviceId: string;
  type: 'INFO' | 'WARNING' | 'DEBUG' | 'ERROR' | 'CRITICAL';
  info: string;
  description: string;
  __v: number;
};
