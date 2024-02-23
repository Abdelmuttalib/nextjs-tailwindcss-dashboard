// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { useState } from 'react';
import type { DateRange } from 'react-day-picker';

import cn from '@/lib/cn';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

// function getDatesInInterval(start: Date, end: Date): string[] {
//   const dates = eachDayOfInterval({ start, end });
//   return dates.map((date) => format(date, "yyyy-MM-dd"));
// }

export function DatePickerWithRange({
  className,
}: // id,
// handleDateChange,
React.HTMLAttributes<HTMLDivElement> & {
  // id: string;
  // handleDateChange: (id: string, dates: string[]) => void;
}) {
  const [date, setDate] = useState<DateRange | undefined>({
    from: '',
    to: '',
  });

  // useEffect(() => {
  //   console.log("date: ", date);
  //   if (date?.from && date?.to) {
  //     const dates = getDatesInInterval(date.from, date.to);
  //     console.log(dates);
  //     handleDateChange(id, dates);
  //   }
  // }, [date]);

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id='date'
            variant='outline'
            className={cn(
              'w-60 justify-start px-3 text-left text-sm font-normal',
              !date && 'text-gray-400'
            )}
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} -{' '}
                  {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          <Calendar
            initialFocus
            mode='range'
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
