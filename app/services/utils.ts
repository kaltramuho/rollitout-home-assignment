export const formatDateString = (isoDateString: string) => {
  const date = new Date(isoDateString);

  // You can specify options to format the date as you wish
  const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const timeOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

  const dateString = date.toLocaleDateString('en-US', dateOptions);
  const timeString = date.toLocaleTimeString('en-US', timeOptions);

  return `${dateString} ${timeString}`;
}