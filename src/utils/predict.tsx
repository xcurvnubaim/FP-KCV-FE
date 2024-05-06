import { animalAttribute, animalData } from '../data/animal_description';

export async function getDescription(data: Record<string, number>): Promise<Array<{ name: string; prediction: number; } & animalAttribute>> {
    // Convert object to array of arrays
    const dataArray: Array<[string, number]> = Object.entries(data);

    // Sort the array based on the values
    dataArray.sort((a, b) => b[1] - a[1]);

    const result = dataArray.map(([name, prediction]) => ({
        name,
        prediction,
        ...animalData[name]
    }));

    return result.slice(0, 3);
}

export async function getDescFromArr(data: string[]): Promise<Array<{ name: string; prediction: number; } & animalAttribute>> {
    const uniqueData = [...new Set(data)];
    const result = uniqueData.filter(name => name != 'unknown' && name != 'animal').map(name => ({
        name,
        prediction: 1, // Example prediction value
        ...animalData[name]
    }));

    return result;
}