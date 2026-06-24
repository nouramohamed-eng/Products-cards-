import React from "react";
import { Star } from "lucide-react";
import { HeartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
const Card = ({post_title, post_body,post_price,post_image,post_rate}) => {
  return (
    
      <div className="product-card bg-white border shadow-2xl py-4 px-4 rounded-lg flex flex-col gap-4  w-fit mx-auto">
        <div className="product-card-image aspect-square min-h-3 overflow-hidden rounded-4xl relative">
          <img
            className="w-full h-full "
            src={post_image}
            alt="product card"
          />
          <div className="heart-icon bg-white rounded-full p-2 w-fit top-3 right-2 absolute">
            <HeartIcon color="rgb(203, 76, 76)" fill="rgb(203, 76, 76)" />
          </div>
        </div>
        <div className="product-card-content flex flex-col gap-4">
          <div className="card-header flex justify-between">
            <h3 className="text-lg font-medium line-clamp-1">
              {post_title}
            </h3>
            <div className="card-rate flex items-center gap-1.5 ">
              <Star
                color="rgb(86, 150, 145)"
                fill="rgb(86, 150, 145)"
                size={20}
              />
              <p className="text-gray-600">{post_rate}</p>
            </div>
          </div>
          <p className="text-gray-400 text-md max-aspect-square line-clamp-2 capitalize">
            {post_body}
          </p>
          <div className="card-fixed-icon flex gap-2">
            <Button className="bg-white border border-gray-400 text-gray-600 px-3">
              25 ml
            </Button>
            <Button className="bg-white border border-gray-400 text-gray-600 px-3">
              50 ml
            </Button>
            <Button className="bg-secondary border border-gray-400 text-white px-3">
              100 ml
            </Button>
          </div>
          <div className="card-pricing flex items-center justify-between">
            <h3 className="text-gray-500">{post_price}</h3>
            <Button className="rounded-4xl p-5 text-secondary border border-secondary">
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    
  );
};

export default Card;
