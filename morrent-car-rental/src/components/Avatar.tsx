import avatar from "../../public/avatar.jpg"
import {
    Avatar,
    AvatarFallback,
  
  } from "@/components/ui/avatar"
import Image from "next/image"
  
  export function AvatarDemo() {
    return (
      <Avatar>
        <Image src={avatar} alt="avatar"/>
        <AvatarFallback></AvatarFallback>
      </Avatar>
    )
  }
  