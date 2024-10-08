export interface animalAttribute {
  name?: string;
  Jinak: boolean;
  Dilindungi: string;
  "Deskripsi bahaya": string;
  "Deskripsi singkat": string;
}

export interface animal {
  antelope: animalAttribute;
  badger: animalAttribute;
  bat: animalAttribute;
  bear: animalAttribute;
  bee: animalAttribute;
  beetle: animalAttribute;
  bison: animalAttribute;
  boar: animalAttribute;
  butterfly: animalAttribute;
  cat: animalAttribute;
  caterpillar: animalAttribute;
  chimpanzee: animalAttribute;
  cockroach: animalAttribute;
  cow: animalAttribute;
  coyote: animalAttribute;
  crab: animalAttribute;
  crow: animalAttribute;
  deer: animalAttribute;
  dog: animalAttribute;
  dolphin: animalAttribute;
  donkey: animalAttribute;
  dragonfly: animalAttribute;
  duck: animalAttribute;
  eagle: animalAttribute;
  elephant: animalAttribute;
  flamingo: animalAttribute;
  fly: animalAttribute;
  fox: animalAttribute;
  goat: animalAttribute;
  goldfish: animalAttribute;
  goose: animalAttribute;
  gorilla: animalAttribute;
  grasshopper: animalAttribute;
  hamster: animalAttribute;
  hare: animalAttribute;
  hedgehog: animalAttribute;
  hippopotamus: animalAttribute;
  hornbill: animalAttribute;
  horse: animalAttribute;
  hummingbird: animalAttribute;
  hyena: animalAttribute;
  jellyfish: animalAttribute;
  kangaroo: animalAttribute;
  koala: animalAttribute;
  ladybugs: animalAttribute;
  leopard: animalAttribute;
  lion: animalAttribute;
  lizard: animalAttribute;
  lobster: animalAttribute;
  mosquito: animalAttribute;
  moth: animalAttribute;
  mouse: animalAttribute;
  octopus: animalAttribute;
  okapi: animalAttribute;
  orangutan: animalAttribute;
  otter: animalAttribute;
  owl: animalAttribute;
  ox: animalAttribute;
  oyster: animalAttribute;
  panda: animalAttribute;
  parrot: animalAttribute;
  pelecaniformes: animalAttribute;
  penguin: animalAttribute;
  pig: animalAttribute;
  pigeon: animalAttribute;
  porcupine: animalAttribute;
  possum: animalAttribute;
  raccoon: animalAttribute;
  rat: animalAttribute;
  reindeer: animalAttribute;
  rhinoceros: animalAttribute;
  sandpiper: animalAttribute;
  seahorse: animalAttribute;
  seal: animalAttribute;
  shark: animalAttribute;
  sheep: animalAttribute;
  snake: animalAttribute;
  sparrow: animalAttribute;
  squid: animalAttribute;
  squirrel: animalAttribute;
  starfish: animalAttribute;
  swan: animalAttribute;
  tiger: animalAttribute;
  turkey: animalAttribute;
  turtle: animalAttribute;
  whale: animalAttribute;
  wombat: animalAttribute;
  woodpecker: animalAttribute;
  wolf: animalAttribute;
  zebra: animalAttribute;
}

