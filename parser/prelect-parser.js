import fs from "fs";
import { Grammars } from "ebnf";

class PrelectParser {
  constructor() {
    try {
      const grammar = fs.readFileSync("prelect.ebnf", "utf8");

      this.parser = new Grammars.W3C.Parser(grammar);
    } catch (err) {
      console.error(err);
    }
  }

  parse(prelect) {
    console.log(prelect);
  }
}

try {
  const testFile = fs.readFileSync("test.prelect", "utf8");

  const prelectParser = new PrelectParser();
  prelectParser.parse(testFile);
} catch (err) {
  console.error(err);
}

export default PrelectParser;
