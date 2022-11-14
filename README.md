## Introduction

This repository contains the Sources & Vendors listing description used by the [Connector Catalog website](https://connectorcatalog.com/).

The goal of this repository is to enable any connector vendors to submit and maintain its own listing of connectors to ensure that any vendor can be listed and that up-to-date connectors listing changes can be provided.

The use of JSON file format to store the information about connectors was made to maximize the interopability with each vendor stack and preferred tools.

Ideally, a script should be built by each vendor to output the current state of their catalog in the format described below. This will help vendors to automate the maintainance of their listing.

## Contributing

There can be 2 main ways of contributing:
a. By listing missing vendors or point to inaccuracies in the data through Issues that [can be opened here](https://github.com/whalyapp/connector-catalog-data/issues).
b. By opening a Pull Request containing [updates on the existing state of the catalog here](https://github.com/whalyapp/connector-catalog-data/pulls).

The data format of this repository has been designed so that it's easy for Vendors to uploads their connector listings by owning their own vendor JSON file.

## Data Format overview

There is 2 main folders in this repository:
- `./data`: this contain a collection of JSON document to describe the Sources and Vendors.
- `./images`: this contain the collection of Data Sources logos

### Listings format

In the `./data` directory, we have 2 main collections of JSON:

#### 1. Sources

Each JSON should follow the below format:

```js
{
    // Unique identifier for the source
    // should be lowercase, withou space and with only [a-Z0-9_] characters
    "slug": string,
    // URL path to the logo. Image asset
    // Should point to the assets in the ./images directory of this repository
    "logoUrl": string,
    // Display name of the source
    "name": string,
    // Type of the Data source
    "type": "Application" | "Database" | "File" | "Events",
    // Aliases of the source that can be used vendors in their listings
    "aliases": string[]
}
```

Example:
```json
{
    "slug": "google-analytics-v4",
    "logoUrl": "/sources/ga4.png",
    "name": "Google Analytics V4",
    "type": "Application",
    "aliases": [
        "Google Analytics v4", 
        "Google Analytics 4"
        ]
}
```

#### 2. Vendors

Each JSON should follow the below format:

```js
{
    // Unique identifier for the source
    // should be lowercase, withou space and with only [a-Z0-9_] characters
    "slug": string,
    // Display name of the vendor website
    "name": string,
    "logoUrl": string,
    "type": "ETL" | "BI" | "SaaS",
    "isOpenSource": boolean,
    "website": string,
    // Refer to the sources that the vendor can extract from
    // Contains source slugs or a source aliases declared in a source listing
    "sources": string[]
}
```

Example:

```json
{
    "slug": "stitch",
    "name": "Stitch",
    "logoUrl": "/vendors/stitch.png",
    "type": "ETL",
    "isOpenSource": true,
    "website": "https://www.stitchdata.com/",
    "sources": [
        "hubspot",
        "mixpanel",
        "amplitude",
        "stripe",
        "..."
    ]
}
```

### Adding a new Vendor

To add a new vendor, 2 steps are necassary:
1. Create a new Vendor listing in `./data/vendors`
2. Check that each of the source defined in the vendor listing is matching a source listing.

A helper tool will be made shortly avaible to help you check that a vendor entry is matching with all declared sources.

If there are sources declared in the vendor listing that are not matching any existing source listing, either:
a. Find the source listing in `./data/sources` that should have matched and add an `aliases` entry with the value used in the vendor listing (i.e the value entered in the `sources` array of the vendor file)
b. Create a new source listing (e.g. a new JSON file) in `./data/sources`