export const formatDate = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
};
