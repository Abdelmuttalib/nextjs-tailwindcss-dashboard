export function getMeetingStatusBadgeColor(meetingStatus: string) {
  switch (meetingStatus) {
    case 'confirmed':
      return 'green';
    case 'postponed':
      return 'yellow';
    case 'scheduled':
      return 'blue';
    case 'cancelled':
      return 'dark-gray';
    default:
      return 'gray';
  }
}
