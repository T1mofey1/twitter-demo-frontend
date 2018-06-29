import format from 'date-fns/format';
import isToday from 'date-fns/is_today';
import differenceInMinutes from 'date-fns/difference_in_minutes';
import differenceInHours from 'date-fns/difference_in_hours';
import isThisHour from 'date-fns/is_this_hour';
import isThisYear from 'date-fns/is_this_year';

export default function (date) {
  const now = new Date();

  if (isThisYear(date)) {
    if (isToday(date)) {
      if (isThisHour(date)) {
        return `${differenceInMinutes(now, date)}m`;
      }
      return `${differenceInHours(now, date)}h`;
    }
    return format(date, 'MMM DD');
  }
  return format(date, 'DD MMM YYYY');
}
