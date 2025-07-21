import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectBank({
  onSelect,
  options
}: {
  onSelect: (value: string) => void;
  options: {
    key: string;
    value: string;
  }[];
}) {
  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Choose a Bank" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Banks</SelectLabel>
          {options.map((bank) => (
            <SelectItem key={bank.key} value={bank.value}>
              {bank.key}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
