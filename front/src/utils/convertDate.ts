import { format } from 'date-fns';
import { enGB, fr } from 'date-fns/locale';

const convertDate = (date: string, locale: string): string => {
  const newDate = format(new Date(date), 'dd LLLL u', {
    locale: locale === 'fr' ? fr : enGB,
  });
  return newDate;
};

export default convertDate;
