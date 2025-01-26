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

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="xl:w-[150px] md:w-[50px] xs:w-[150px] ms:w-[70px] w-[60px] text-[12p] focus:outline-none bg-transparent h-[30px]">
        <SelectValue placeholder="Select your city"/>
      </SelectTrigger>
      <SelectContent className="bg-gray-200">
        <SelectGroup>
          {/* <SelectLabel>Fruits</SelectLabel> */}
          <SelectItem value="Karachi">Karachi</SelectItem>
          <SelectItem value="Lahore">Lahore</SelectItem>
          <SelectItem value="Islamabad">Islamabad</SelectItem>
          <SelectItem value="Peshawar">Peshawar</SelectItem>
          <SelectItem value="Faislabad">Faislabad</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
