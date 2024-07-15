import { IFileConverter } from "../../commons/types/file.converter.type";

export default class XmlToJsonConverter implements IFileConverter {
  public convert(content: string): string {
    console.log("Converting XML to JSON");
    return content;
  }

  public getSourceType(): string {
    return "xml";
  }

  public getDestType(): string {
    return "json";
  }
}
