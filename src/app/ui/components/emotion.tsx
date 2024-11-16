"use client";

import { useState } from "react";

export function Emotion() {

    const [emotion, setEmotion] = useState<string | null>(null);

    //List of emotions with icons

    const emotions = [
        { name: "Happy", icon: "😊"},
        { name: "Sad", icon: "😢"},
        { name: "Angry", icon: "😡"},
        { name: "Anxious", icon: "😟"},
        { name: "Excited", icon: "😆"},
        { name: "Tired", icon: "😴"},
    ];

    interface Emotion {
        name: string;
        icon: string;
    }

    // Function to handle the selection of an emotion

    const handleEmotionClick = (emotion: string): void => {
        setEmotion(emotion);
        console.log(`Emotion saved: ${emotion}`);
    };

    // Function to save the selected emotion
    const saveEmotion = () => {
        if (emotion) {
          console.log(`Emotion saved: ${emotion}`);
          alert(`Your emotion "${emotion}" has been saved!`);
        } else {
          alert("Please select an emotion first.");
        }
      };

    return (
        <div className="overflow-hidden rounded-lg bg-white shadow my-3">
            <div className="px-4 py-5 sm:p-6">
                <div className="mb-4">
                <h1 className="text-2xl">Mood</h1>
                <h2 className="text-base">How are you feeling?</h2>
                </div>
                <div className="flex flex-wrap">
                    {emotions.map((item, index) => (
                        <button
                            key={index}
                            className={`flex items-center p-3 m-2 rounded-full ${
                                emotion === item.name ? "bg-rose-500 text-white" : "bg-gray-200 text-gray-800"
                              } hover:bg-gray-300`}
                              onClick={() => handleEmotionClick(item.name)}>
                            <span className="mr-1">{item.icon}</span>
                            <span>{item.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
    }