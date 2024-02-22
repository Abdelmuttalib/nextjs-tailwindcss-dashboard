// const SHORT_DATE_FORMAT_OPTIONS = {
//   month: 'short',
//   day: 'numeric',
// };

// const LONG_DATE_FORMAT_OPTIONS = {
//   year: 'numeric',
//   month: 'short',
//   day: 'numeric',
//   hour: 'numeric',
//   minute: 'numeric',
// };

export const formatDate = (date: Date | string) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
};

export const formatShortDate = (date: Date | string) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString('en-us', {
    month: 'short',
    day: 'numeric',
  });
};
