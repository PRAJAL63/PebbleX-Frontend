import React from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export default function InputField({
  label,
  type,
  placeholder,
  value,
  onChange,
  disabled = false,
}: InputFieldProps) {
  return (
    <div className="flex flex-col mb-4 w-full">
      <Label className="mb-2 text-gray-700 font-medium">{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none transition duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
      />
    </div>
  );
}
