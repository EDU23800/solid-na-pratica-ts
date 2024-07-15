import { IFileConverter } from "../../commons/types/file.converter.type";

export default class JsonToYamlConverter implements IFileConverter {
  public convert(content: string): string {
    console.log("Converting JSON to YAML");
    return content;
  }

  public getSourceType(): string {
    return "json";
  }

  public getDestType(): string {
    return "yaml";
  }
}
