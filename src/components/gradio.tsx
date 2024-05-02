import { useEffect, useState } from 'react';
import { Client } from "@gradio/client";

const GradioComponent: React.FC = () => {
  const [result, setResult] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch example image
        const response = await fetch("https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png");
        const exampleImage = await response.blob();

        // Connect to the Gradio app
        const app = await Client.connect("xcurv/FP-KCV");

        // Make prediction
        const prediction : any = await app.predict("/predict", [exampleImage]);

        // Set the result in the state
        setResult(prediction.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Render the result */}
      {result && (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
};

export default GradioComponent;
