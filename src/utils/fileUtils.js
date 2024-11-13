import { createFile, readFile } from "../services/fileServices";

export const createDataFile = (data, dataPath) => { 
    const datafile = await readFile(dataPath);

    let dataJson = null

    !datafile || datafile.length === 0 ? (dataJson = [data]) : dataJson = [...datafile, data];
    
    await createFile(dataJson, dataPath);
}