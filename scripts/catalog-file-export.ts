import fs from "fs";
import { catalogData } from "../services/catalog";

const data = catalogData(".");

const file = fs.createWriteStream(__dirname + '/../catalog.json')
file.write(Buffer.from(JSON.stringify(data)));