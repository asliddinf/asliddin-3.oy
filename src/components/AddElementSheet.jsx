import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

<div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
        Invoice Date
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-48 justify-between font-normal"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>

import { buttonVariants } from "./ui/button";
import { PlusCircleIcon } from "lucide-react";
import { Input } from "./ui/input";

import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react";


export default function AddElementSheet() {
     const [open, setOpen] = useState(false);
  const [date, setDate] = useState(undefined);
    
  return (
    <Sheet>
  <SheetTrigger className={`${buttonVariants({variant: "default"})} rounded-full!`}><PlusCircleIcon/> New Invoice</SheetTrigger>
  <SheetContent className="h-[85vh]" side="bottom">
    <SheetHeader>
      <SheetTitle>New Invoice</SheetTitle>
      <SheetDescription>Add new element</SheetDescription>
    </SheetHeader>
    <form className="p-5">
        <fieldset className="mb-10">
            <legend className="font-bold text-[#7C5DFA] mb-5">Bill From</legend>
    <div className="grid w-full items-center gap-3 mb-5">
      <Label htmlFor="senderAddress.street">Street Address</Label>
      <Input type="text" id="senderAddress.street" name="senderAddress.street"/>
    </div>
    <div className="flex gap-6">
        <div className="grid w-full items-center gap-3">
      <Label htmlFor="senderAddress.city">City</Label>
      <Input type="text" id="senderAddress.city" name="senderAddress.city"/>
    </div>
     <div className="grid w-full items-center gap-3">
      <Label htmlFor="senderAddress.postCode">Post Code</Label>
      <Input type="text" id="senderAddress.postCode" name="senderAddress.postCode"/>
    </div>
    <div className="grid w-full items-center gap-3">
      <Label htmlFor="senderAddress.country">Country</Label>
      <Input type="text" id="senderAddress.country" name="senderAddress.country"/>
    </div>
    </div>
        </fieldset>
        <fieldset className="mb-10">
            <legend className="font-bold text-[#7C5DFA] mb-5">Bill To</legend>
             <div className="grid w-full items-center gap-3 mb-5">
      <Label htmlFor="clientName">Clients Name</Label>
      <Input type="text" id="clientName" name="clientName"/>
    </div>
     <div className="grid w-full items-center gap-3 mb-5">
      <Label htmlFor="clientEmail">Clients Email</Label>
      <Input type="email" id="clientEmail" name="clientEmail" placeHolder="e.g. email@example.com"/>
    </div>
    <div className="grid w-full items-center gap-3 mb-5">
      <Label htmlFor="clientAddress.street">Street Address</Label>
      <Input type="text" id="clientAddress.street" name="clientAddress.street"/>
    </div>
    <div className="flex gap-6 mb-5">
        <div className="grid w-full items-center gap-3">
      <Label htmlFor="clientAddress.city">City</Label>
      <Input type="text" id="clientAddress.city" name="clientAddress.city"/>
    </div>
     <div className="grid w-full items-center gap-3">
      <Label htmlFor="clientAddress.postCode">Post Code</Label>
      <Input type="text" id="clientAddress.postCode" name="clientAddress.postCode"/>
    </div>
    <div className="grid w-full items-center gap-3">
      <Label htmlFor="clientAddress.country">Country</Label>
      <Input type="text" id="clientAddress.country" name="clientAddress.country"/>
    </div>
    </div>
    {/* {CALENDAR} */}
     <div className="flex gap-5">
        <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
        Invoice Date
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-48 justify-between font-normal"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
    {/* {SELECT} */}

    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
     </div>
        </fieldset>

    </form>
  </SheetContent>
</Sheet>
  );
}