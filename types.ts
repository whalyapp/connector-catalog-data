export interface ICatalog {
    vendors: IVendor[],
    sources: ISource[]
}

export type VendorType = "ETL" | "BI" | "SaaS";
export type VendorPricing = "$$" | "$$$" | "$$$$" | "Free" | "Unknown";

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
    "pricing": VendorPricing,
    "website": string
}

export type SourceType = "Application" | "Database" | "File" | "Events";

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