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

export function SelectRent(props:{name:string, opt1:string, opt2:string, opt3:string, opt4:string, opt5:string}) {
  return (
    <Select>
      <SelectTrigger className="xl:w-[100px] lg:w-[90px] xs:w-[140px]  ms:w-[80px] w-[60px] text-[12p] focus:outline-none bg-transparent h-[30px]">
        <SelectValue placeholder={props.name}/>
      </SelectTrigger>
      <SelectContent className="bg-gray-200">
        <SelectGroup>
          {/* <SelectLabel>Fruits</SelectLabel> */}
          <SelectItem value={props.opt1}>{props.opt1}</SelectItem>
          <SelectItem value={props.opt2}>{props.opt2}</SelectItem>
          <SelectItem value={props.opt3}>{props.opt3}</SelectItem>
          <SelectItem value={props.opt4}>{props.opt4}</SelectItem>
          <SelectItem value={props.opt5}>{props.opt5}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
