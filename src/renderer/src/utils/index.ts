const dateFormatter = new Intl.DateTimeFormat(window.context.locale, {
  timeZone: 'Asia/Shanghai',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
});

export const formatDateFromMs = (ms: number) => dateFormatter.format(ms);
