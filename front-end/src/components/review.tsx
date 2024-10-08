import React, { useState } from "react";

const Review = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section>
        <div>
          <p>
            Үнэлгээ <span>бүгдийг харах</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Review;
