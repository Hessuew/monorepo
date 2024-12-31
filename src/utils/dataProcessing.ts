import { getYear, parseISO } from 'date-fns';

export interface GroupableByYear {
  date: string;
}

export const getUniqueValues = <T>(items: T[], key: keyof T): T[keyof T][] =>
  Array.from(new Set(items.map((item) => item[key]))).filter(Boolean);

export const groupByYear = <T extends GroupableByYear>(items: T[]): Record<number, T[]> =>
  items.reduce(
    (acc, item) => {
      const date = parseISO(item.date);
      const year = getYear(date);
      acc[year] = [...(acc[year] || []), item];
      return acc;
    },
    {} as Record<number, T[]>
  );
