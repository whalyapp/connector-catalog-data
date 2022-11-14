import fs from "fs";
import path from "path";
import { getRawSources } from "../services/fileReader";
import { IRawSource, IRawVendor } from "../types/raw";

const args = process.argv.slice(2);

if (args.length === 0) {
    throw new Error(`You didn't pass the name of the vendor JSON file to check.
    Usage: \`scripts/vendor-source-check.ts data/vendors/a-vendor.json\``)
}

if (args.length > 1) {
    throw new Error(`You passed too many arguments.
    Usage: \`scripts/vendor-source-check.ts data/vendors/a-vendor.json\``)
}

const vendorFileName = args[0];

const vendorFilePath = `${process.cwd()}/${vendorFileName}`;

if (!fs.existsSync(vendorFilePath)) {
    throw new Error(`File ${vendorFilePath} doesn't exist. Did you pass the proper vendor file path?`)
}

const vendorFileContent = fs.readFileSync(vendorFilePath);

const vendorFile: IRawVendor = JSON.parse(vendorFileContent.toString());

const rawSources: IRawSource[] = getRawSources(path.join(__dirname, '..', 'data/sources'));

const matchedSources: string[] = [];
const umatchedSources: string[] = [];

vendorFile.sources.forEach(vendorSource => {
    const matchings = rawSources.filter(rawSource => {
        return vendorSource === rawSource.slug
            || rawSource.aliases.includes(vendorSource)
    })

    if (matchings.length > 0) {
        matchedSources.push(vendorSource)
    } else {
        umatchedSources.push(vendorSource)
    }
})

console.log(`✅ Vendor sources that are matching an existing Source JSON: 
${matchedSources.join(`\n`)}\n`)

if (umatchedSources.length > 0) {
    console.log(`❌ Vendor sources that are NOT matching an existing Source JSON: 
${umatchedSources.join(`\n`)}\n`)

    console.log(`❌ Please add an alias on existing source JSON definition or create a new source JSON for those.`)
} else {
    console.log(`✅ All vendors sources are matching a source JSON 🎉`)
}
