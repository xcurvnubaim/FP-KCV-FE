"use client";
import ImageUploader from "@/components/imageUploader";
import AnimalDetail from "@/components/animalDetail";
import { animalAttribute } from "@/data/animal_description";
import { useState } from "react";
import { Button, ButtonProps, styled } from "@mui/material";
import { orange, purple } from "@mui/material/colors";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: orange[500],
  "&:hover": {
    backgroundColor: orange[700],
  },
}));

export default function Home() {
  const [data, setData] = useState<
    Array<{ name: string; prediction: number } & animalAttribute>
  >([]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <div className="absolute top-6 right-6 xl:top-16 xl:right-20">
        <a href="https://medium.com/@luckysantoso709/facing-wildlife-with-ai-a-web-implementation-of-the-cnn-animal-classification-model-for-predicting-e0d52cae7818">
          <ColorButton
            className="text-black font-bold xl:py-4 xl:px-4 xl:text-md mr-4"
            variant="contained"
          >
            Article
          </ColorButton>
        </a>
        <a href="https://xcurv-fp-kcv.hf.space/">
          <ColorButton
            className="text-black font-bold xl:py-4 xl:px-4 xl:text-md"
            variant="contained"
          >
            Gradio
          </ColorButton>
        </a>
        <a href="/new-predict">
          <ColorButton
            className="text-black font-bold xl:py-4 xl:px-4 xl:text-md ml-4"
            variant="contained"
          >
            V2
          </ColorButton>
        </a>
      </div>
      <h1 className="text-4xl font-bold text-center">
        Animal Image Classifier ( Currently Not Available use gradio instead )
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
