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

export function SelectAdmin(props:{name:string, opt1:string, opt2:string}) {
  return (
    <Select>
      <SelectTrigger className="xs:w-[120px] w-[80px] text-[12px] focus:outline-none bg-transparent h-[20px] mt-2">
        <SelectValue placeholder={props.name}/>
      </SelectTrigger>
      <SelectContent className="bg-gray-200">
        <SelectGroup>
          {/* <SelectLabel>Fruits</SelectLabel> */}
          <SelectItem value={props.opt1}>{props.opt1}</SelectItem>
          <SelectItem value={props.opt2}>{props.opt2}</SelectItem>
          
         
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
