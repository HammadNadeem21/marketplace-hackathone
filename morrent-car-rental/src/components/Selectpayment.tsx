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

export function SelectPay(props:{name:string, subname:string, opt1:string, opt2:string, opt3:string}) {
  return (
    <Select>
      <SelectTrigger className="w-full h-[56px] text-[12p] focus:outline-none  rounded-[10px] bg-[#F6F7F9] mt-4 focus:border-none">
        <SelectValue placeholder={props.name} className="bg-[#F6F7F9] focus:outline-none"/>
      </SelectTrigger>
      <SelectContent className="bg-gray-200">
        <SelectGroup>
          <SelectLabel>{props.subname}</SelectLabel>
          <SelectItem value={props.opt1}>{props.opt1}</SelectItem>
          <SelectItem value={props.opt2}>{props.opt2}</SelectItem>
          <SelectItem value={props.opt3}>{props.opt3}</SelectItem>
       
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
