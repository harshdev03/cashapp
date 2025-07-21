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

export function SelectBank() {
  return (
    <Select >
      <SelectTrigger  className="w-[180px]">
        <SelectValue placeholder="Choose a Bank " />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Banks</SelectLabel>
          <SelectItem value="hdfcbanks">HDFC BANK</SelectItem>
          <SelectItem value="axisbanks">AXIS BANK</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
