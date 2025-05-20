import { Star } from "lucide-react";
import React from "react";

export const MovieCard = () => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden w-full max-w-[240px]">
      <img
        src="dearSanta.jpg"
        alt="Dear Santa"
        className="w-full h-auto"
      />

      <div className="bg-gray-100 px-4 py-3">
        <p className="flex items-center text-sm">
          <span className="text-yellow-500 mr-1">★</span>
          <span className="font-semibold">6.9</span>
          <span className="text-gray-500 ml-1">/10</span>
        </p>
        <h2 className="text-md font-medium mt-1">Dear Santa</h2>
      </div>
    </div>
  );
}

