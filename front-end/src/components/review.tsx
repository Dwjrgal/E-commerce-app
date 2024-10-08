
"use client"

import * as React from "react"
import { ChevronsUpDown, Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Rating, ThinRoundedStar, ThinStar } from '@smastrom/react-rating'


const Review = () => {
  return (
    <>
      <section>
        <div>
          <CollapsibleDemo/>
        </div>
      </section>
    </>
  );
};

export default Review;
 
export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center gap-3">
        <h4 className="text-md font-normal">
            Үнэлгээ
        </h4>
        <CollapsibleTrigger asChild>
        <span className="text-sky-700 underline decoration-solid">бүгдийг харах</span>
        </CollapsibleTrigger>
        <Rating/>
      </div>
      <CollapsibleContent className="space-y-2">
      <div className="border-b-2 border-dashed px-4 py-3 font-mono text-sm flex flex-col">
       Saraa
      </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
