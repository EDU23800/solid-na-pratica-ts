import { IFileConverter } from "../../commons/types/file.converter.type";

export default class YamlToJsonConverter implements IFileConverter {
  public convert(content: string): string {
    console.log("Converting YAML to JSON");
    return content;
  }

  public getSourceType(): string {
    return "yaml";
  }

  public getDestType(): string {
    return "json";
  }
}
