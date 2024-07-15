import { Parser } from "./parser";
import JsonToXmlConverter from "./services/converters/json-to-xml.converter";
import JsonToYamlConverter from "./services/converters/json-to-yaml.converter";
import XmlToJsonConverter from "./services/converters/xml-to-json.converter";
import XmlToYamlConverter from "./services/converters/xml-to-yaml.converter";
import YamlToJsonConverter from "./services/converters/yaml-to-json.converter";
import YamlToXmlConverter from "./services/converters/yaml-to-xml.converter";
import FileConverterRegistry from "./services/file.converter.registry";

FileConverterRegistry.register(new JsonToXmlConverter());
FileConverterRegistry.register(new JsonToYamlConverter());
FileConverterRegistry.register(new YamlToJsonConverter());
FileConverterRegistry.register(new YamlToXmlConverter());
FileConverterRegistry.register(new XmlToJsonConverter());
FileConverterRegistry.register(new XmlToYamlConverter());

const parserYml = new Parser(Parser.TYPE.YAML, "test.yaml");
parserYml.convert(Parser.TYPE.JSON, "test.json");
parserYml.convert(Parser.TYPE.XML, "test.xml");
console.log("- - - - ");

const parserJson = new Parser(Parser.TYPE.JSON, "test.json");
parserJson.convert(Parser.TYPE.YAML, "test.yaml");
parserJson.convert(Parser.TYPE.XML, "test.xml");
console.log("- - - - ");

const parserXml = new Parser(Parser.TYPE.XML, "test.xml");
parserXml.convert(Parser.TYPE.JSON, "test.json");
parserXml.convert(Parser.TYPE.YAML, "test.yaml");
