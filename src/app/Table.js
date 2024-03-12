'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";


  import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"


  import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"


export default function table() {
  return (
    <div>
    <main className='flex flex-col mx-auto mt-6 w-3/4 items-center justify-items-center justify-around'>
        <Table>
 
  <TableHeader>
    <TableRow>
      <TableHead className="w-1/6 ">Pracownik</TableHead>
      <TableHead className="w-1/6 text-center">12.03.2024</TableHead>
      <TableHead className="w-1/6 text-center">13.03.2024</TableHead>
      <TableHead className="w-1/6 text-center">14.03.2024</TableHead>
      <TableHead className="w-1/6 text-center">15.03.2024</TableHead>
      <TableHead className="w-1/6 text-center">16.03.2024</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>


      <Popover className="w-1/6 font-medium w-1/6 cursor-pointer text-center relative">
        <PopoverTrigger> <TableCell className="font-bold">Jan Kowalski</TableCell></PopoverTrigger>
        <PopoverContent className="flex absolute mx-auto my-auto">Place content for the popover here.</PopoverContent>
      </Popover>
      <TableCell className="w-1/6 text-center">6-14</TableCell>
      <TableCell className="w-1/6 text-center">6-14</TableCell>
      <TableCell className="w-1/6 text-center">6-14</TableCell>
      <TableCell className="w-1/6 text-center">6-14</TableCell>
      <TableCell className="w-1/6 text-center">6-14</TableCell>
    </TableRow>
  </TableBody>
</Table>

<Pagination className="mt-6">
  <PaginationContent>
  <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
  </PaginationContent>
</Pagination>
    </main>
    </div>
  );
}
