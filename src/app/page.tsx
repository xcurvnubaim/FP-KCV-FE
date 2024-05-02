"use client";
import ImageUploader from "@/components/imageUploader";
import AnimalDetail from "@/components/animalDetail";
import { animalAttribute } from "@/data/animal_description";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState<
    Array<{ name: string; prediction: number } & animalAttribute>
  >([]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <h1 className="text-4xl font-bold text-center">
        Animal Image Classifier
      </h1>
      <ImageUploader animalData={data} updateAnimalData={setData} />
      <div className="mt-4">
        {data.length > 0 && data[0].prediction > 0.66 ? (
          data.map((animal, i) =>
            animal.prediction > 0.2 ? (
              <AnimalDetail key={i.toString()} expand={i == 0} data={animal} />
            ) : (
              <></>
            )
          )
        ) : (
          <h1 className="text-2xl text-red-800 font-bold text-center">
            Image not recognized
          </h1>
        )}
      </div>
    </main>
  );
}
