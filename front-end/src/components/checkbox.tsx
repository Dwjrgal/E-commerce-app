import { Category } from "@/lib/types";
import { apiUrl } from "@/lib/util";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { useEffect, useState } from "react";

export const CheckboxDemo = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getCategories = async () => {
    try {
      const res = await axios.get(`${apiUrl}/categories`);
      setCategories(res.data.category);
      console.log("categories data", res);
    } catch (error: unknown) {
      console.error("failed to get categories data", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, [getCategories]);
  console.log("categories:", categories);
  return (
    <div className="flex flex-col items-start space-x-2 gap-3">
      <h4 className="font-bold">Ангилал</h4>
      {Array.isArray(categories) &&
        categories.map((category: Category) => (
          <div className="flex gap-2" key={category.name}>
            <Checkbox id={`category-${category.name}`} className="rounded" />
            <label
              htmlFor={`category-${category.name}`}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {category.name}
            </label>
          </div>
        ))}
    </div>
  );
};
