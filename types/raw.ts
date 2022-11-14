export interface IRawSource {
    "slug": string,
    "logoUrl": string,
    "name": string,
    "type": string,
    "aliases": string[]
}

export interface IRawVendor {
    "slug": string,
    "name": string,
    "logoUrl": string,
    "type": string,
    "isOpenSource": boolean,
    "website": string,
    // Contains Source slugs or a known source alias
    "sources": string[]
}