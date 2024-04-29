"use client";

import STORIES from "@/constants/Stories";
import { StoryType } from "@/types/StoryType";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [currentStory, setCurrentStory] = useState<StoryType>(STORIES[1]);
  const [isStoryFinal, setIsStoryFinal] = useState(false);

  const handleStoryChange = (choiceId: number) => {
    if (choiceId) {
      const newStory = STORIES.find(story => story.id === choiceId);
      if (newStory) setCurrentStory(newStory);
      if (!newStory?.choices) setIsStoryFinal(true);
    }
  }

  return (
    <div className="flex flex-col w-full items-center my-48">

      <button
        className={`absolute top-20 left-20 bg-blue-500 p-2 rounded-lg text-white hover:scale-110 my-2 ${isStoryFinal ? 'animate-bounce' : ''}`} onClick={() => {
          setCurrentStory(STORIES[1]);
          setIsStoryFinal(false);
        }}>
        Gå tilbage til starten
      </button>

      <h1 className="text-center text-[36px] font-bold">{currentStory.header}</h1>

      <div className="border-2 w-1/2 mt-4 text-xl text-center italic mb-10 border-blue-300 p-6 rounded-lg">
        <p>
          {currentStory.description}
        </p>
      </div>

      {!isStoryFinal &&
        <p className="mt-16 mb-8 font-bold text-[24px] text-center"> Træf et valg</p>
      }

      <div className="flex justify-between h-auto w-1/2">
        {
          !isStoryFinal && currentStory.choices && currentStory.choices?.map((choice, index) => (
            <div key={choice.id} className="flex flex-col items-between justify-center mx-10 ">
              <p className="text-center font-semibold mb-3">{choice.description}</p>
              <button className="bg-blue-500 p-2 rounded-lg text-white hover:scale-110 my-2" onClick={() => handleStoryChange(choice.id)}>{choice.header}</button>
            </div>
          ))
        }

        {
          isStoryFinal &&
          <div className="border-4 text-center bg-green-500 italic border-red-500 p-4 rounded-lg">
            <p>
              No more actions to make - it's the end!
            </p>
          </div>
        }

      </div>

    </div >
  );
}