import { Button } from './button';
import { cn } from '@/lib/utils';
import { Control, FieldValues, Path } from 'react-hook-form';
import { FormControl, FormLabel } from './form';
import { PopoverContent, PopoverTrigger } from './popover';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from './calendar';
import { FormField, FormItem, FormMessage } from './form';
import { Popover } from './popover';
import { DateRange } from 'react-day-picker';

interface DateRangePickerFormProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
}

export function DateRangePickerForm<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
}: DateRangePickerFormProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          {label && <FormLabel>{label}</FormLabel>}
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={'outline'}
                  className={cn('min-w-[200px] pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}
                >
                  {field.value?.from ? (
                    field.value.to ? (
                      <>
                        {format(field.value.from, 'LLL dd, y')} - {format(field.value.to, 'LLL dd, y')}
                      </>
                    ) : (
                      format(field.value.from, 'LLL dd, y')
                    )
                  ) : (
                    <span>{placeholder}</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="range"
                selected={field.value as DateRange}
                onSelect={field.onChange}
                initialFocus
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
