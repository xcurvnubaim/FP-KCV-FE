'use server'
// Inside a server-side function or module
const fs = require('fs');
// Read the contents of the file synchronously
const jsonData = fs.readFileSync('animal_description.json', 'utf8');

// Parse the JSON data
const animalData = JSON.parse(jsonData);

const data = {
    "antelope": 1.173229520645691e-06,
    "badger": 9.845873591984855e-07,
    "bat": 1.3372558669288992e-06,
    "bear": 8.765657071307942e-07,
    "bee": 7.130974154279102e-06,
    "beetle": 3.323910959807108e-06,
    "bison": 4.4422188238968374e-07,
    "boar": 2.876527105399873e-07,
    "butterfly": 6.718583790643606e-06,
    "cat": 0.9990353584289551,
    "caterpillar": 2.5053475383174373e-06,
    "chimpanzee": 6.565174430761544e-07,
    "cockroach": 8.673292541061528e-06,
    "cow": 7.811578939254105e-07,
    "coyote": 9.876236617856193e-06,
    "crab": 2.3204009380606294e-07,
    "crow": 3.818229288299335e-07,
    "deer": 1.4255883797886781e-06,
    "dog": 9.002545266412199e-05,
    "dolphin": 5.06897868035594e-06,
    "donkey": 1.1567335604922846e-06,
    "dragonfly": 7.050285830700886e-07,
    "duck": 6.808761827414855e-05,
    "eagle": 2.9829918730683858e-06,
    "elephant": 1.2387574315653183e-05,
    "flamingo": 2.486457560735289e-06,
    "fly": 3.9913338696351275e-06,
    "fox": 4.245641775924014e-06,
    "goat": 6.599278276553378e-05,
    "goldfish": 1.4737167930434225e-06,
    "goose": 8.983636689663399e-06,
    "gorilla": 7.483034778488218e-07,
    "grasshopper": 5.7898188970284536e-05,
    "hamster": 2.159275572921615e-05,
    "hare": 1.8254089809488505e-05,
    "hedgehog": 2.339234470127849e-06,
    "hippopotamus": 6.792433993041413e-08,
    "hornbill": 1.8909044001702568e-06,
    "horse": 1.671321996354891e-07,
    "hummingbird": 3.643923946583527e-06,
    "hyena": 4.4050793803762645e-06,
    "jellyfish": 2.0920185761497123e-06,
    "kangaroo": 3.517184040902066e-06,
    "koala": 4.908226401312277e-06,
    "ladybugs": 1.8065175027004443e-06,
    "leopard": 1.671820973569993e-05,
    "lion": 2.399975528533105e-06,
    "lizard": 6.12331723459647e-06,
    "lobster": 2.9824459488736466e-06,
    "mosquito": 1.2159845027781557e-05,
    "moth": 1.0729423820521333e-06,
    "mouse": 6.9082029767741915e-06,
    "octopus": 1.5517700546752167e-07,
    "okapi": 2.9700931918341666e-06,
    "orangutan": 9.693227411844418e-07,
    "otter": 7.6168721534486394e-06,
    "owl": 3.580964767024852e-05,
    "ox": 6.720862302245223e-07,
    "oyster": 8.028123374970164e-07,
    "panda": 2.298193749084021e-06,
    "parrot": 8.171709851012565e-06,
    "pelecaniformes": 1.2992811662115855e-06,
    "penguin": 4.8565081669948995e-05,
    "pig": 1.6879754412002512e-06,
    "pigeon": 1.8403496824248577e-06,
    "porcupine": 5.533831881621154e-07,
    "possum": 9.906689956551418e-05,
    "raccoon": 3.0421974770433735e-06,
    "rat": 2.2629019440500997e-05,
    "reindeer": 5.229103976489569e-07,
    "rhinoceros": 4.888361218036152e-07,
    "sandpiper": 0.00013567313726525754,
    "seahorse": 3.6719555396302894e-07,
    "seal": 8.365496796614025e-06,
    "shark": 6.672812560282182e-06,
    "sheep": 3.427749334150576e-06,
    "snake": 4.510643975663697e-06,
    "sparrow": 5.320030595612479e-06,
    "squid": 6.036320314706245e-07,
    "squirrel": 1.009071638691239e-05,
    "starfish": 1.2992811662115855e-06,
    "swan": 9.609841072233394e-06,
    "tiger": 6.2593517213827e-06,
    "turkey": 2.7295802283333614e-05,
    "turtle": 7.549093083980551e-07,
    "whale": 4.0328535533262766e-07,
    "wolf": 6.2410408645519055e-06,
    "wombat": 5.630058694805484e-06,
    "woodpecker": 2.4556229050176626e-07,
    "zebra": 6.492825377790723e-06
}

// Convert object to array of arrays
const dataArray = Object.entries(data);

// Sort the array based on the values
dataArray.sort((a, b) => b[1] - a[1]);

const result = dataArray.map((e) => ({
    name: e[0],
    prediction: e[1],
    ...animalData[e[0]]
}));

console.log(result.slice(0,3))

export async function predict(imagePreview: string | null): Promise<void> {
    if (imagePreview) {
      try {
        const formData = new FormData();
        formData.append('file', imagePreview);
  
        const response = await fetch('https://xcurv-docker-animal-classification.hf.space/predict', {
          method: 'POST',
          body: formData,
          headers: {
            'origin' : 'https://urban-xylophone-w4wq7v966wrfv9vx-3000.app.github.dev'
          }
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log(data); // Handle the response data as needed
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
}