export const animalData: Record<string, animalAttribute> = {
  "antelope": {
    "Jinak": true,
    "Dilindungi": "Partial",
    "Deskripsi bahaya": "powerful kicks when threatened",
    "Deskripsi singkat": "Antelopes are even-toed ungulate mammals found in Africa, Asia, and parts of North America. They are known for their graceful movements and ability to run swiftly"
  },
  "badger": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "sharp claw; powerful jaw",
    "Deskripsi singkat": "Badgers are short-legged omnivorous mammals known for their distinctive black-and-white striped faces. They are excellent burrowers and live in underground dens"
  },
  "bat": {
    "Jinak": true,
    "Dilindungi": "Partial",
    "Deskripsi bahaya": "carry diceases",
    "Deskripsi singkat": "Bats are the only flying mammals. They are nocturnal and use echolocation to navigate and locate prey in the dark"
  },
  "bear": {
    "Jinak": false,
    "Dilindungi": "Yes",
    "Deskripsi bahaya": "strong; sharp claw; sharp teeth",
    "Deskripsi singkat": "Bears are large carnivorous mammals found in various habitats around the world. They are known for their powerful builds, sharp claws, and ability to hibernate"
  },
  "bee": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "stings can cause allergic and pain",
    "Deskripsi singkat": "Bees are flying insects known for their ability to produce honey and pollinate plants. They live in colonies and have a complex social structure"
  },
  "beetle": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "release defensive chemicals; bite",
    "Deskripsi singkat": "Beetles are a group of insects with hard shell-like wings and a pair of antennae. They are found in various habitats and play important roles in ecosystems"
  },
  "bison": {
    "Jinak": false,
    "Dilindungi": "Yes",
    "Deskripsi bahaya": "strong; head-butting people",
    "Deskripsi singkat": "Bison are large, shaggy-haired bovine mammals native to North America. They are known for their distinctive humped shoulders and wandering herds"
  },
  "boar": {
    "Jinak": false,
    "Dilindungi": "No",
    "Deskripsi bahaya": "strong; sharp tusks",
    "Deskripsi singkat": "Boars are the wild ancestors of domestic pigs. They are stocky, hairy mammals with curved tusks and a strong sense of smell"
  },
  "butterfly": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "-",
    "Deskripsi singkat": "Butterflies are insects known for their vibrant colors and delicate wings. They undergo a remarkable metamorphosis from caterpillar to winged adult"
  },
  "cat": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "shart claw;  sharp teeth; bite",
    "Deskripsi singkat": "Cats are small domesticated carnivores known for their agility, independence, and ability to hunt rodents. They make popular household pets"
  },
  "caterpillar": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "irritating hair",
    "Deskripsi singkat": "Caterpillars are the larval stage of butterflies and moths. They are known for their voracious appetites and ability to munch through leaves"
  },
  "chimpanzee": {
    "Jinak": false,
    "Dilindungi": "Yes",
    "Deskripsi bahaya": "strong; can cause injuries with teeth and hands",
    "Deskripsi singkat": "Chimpanzees are highly intelligent primates closely related to humans. They live in social groups and use tools in the wild"
  },
  "cockroach": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "carry bacteria",
    "Deskripsi singkat": "Cockroaches are flat, oval-shaped insects known for their ability to survive in harsh environments and their tendency to infest human dwellings"
  },
  "cow": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "strong",
    "Deskripsi singkat": "Cows are domesticated bovine mammals raised for their milk, meat, and other products. They are known for their gentle nature and grazing habits"
  },
  "coyote": {
    "Jinak": false,
    "Dilindungi": "No",
    "Deskripsi bahaya": "sharp teeth; attack pets or livestock",
    "Deskripsi singkat": "Coyotes are medium-sized canines found throughout North America. They are known for their adaptability, howling calls, and tendency to live in urban areas"
  },
  "crab": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "pinching claw",
    "Deskripsi singkat": "Crabs are aquatic crustaceans with a hard exoskeleton and pincers. They are found in various marine and freshwater environments"
  },
  "crow": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "beaks and talons can inflict minor injuries",
    "Deskripsi singkat": "Crows are highly intelligent black birds known for their resourcefulness, social behavior, and distinctive \"caw\" calls"
  },
  "deer": {
    "Jinak": true,
    "Dilindungi": "Partial",
    "Deskripsi bahaya": "strong antlers",
    "Deskripsi singkat": "Deer are graceful, hoofed mammals found in various habitats around the world. They are known for their agility, speed, and distinctive antlers"
  },
  "dog": {
    "Jinak": false,
    "Dilindungi": "No",
    "Deskripsi bahaya": "bite; carry diecease",
    "Deskripsi singkat": "Dogs are domesticated carnivores and loyal companions to humans. They are known for their loyalty, intelligence, and ability to perform various tasks"
  },
  "dolphin": {
    "Jinak": true,
    "Dilindungi": "Yes",
    "Deskripsi bahaya": "strong",
    "Deskripsi singkat": "Dolphins are highly intelligent marine mammals known for their playful behavior, echolocation abilities, and social nature"
  },
  "donkey": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "kicks; bites",
    "Deskripsi singkat": "Donkeys are sturdy domesticated equines closely related to horses. They are known for their reliable nature and use as draft animals"
  },
  "dragonfly": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "-",
    "Deskripsi singkat": "Dragonflies are large, colorful insects with two pairs of transparent wings. They are skilled aerial predators that catch other insects mid-flight"
  },
  "duck": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "beaks can give small injuries",
    "Deskripsi singkat": "Ducks are waterbird species known for their webbed feet, distinctive quacking calls, and ability to float on water"
  },
  "eagle": {
    "Jinak": false,
    "Dilindungi": "Yes",
    "Deskripsi bahaya": "sharp talons; powerful beaks",
    "Deskripsi singkat": "Eagles are large birds of prey known for their impressive wingspans, keen eyesight, and majestic appearance"
  },
  "elephant": {
    "Jinak": false,
    "Dilindungi": "Yes",
    "Deskripsi bahaya": "strongl trunks",
    "Deskripsi singkat": "Elephants are the largest land mammals on Earth. They are known for their intelligence, strong family bonds, and distinctive trunks"
  },
  "flamingo": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "-",
    "Deskripsi singkat": "A flamingo's plumage is a distinctive pink color with black flight feathers along the edges of the wings"
  },
  "fly": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "carry diseases",
    "Deskripsi singkat": "Flies are small insects with two wings. They are known for their ability to spread and lay eggs in decaying matter, making them potential disease carriers"
  },
  "fox": {
    "Jinak": false,
    "Dilindungi": "No",
    "Deskripsi bahaya": "sharp teeth; sharp claw",
    "Deskripsi singkat": "Foxes are small to medium-sized canine mammals known for their reddish-brown fur, pointed snouts, and bushy tails. They are skilled hunters and scavengers"
  },
  "goat": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "strong; headbutting",
    "Deskripsi singkat": "Goats are domesticated ruminant mammals raised for their milk, meat, and fiber. They are known for their agility, curious nature, and ability to climb and graze on steep terrain"
  },
  "goldfish": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "-",
    "Deskripsi singkat": "Goldfish are small freshwater fish popular in aquariums and outdoor ponds. They are known for their bright orange coloration and ability to adapt to various environments"
  },
  "goose": {
    "Jinak": false,
    "Dilindungi": "No",
    "Deskripsi bahaya": "strong wing; strong beaks; chases",
    "Deskripsi singkat": "Geese are large waterbirds known for their distinctive honking calls and V-shaped flight formations. They migrate in flocks and can be found in various aquatic habitats"
  },
  "gorilla": {
    "Jinak": false,
    "Dilindungi": "Yes",
    "Deskripsi bahaya": "strong; powerful jaw; powerful hand",
    "Deskripsi singkat": "Gorillas are large, intelligent primates closely related to humans. They live in family groups and are known for their gentle nature when undisturbed"
  },
  "grasshopper": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "kicks; spikes",
    "Deskripsi singkat": "Grasshoppers are insects known for their ability to jump long distances and create chirping sounds. They are found in various habitats and can sometimes cause damage"
  },
  "hamster": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "sharp teeth; bites",
    "Deskripsi singkat": "Hamsters are small, furry rodents commonly kept as pets. They are known for their ability to stuff their cheeks with food and their nocturnal habits"
  },
  "hare": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "powerful hind legs; kicks",
    "Deskripsi singkat": "Hares are larger relatives of rabbits known for their long ears, long hind legs, and ability to run at high speeds. They are found in various habitats around the world"
  },
  "hedgehog": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "sharp spines",
    "Deskripsi singkat": "Hedgehogs are small, spiny mammals known for their ability to roll into a tight ball for defense. They are found in various habitats and are popular as exotic pets"
  },
  "hippopotamus": {
    "Jinak": false,
    "Dilindungi": "Yes",
    "Deskripsi bahaya": "strong jaw; one of strogest bites",
    "Deskripsi singkat": "Hippopotamuses are large, semi-aquatic mammals found in rivers and lakes in Africa. They are known for their barrel-shaped bodies and ability to stay submerged for long periods"
  },
  "hornbill": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "lager beaks;",
    "Deskripsi singkat": "Hornbills are not typically dangerous to humans, but their large, curved beaks can potentially cause minor injuries if they feel threatened"
  },
  "horse": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "powerful kicks when threatened",
    "Deskripsi singkat": "Horses are large domesticated equines used for various purposes, including transportation, sport, and work. They are known for their grace, speed, and loyalty to their handlers"
  },
  "hummingbird": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "-",
    "Deskripsi singkat": "Hummingbirds are small, colorful birds known for their ability to hover and flap their wings rapidly. They feed on nectar from flowers and are found primarily in the Americas"
  },
  "hyena": {
    "Jinak": false,
    "Dilindungi": "No",
    "Deskripsi bahaya": "powerful jaw; sharp teeth; bites",
    "Deskripsi singkat": "Hyenas are carnivorous mammals found in Africa and Asia. They are known for their distinctive calls and scavenging habits, often stealing prey from other predators"
  },
  "jellyfish": {
    "Jinak": false,
    "Dilindungi": "No",
    "Deskripsi bahaya": "sting with tentacle; venom",
    "Deskripsi singkat": "Jellyfish are free-swimming marine invertebrates with a gelatinous umbrella-shaped bell and tentacles. They are found in various oceans and seas around the world"
  },
  "kangaroo": {
    "Jinak": false,
    "Dilindungi": "Yes",
    "Deskripsi bahaya": "powerful hind legs; kicks",
    "Deskripsi singkat": "Kangaroos are large marsupial mammals native to Australia. They are known for their distinctive hopping mode of locomotion and their ability to carry their young in pouches"
  },
  "koala": {
    "Jinak": true,
    "Dilindungi": "Yes",
    "Deskripsi bahaya": "sharp claws; strong jaws",
    "Deskripsi singkat": "Koalas are small, herbivorous marsupials native to Australia. They are known for their round, fluffy appearance and for spending most of their time sleeping and resting in eucalyptus trees"
  },
  "ladybugs": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "-",
    "Deskripsi singkat": "Ladybugs, also known as ladybird beetles, are small, colorful insects known for their distinctive spotted patterns. They are beneficial for gardens as they feed on aphids and other plant pests"
  },
  "leopard": {
    "Jinak": false,
    "Dilindungi": "Yes",
    "Deskripsi bahaya": "powerful jaws; sharp claws; bites",
    "Deskripsi singkat": "Leopards are large, solitary cats known for their distinctive spotted coat patterns. They are skilled climbers and can adapt to various habitats, including forests, savannas, and urban areas"
  },
  "lion": {
    "Jinak": false,
    "Dilindungi": "Yes",
    "Deskripsi bahaya": "strong; sharp claws; powerful jaws; bites",
    "Deskripsi singkat": "Lions are large, majestic felines known for their distinctive manes (in males) and their social behavior, living in prides. They are apex predators found in various habitats in Africa and India"
  },
  "lizard": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "powerful jaws; venom",
    "Deskripsi singkat": "Lizards are reptiles with dry, scaly skin and the ability to regenerate lost tails. They come in various sizes and are found in various habitats around the world"
  },
  "lobster": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "charp claws",
    "Deskripsi singkat": "Lobsters are large, marine crustaceans known for their delicate meat and distinctive claws. They are found in various oceans and are commercially important for the seafood industry"
  },
  "mosquito": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "carry diseases",
    "Deskripsi singkat": "Mosquitoes are small, flying insects known for their ability to feed on blood from humans and animals. They breed in standing water and are found in various habitats worldwide"
  },
  "moth": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "pests",
    "Deskripsi singkat": "Moths are nocturnal insects closely related to butterflies. They are known for their diverse range of colors, patterns, and ability to navigate using the moon and stars"
  },
  "mouse": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "carry diseases",
    "Deskripsi singkat": "Mice are small rodents found in various habitats around the world. They are known for their ability to squeeze through tiny spaces and their prolific breeding habits"
  },
  "octopus": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "powerful beaks; venomous bites",
    "Deskripsi singkat": "Octopuses are intelligent, marine invertebrates known for their eight tentacles, ability to change color, and problem-solving skills. They are found in various ocean environments worldwide"
  },
  "okapi": {
    "Jinak": true,
    "Dilindungi": "Yes",
    "Deskripsi bahaya": "powerful hind legs; kicks",
    "Deskripsi singkat": "Okapis are large, herbivorous mammals closely related to giraffes. They are known for their distinctive striped markings and their reclusive nature in the dense rainforests of the Democratic Republic of Congo"
  },
  "orangutan": {
    "Jinak": true,
    "Dilindungi": "Yes",
    "Deskripsi bahaya": "immese strength; powerful jaws",
    "Deskripsi singkat": "Orangutans are large, intelligent primates found in the rainforests of Sumatra and Borneo. They are known for their reddish-brown hair, ability to swing from tree to tree, and their solitary nature"
  },
  "otter": {
    "Jinak": true,
    "Dilindungi": "Yes",
    "Deskripsi bahaya": "sharp teeth; sharp claw",
    "Deskripsi singkat": "Otters are semi-aquatic mammals known for their playful behavior, dexterity in water, and dense fur coats. They are found in various freshwater and marine environments around the world"
  },
  "owl": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "sharp beaks; sharp talons",
    "Deskripsi singkat": "Owls are nocturnal birds of prey known for their distinctive calls, silent flight, and ability to rotate their heads almost 360 degrees. They are found in various habitats worldwide"
  },
  "ox": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "horns",
    "Deskripsi singkat": "Oxen are large domesticated bovine animals closely related to cattle. They are known for their strength and have been used for various purposes, including plowing fields and pulling heavy loads"
  },
  "oyster": {
    "Jinak": true,
    "Dilindungi": "Yes",
    "Deskripsi bahaya": "-",
    "Deskripsi singkat": "Oysters are edible marine bivalve mollusks known for their distinct shells and ability to produce pearls. They are found in various coastal waters and are commercially farmed for their meat and pearl production"
  },
  "panda": {
    "Jinak": true,
    "Dilindungi": "Yes",
    "Deskripsi bahaya": "powerful jaws; sharp claws",
    "Deskripsi singkat": "Pandas are distinctive black-and-white bears native to the bamboo forests of central China. They are known for their unique appearance, gentle nature, and their status as a conservation icon"
  },
  "parrot": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "powerful beaks",
    "Deskripsi singkat": "Parrots are colorful, intelligent birds known for their ability to mimic speech and sounds. They are found in various tropical and subtropical regions around the world and are popular as pet birds"
  },
  "pelecaniformes": {
    "Jinak": true,
    "Dilindungi": "Yes",
    "Deskripsi bahaya": "sharp beaks; sharp wings",
    "Deskripsi singkat": "Pelecaniformes are a diverse order of large, fish-eating birds found near water bodies around the world. They are known for their distinctive bill shapes and fishing abilities"
  },
  "penguin": {
    "Jinak": true,
    "Dilindungi": "Yes",
    "Deskripsi bahaya": "sharp beaks",
    "Deskripsi singkat": "Penguins are flightless seabirds known for their distinctive black-and-white plumage and upright stance. They are found in various regions of the Southern Hemisphere and are adapted for swimming and diving in search of fish and other prey"
  },
  "pig": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "strong",
    "Deskripsi singkat": "Pigs are domesticated hoofed mammals raised for their meat, leather, and other products. They are known for their intelligence, ability to adapt to various environments, and their distinctive grunting sounds"
  },
  "pigeon": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "-",
    "Deskripsi singkat": "Pigeons, also known as doves, are plump, seed-eating birds found in various urban and rural environments worldwide. They are known for their distinctive cooing sounds and ability to find their way home from long distances"
  },
  "porcupine": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "sharp quills",
    "Deskripsi singkat": "Porcupines are rodents known for their distinctive coat of sharp, barbed quills used for defense. They are found in various habitats around the world and are primarily herbivorous"
  },
  "possum": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "sharp teeth; sharp claw",
    "Deskripsi singkat": "Possums are small to medium-sized marsupials found in various parts of the Americas, Australia, and Indonesia. They are known for their ability to \"play dead\" as a defense mechanism and their nocturnal habits"
  },
  "raccoon": {
    "Jinak": false,
    "Dilindungi": "No",
    "Deskripsi bahaya": "sharp teeth; sharp claw",
    "Deskripsi singkat": "Raccoons are medium-sized mammals known for their distinctive black mask-like markings around the eyes and their dexterous front paws. They are found in various habitats across North and Central America and are known for their intelligence and adaptability"
  },
  "rat": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "carry diseases",
    "Deskripsi singkat": "Rats are rodents known for their ability to gnaw through various materials, their excellent sense of smell, and their prolific breeding habits. They are found in various habitats worldwide and have adapted to live in close proximity to humans"
  },
  "reindeer": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "antlers",
    "Deskripsi singkat": "Reindeer, also known as caribou in North America, are large deer species found in the Arctic and subarctic regions. They are known for their ability to adapt to harsh environments, their distinctive antlers, and their important role in the culture and livelihoods of indigenous communities"
  },
  "rhinoceros": {
    "Jinak": false,
    "Dilindungi": "Yes",
    "Deskripsi bahaya": "strong; charge people; sharp horns",
    "Deskripsi singkat": "Rhinoceroses, or rhinos, are large, herbivorous mammals known for their distinctive horns made of keratin. They are found in various habitats in Africa and Asia and are some of the most endangered species due to poaching for their horns"
  },
  "sandpiper": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "-",
    "Deskripsi singkat": "Sandpipers are small, long-legged shorebirds found in various coastal and inland wetland habitats around the world. They are known for their distinctive probing and pecking behavior as they search for food in mud or sand"
  },
  "seahorse": {
    "Jinak": true,
    "Dilindungi": "Partial",
    "Deskripsi bahaya": "-",
    "Deskripsi singkat": "Seahorses are small, unique marine fish known for their distinctive horse-like head shape, prehensile tails, and the ability of males to become pregnant and give birth to young. They are found in various shallow coastal waters around the world"
  },
  "seal": {
    "Jinak": true,
    "Dilindungi": "Yes",
    "Deskripsi bahaya": "powerful jaws; sharp teeth",
    "Deskripsi singkat": "Seals are semi-aquatic marine mammals found in various oceans and coastal regions around the world. They are known for their streamlined bodies, flipper-like limbs, and their ability to hold their breath for extended periods while hunting for fish and other prey"
  },
  "shark": {
    "Jinak": false,
    "Dilindungi": "Partial",
    "Deskripsi bahaya": "powerful jaws; sharp teeth",
    "Deskripsi singkat": "Sharks are large, cartilaginous marine fish found in various oceans and seas around the world. They are known for their excellent sensing abilities, diverse shapes and sizes, and their role as apex predators in many marine ecosystems"
  },
  "sheep": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "horns",
    "Deskripsi singkat": "Sheep are domesticated ruminant mammals raised for their wool, meat, and milk. They are known for their gentle nature, tendency to flock together, and their distinctive bleating sounds"
  },
  "snake": {
    "Jinak": false,
    "Dilindungi": "No",
    "Deskripsi bahaya": "bite; venom",
    "Deskripsi singkat": "Snakes are elongated, legless reptiles found in various habitats around the world. They are known for their ability to swallow prey whole, their diverse colors and patterns, and their role in many ecosystems as both predators and prey"
  },
  "sparrow": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "-",
    "Deskripsi singkat": "Sparrows are small, seed-eating birds found in various habitats around the world. They are known for their chirping calls, their ability to adapt to urban environments, and their role as important seed dispersers in many ecosystems"
  },
  "squid": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "sharp beaks; squirt ink",
    "Deskripsi singkat": "Squid are marine cephalopod mollusks known for their elongated bodies, tentacles, and ability to propel themselves quickly through the water. They are found in various ocean environments and play important roles in many marine food chains"
  },
  "squirrel": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "sharp teeth; sharp claws",
    "Deskripsi singkat": "Squirrels are small, tree-dwelling rodents known for their agility, bushy tails, and ability to gather and bury nuts for later consumption. They are found in various forested and urban environments around the world"
  },
  "starfish": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "-",
    "Deskripsi singkat": "Starfish, also known as sea stars, are marine invertebrates with a distinctive radial symmetry and multiple arms. They are found in various ocean environments and play important roles in their ecosystems as predators and scavengers"
  },
  "swan": {
    "Jinak": false,
    "Dilindungi": "No",
    "Deskripsi bahaya": "strong wing; strong beaks; chases",
    "Deskripsi singkat": "Swans are large, elegant waterbirds known for their long, curved necks, white plumage, and graceful swimming. They are found in various freshwater and coastal habitats around the world and are often symbols of beauty and fidelity"
  },
  "tiger": {
    "Jinak": false,
    "Dilindungi": "Yes",
    "Deskripsi bahaya": "strong; sharp claw; powerful jaw",
    "Deskripsi singkat": "Tigers are large, solitary cats known for their distinctive striped coats, prowling abilities, and fierce hunting skills. They are apex predators found in various habitats in Asia and are revered symbols in many cultures"
  },
  "turkey": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "sharp beaks",
    "Deskripsi singkat": "Turkeys are large, domesticated birds raised for their meat and feathers. They are known for their distinctive wattles, fleshy snoods, and the male's ability to display their colorful plumage during mating season"
  },
  "turtle": {
    "Jinak": true,
    "Dilindungi": "Yes",
    "Deskripsi bahaya": "sharp beaks; sharp claws",
    "Deskripsi singkat": "Turtles are reptiles characterized by their hard, protective shells and their ability to retract their heads and limbs into their shells for defense. They are found in various habitats around the world, both on land and in water"
  },
  "whale": {
    "Jinak": true,
    "Dilindungi": "Yes",
    "Deskripsi bahaya": "strong",
    "Deskripsi singkat": "Whales are large, marine mammals known for their impressive size, complex vocalizations, and migratory patterns. They are found in various oceans and play important roles in many marine ecosystems"
  },
  "wolf": {
    "Jinak": false,
    "Dilindungi": "Partial",
    "Deskripsi bahaya": "sharp teeth; sharp claws",
    "Deskripsi singkat": "Wolves are large canine predators found in various habitats around the world. They are known for their howling calls, social behavior, and their important role in maintaining balanced ecosystems"
  },
  "wombat": {
    "Jinak": true,
    "Dilindungi": "Yes",
    "Deskripsi bahaya": "powerful jaws; sharp claws; bites",
    "Deskripsi singkat": "Wombats are stout, burrowing marsupials native to Australia. They are known for their distinctive cube-shaped feces, their ability to construct elaborate burrow systems, and their solitary nature"
  },
  "woodpecker": {
    "Jinak": true,
    "Dilindungi": "No",
    "Deskripsi bahaya": "-",
    "Deskripsi singkat": "Woodpeckers are small to medium-sized birds known for their distinctive chisel-like beaks and ability to drill into trees to find insects and create nesting cavities. They are found in various forested habitats around the world"
  },
  "zebra": {
    "Jinak": false,
    "Dilindungi": "Yes",
    "Deskripsi bahaya": "powerful kicks",
    "Deskripsi singkat": "Zebras are large, striped equine mammals native to parts of Africa. They are known for their distinctive black-and-white striped coats, social behavior in herds, and their ability to coexist with other grazing animals on the savanna"
  }
}