
import Image from 'next/image'
import Expano from "../../public/logo_icon.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";

export default function Nav() {
  return (
    <nav className='flex w-full items-center justify-items-center justify-around'>
      <Image src={Expano} width={300} height={200} alt="Expano company logo" />
      
      <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Moje konto</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Moj profil</DropdownMenuItem>
        <DropdownMenuItem>Harmonogram</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </nav>
  );
}
