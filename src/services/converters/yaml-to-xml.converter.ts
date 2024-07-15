import { IFileConverter } from "../../commons/types/file.converter.type";

export default class YamlToXmlConverter implements IFileConverter {
  public convert(content: string): string {
    console.log("Converting YAML to XML");
    return content;
  }

  public getSourceType(): string {
    return "yaml";
  }

  public getDestType(): string {
    return "xml";
  }
}
