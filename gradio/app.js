import { Client } from "@gradio/client";

const getResponse = async () => {
    const response_0 = await fetch("https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png");
    const exampleImage = await response_0.blob();
						
    const app = await Client.connect("xcurv/FP-KCV");
    const result = await app.predict("/predict", [
				exampleImage, 	// blob in 'inp' Image component
	]);

    console.log(result.data);
}

getResponse()