"use client";

import * as React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Review = () => {
  return (
    <>
      <CollapsibleDemo />
    </>
  );
};

export default Review;

export function CollapsibleDemo() {
  const [rating, setRating] = React.useState(5);
  const [isOpen, setIsOpen] = React.useState(false);
  const [reviewText, setReviewText] = React.useState("бүгдийг харах");
  const reviewBtn = () => {
    if (isOpen === true) {
      setReviewText("бүгдийг харах");
    } else {
      setReviewText("бүгдийг хураах");
    }
    return reviewText;
  };
  const myStyles = {
    itemShapes: RoundedStar,
    activeFillColor: "#FDE047",
    inactiveFillColor: "#fbf1a9",
  };

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center gap-3">
        <h4 className="text-md font-normal">Үнэлгээ</h4>
        <CollapsibleTrigger asChild>
          <button
            className="text-sky-700 underline decoration-solid"
            onClick={reviewBtn}
          >
            {reviewText}
          </button>
        </CollapsibleTrigger>
      </div>
      <Rating
        style={{ maxWidth: 100, maxHeight: 40 }}
        value={rating}
        onChange={setRating}
        itemStyles={myStyles}
        isRequired
      />
      <CollapsibleContent className="space-y-4">
        <div className="border-b-2 border-dashed px-4 py-3 font-mono text-sm flex flex-col">
          <div className="flex gap-1 items-center">
            <h5>Saraa</h5>
            <Rating
              style={{ maxWidth: 80, maxHeight: 14, gap: 1 }}
              value={rating}
              onChange={setRating}
              itemStyles={myStyles}
              isRequired
            />
          </div>
          <p className="text-xs text-gray-400">
            Ваав материал ёстой гоё байна 😍
          </p>
        </div>
        <div className="border-b-2 border-dashed px-4 py-3 font-mono text-sm flex flex-col">
          <h5>Saraa</h5>
          <p className="text-xs text-gray-400">
            Ваав материал ёстой гоё байна 😍
          </p>
        </div>
        <div className="border-b-2 border-dashed px-4 py-3 font-mono text-sm flex flex-col">
          <h5>Saraa</h5>
          <p className="text-xs text-gray-400">
            Ваав материал ёстой гоё байна 😍
          </p>
        </div>
        <section className="bg-slate-100 border rounded-xl h-56 pl-5 pt-2  mt-4 flex flex-col">
          <h4 className="text-sm font-medium">Одоор үнэлэх:</h4>
          <Rating
            style={{ maxWidth: 100, maxHeight: 35 }}
            value={rating}
            onChange={setRating}
            itemStyles={myStyles}
            isRequired
          />
          <div className="flex flex-col gap-2 mt-6">
            <p className="text-sm font-medium">Сэтгэгдэл үлдээх:</p>
            <input
              type="text"
              placeholder="Энд бичнэ үү"
              className="h-16 w-[300px] border rounded-[9px] pl-2 text-xs pb-10"
            />
          </div>
          <button className="w-24 h-7 border rounded-full bg-blue-700 text-white text-sm mt-4">
            Үнэлэх
          </button>
        </section>
      </CollapsibleContent>
    </Collapsible>
  );
}
