import { Control, FieldValues, Path } from 'react-hook-form';
import { FormField, FormItem, FormMessage } from './form';

import { FormControl } from './form';

import { FormLabel } from './form';

import { Input } from './input';

interface InputFormProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  type?: string;
}

export function InputForm<T extends FieldValues>({ control, name, label, placeholder, type }: InputFormProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input placeholder={placeholder} type={type} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
