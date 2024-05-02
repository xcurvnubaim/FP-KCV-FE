import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { animalAttribute } from "@/data/animal_description";
import PredicionPercentage from "./predictionPercentage";

interface animal {
  name: string;
  prediction: number;
}

interface AnimalDetailProps {
  key: string;
  expand: boolean;
  data: animal & animalAttribute;
}

function AnimalDetail({ key, expand, data }: AnimalDetailProps) {
  return (
    <div className="mt-4">
      <Accordion defaultExpanded={expand}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id={key}
        >
          <Typography>{data.name}</Typography>
        </AccordionSummary>
        <div className="mr-2">
          <PredicionPercentage value={data.prediction * 100} />
        </div>
        <AccordionDetails>
          <Typography>
            <div className="border-b-2 font-sans">
              <p className="font-bold">Protected</p>
              <p>{data.Dilindungi}</p>
            </div>
            <div className="border-y-2 font-sans">
              <p className="font-bold">Tame</p>
              <p>{data.Jinak ? "Yes" : "No"}</p>
            </div>
            <div className="border-y-2 font-sans">
              <p className="font-bold">Danger Description</p>
              {data["Deskripsi bahaya"].replaceAll(';',',')}
            </div>
            <div className="border-t-2 font-sans">
              <p className="font-bold">Description</p>
              <p>{data["Deskripsi singkat"]}</p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AnimalDetail;
