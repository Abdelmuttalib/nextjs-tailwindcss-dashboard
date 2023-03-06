import { StatusTypeT } from './types';

export const logStatusTypes: {
  [key in StatusTypeT]: { label: StatusTypeT; color: string };
} = {
  INFO: { label: 'INFO', color: 'gray' },
  WARNING: { label: 'WARNING', color: 'yellow' },
  DEBUG: { label: 'DEBUG', color: 'blue' },
  ERROR: { label: 'ERROR', color: 'red' },
  CRITICAL: { label: 'CRITICAL', color: 'red' },
};

export const getStatusTypeColor = (type: StatusTypeT) => {
  return logStatusTypes[type].color;
};
