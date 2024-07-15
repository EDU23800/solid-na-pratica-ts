import { IFileConverter } from "../../commons/types/file.converter.type";

export default class JsonToXmlConverter implements IFileConverter {
  public convert(content: string): string {
    console.log("Converting JSON to XML");
    return content;
  }

  public getSourceType(): string {
    return "json";
  }

  public getDestType(): string {
    return "xml";
  }
}
