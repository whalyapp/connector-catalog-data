/**
 * This contains the typescript types of the parsed data from the catalog
 * 
 * Those data structure are not matching exactly the types of the JSONs as some
 * calculation / enrichments / ... are done.
 * 
 * Those types are used:
 * - To generate the frontend
 * - For some helpers tools to be written in typescript
 */

import { SourceType, VendorType } from "./enum";

// Single object to store all the information of the catalog
export interface ICatalog {
    vendors: IVendor[],
    sources: ISource[]
}

/**
 * A Vendor is a business entity that provides connectors to sync Sources.
 */
export interface IVendor {
    // Contains a unique identifier that will be used in the Sources items
    "slug": string,
    "name": string,
    // Path to the logo
    "logoUrl": string,
    "type": VendorType,
    "isOpenSource": boolean,
    "website": string
}

/**
 * A Source is a system producing data from which we can extract it.
 * Vendors are providing connectors for Sources.
 */
export interface ISource {
    // Unique identifier
    "slug": string,
    // Path to the logo
    "logoUrl": string,
    "name": string,
    "type": SourceType,
    // Array referencing the Vendors' slugs
    // Each entry is a "Connector"
    "vendors": string[]
}