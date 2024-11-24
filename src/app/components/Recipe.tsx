"use client";
import React, { useEffect, useState } from "react";
import { HeartIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface CardProps {
  title: string;
  time: string;
  rating: number;
  diet: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, time, rating, diet, image }) => {
  return (
    <div className="w-full h-auto flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-200">
      <Image
       src={image || '/images/default-image.jpg'}  
       alt={title || 'Image description'}
       className="w-full h-40 object-cover" 
       width={640}  
       height={160} 
      />
      <div className="p-4 space-y-2">
        <span className="text-gray-400 text-sm">{diet}</span>
        <h3 className="text-2xl font-semibold flex justify-between">{title} <span className="text-yellow-500 text-sm"> ★ {rating}</span></h3>
        <div className="text-orange-500 flex font-semibold justify-between">
          <p>{time}</p>
          <span className="flex">
            <HeartIcon className="h-6 w-6 text-gray-500 hover:text-red-500" />
            <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-gray-500" />
          </span>
        </div>
      </div>
    </div>
  );
};


interface FoodItem {
  id: number;
  title: string;
  time: string;
  rating: number;
  diet: string;
  image: string;
}

const Recipe: React.FC = () => {
  const [foodList, setFoodList] = useState<FoodItem[]>([]);

  useEffect(() => {
    fetch('/data/recipes.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setFoodList(data))
      .catch((error) => console.error('Error loading the JSON data:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
      {foodList.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          time={item.time}
          rating={item.rating}
          diet={item.diet}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Recipe;
