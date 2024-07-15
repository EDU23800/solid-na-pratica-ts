import { Parser } from "./parser";

const parserYml = new Parser(Parser.TYPE.YAML, "test.yaml");
parserYml.convert(Parser.TYPE.JSON, "test.json");
parserYml.convert(Parser.TYPE.XML, "test.xml");
console.log( "- - - - ")

const parserJson = new Parser(Parser.TYPE.JSON, "test.json");
parserJson.convert(Parser.TYPE.YAML, "test.yaml");
parserJson.convert(Parser.TYPE.XML, "test.xml");
console.log( "- - - - ")

const parserXml = new Parser(Parser.TYPE.XML, "test.xml");
parserXml.convert(Parser.TYPE.JSON, "test.json");
parserXml.convert(Parser.TYPE.YAML, "test.yaml");
