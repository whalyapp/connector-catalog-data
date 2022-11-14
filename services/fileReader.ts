import { IRawSource, IRawVendor } from "../types/raw";
import fs from "fs";

export const getRawSources = (path: string): IRawSource[] => {
    const sourceFilenames: string[] = fs.readdirSync(path);

    const rawSources: IRawSource[] = sourceFilenames.map(sourceFileName => {
        const sourceRaw = fs.readFileSync(`${path}/${sourceFileName}`);
        return JSON.parse(sourceRaw.toString())
    })

    return rawSources;
}

export const getRawVendors = (path: string): IRawVendor[] => {
    const vendorFilenames: string[] = fs.readdirSync(path);

    const rawVendors: IRawVendor[] = vendorFilenames.map(vendorFileName => {
        const vendorRaw = fs.readFileSync(`${path}/${vendorFileName}`);
        return JSON.parse(vendorRaw.toString())
    })

    return rawVendors;
}