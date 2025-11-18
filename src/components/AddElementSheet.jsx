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
</div>
     
      
import { buttonVariants } from "./ui/button";
import { PlusCircleIcon, Trash } from "lucide-react";
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
import { id } from "date-fns/locale/id";


export default function AddElementSheet() {
  const[items, setItems] = useState ([])

  function handleItems(id, key, value) {
    const updatedElement = items.find((el) => el.id ===id);
    const result = items.map((el) => {
      if(el.id=== id){
        updatedElement[key] = value;
        updatedElement.total = updatedElement.quantity * updatedElement.price;
        return updatedElement;
      } else {
        return el;
      }
    })


    setItems(result)
  }


  function deleteItems (id) {
    const result = items.filter(el => el.id !== id);
    setItems(result);
  }

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
   <div className="px-5 py-10 h-full overflow-y-scroll">
     <form>
        <fieldset>
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
            className="w-96 justify-between font-normal"
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
     
     <div className="grid w-full items-center gap-3 mb-5">
      <Label htmlFor="paymentTerms">Post Code</Label>
      <Select id="paymentTerms">
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a term" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Terms</SelectLabel>
          <SelectItem value="1">Net a 1 Day</SelectItem>
          <SelectItem value="7">Net a 7 Days</SelectItem>
          <SelectItem value="14">Net a 14 Days</SelectItem>
          <SelectItem value="30">Net a 30 Days</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
    </div>
     <div className="grid w-full items-center gap-3">
      <Label htmlFor="description">Project Description</Label>
      <Input type="text" id="description" name="description"/>
    </div>
    </fieldset>
    </form>
    {/* {Items} */}
    <div className="flex flex-col gap-3 mb-3">
      {items.length > 0 && items.map((el) => {
        return <div className="flex items-center gap-5">
          <Input type="text" value={el.name} name="name" onChange={(evt) => {
            handleItems(el.id, "name", evt.target.value);
          }} />
          <Input type="number" value={el.quantity} name="quantity" onChange={(evt) => {
            handleItems(el.id, "quantity,evt.target.value");
          }} /> 
          <Input type="text" value={el.price} name="price" onChange={(evt) => {
            handleItems(el.id, "price,evt.target.value");
          }} /> 
          <span>{el.total}</span>
          <Button onClick = {() => {deleteItems (el.id)}}  variant="destructive">
            <Trash />
            </Button>
        </div>
      })}

      <button className="w-full p-6 rounded-full" variant="outline" type="button" onClick={() => {
        setItems([...items,{
          name:"",
          quantity:0,
          prize:0,
          total:0,
          id: window.crypto.randomUUID(), 
        }])
      }}>+ Add new item</button>
    </div>
   </div>
  </SheetContent>
</Sheet>
  );
}