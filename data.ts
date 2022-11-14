import fs from "fs";
import { SourceType, VendorType } from "./types/enum";
import { ICatalog, ISource, IVendor } from "./types/parsed";
import { IRawSource, IRawVendor } from "./types/raw";

const SOURCE_DATA_DIR = './data/sources';
const VENDOR_DATA_DIR = './data/vendors';

const parseCatalogInfos = (): ICatalog => {

    const sourceFilenames = fs.readdirSync(SOURCE_DATA_DIR);

    const rawSources: IRawSource[] = sourceFilenames.map(sourceFileName => {
        const sourceRaw = fs.readFileSync(`${SOURCE_DATA_DIR}/${sourceFileName}`);
        return JSON.parse(sourceRaw.toString())
    })

    const vendorFilenames = fs.readdirSync(VENDOR_DATA_DIR);

    const rawVendors: IRawVendor[] = vendorFilenames.map(vendorFileName => {
        const vendorRaw = fs.readFileSync(`${VENDOR_DATA_DIR}/${vendorFileName}`);
        return JSON.parse(vendorRaw.toString())
    })

    const vendors: IVendor[] = rawVendors.map(rawVendor => {
        const parseVendorType = (value: string): VendorType => {
            switch (value) {
                case "ETL":
                case "BI":
                case "SaaS":
                    return value;
                default:
                    throw new Error(`Invalid VendorType=${value} for vendor=${rawVendor.slug}`);
            }
        }

        return {
            slug: rawVendor.slug,
            name: rawVendor.name,
            logoUrl: rawVendor.logoUrl,
            type: parseVendorType(rawVendor.type),
            isOpenSource: rawVendor.isOpenSource,
            website: rawVendor.website
        }
    })

    const sources: ISource[] = rawSources.map(rawSource => {

        const parseSourceType = (value: string): SourceType => {
            switch (value) {
                case "Application":
                case "Database":
                case "File":
                case "Events":
                    return value;
                default:
                    throw new Error(`Invalid SourceType=${value} for source=${rawSource.slug}`);
            }
        }

        const getSourceVendorSlugs = (): string[] => {
            const slugAndAliases = [rawSource.slug].concat(rawSource.aliases);

            // We match the vendors with the source slug and sources aliases
            const matchedVendors = rawVendors.filter(rawVendor => {
                const matchings = slugAndAliases.map(sourceIdentifier => {
                    return rawVendor.sources.includes(sourceIdentifier);
                })
                return matchings.reduce<boolean>((acc, curr) => {
                    return acc || curr
                }, false)
            })
            const vendorSlugs = matchedVendors.map(vendor => vendor.slug)
            return vendorSlugs;
        }

        const sourceVendorSlugs: string[] = getSourceVendorSlugs();

        return {
            "slug": rawSource.slug,
            "logoUrl": rawSource.logoUrl,
            "name": rawSource.name,
            "type": parseSourceType(rawSource.type),
            "vendors": sourceVendorSlugs
        }
    })

    return {
        vendors,
        sources
    }
}

export const catalogData: ICatalog = parseCatalogInfos()