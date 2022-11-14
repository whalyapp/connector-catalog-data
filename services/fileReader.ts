import fs from "fs";
import { IRawSource, IRawVendor } from "../types/raw";

const SOURCE_DATA_DIR = './data/sources';
const VENDOR_DATA_DIR = './data/vendors';

export const getRawSources = (): IRawSource[] => {
    const sourceFilenames = fs.readdirSync(SOURCE_DATA_DIR);

    const rawSources: IRawSource[] = sourceFilenames.map(sourceFileName => {
        const sourceRaw = fs.readFileSync(`${SOURCE_DATA_DIR}/${sourceFileName}`);
        return JSON.parse(sourceRaw.toString())
    })

    return rawSources;
}

export const getRawVendors = (): IRawVendor[] => {
    const vendorFilenames = fs.readdirSync(VENDOR_DATA_DIR);

    const rawVendors: IRawVendor[] = vendorFilenames.map(vendorFileName => {
        const vendorRaw = fs.readFileSync(`${VENDOR_DATA_DIR}/${vendorFileName}`);
        return JSON.parse(vendorRaw.toString())
    })

    return rawVendors;
}