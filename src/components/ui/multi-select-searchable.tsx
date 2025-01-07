'use client';

import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface MultiSelectSearchableProps {
  items: { id: string; name: string }[];
  placeholder: string;
  inputName: string;
  defaultValue?: string[];
  isError?: boolean;
}

export function MultiSelectSearchable({
  items,
  placeholder,
  inputName,
  defaultValue = [],
  isError,
}: MultiSelectSearchableProps) {
  const [values, setValues] = useState<string[]>(defaultValue);
  const [menuOpen, setMenuOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSelect = (itemId: string) => {
    if (values.includes(itemId)) {
      setValues(values.filter((value) => value !== itemId));
    } else {
      setValues([...values, itemId]);
    }
  };

  const selectedItems = items.filter((item) => values.includes(item.id));

  useEffect(() => {
    if (items.length === 0) {
      setValues([]);
    }
  }, [items.length]);

  return (
    <>
      <input type="hidden" name={inputName} value={values.length > 0 ? values.join(',') : ''} />
      <Popover open={menuOpen} onOpenChange={setMenuOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={menuOpen}
            className={cn('w-[240px] justify-between', { 'border-red-500': isError })}
          >
            {values.length > 0 ? `${selectedItems.map((item) => item.name).join(', ')}` : `Select ${placeholder}...`}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[240px] p-0">
          <Command>
            <CommandInput name={inputName} placeholder={`Search ${placeholder}...`} ref={inputRef} />
            <CommandList>
              <CommandEmpty>
                <p>no items found</p>
              </CommandEmpty>
              <CommandGroup>
                {items?.map((item) => (
                  <div key={item.id} className="flex items-center justify-between gap-2">
                    <CommandItem
                      value={item.name}
                      onSelect={() => {
                        handleSelect(item.id);
                      }}
                      className="w-full"
                    >
                      <Check className={cn('mr-2 h-4 w-4', values.includes(item.id) ? 'opacity-100' : 'opacity-0')} />
                      {item.name}
                    </CommandItem>
                  </div>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
}
