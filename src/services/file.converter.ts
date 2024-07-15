import { IFile } from "../commons/types/file.type";

export default class FileConverter implements IFile {
  public convert(
    sourceType: string,
    sourceContent: string,
    destType: string
  ): string {
    let content = "";
    if (sourceType === "yaml" && destType === "json") {
      content = this.yamlToJson(sourceContent);
    }

    if (sourceType === "yaml" && destType === "xml") {
      content = this.yamlToXml(sourceContent);
    }

    if (sourceType === "json" && destType === "yaml") {
      content = this.jsonToYaml(sourceContent);
    }

    if (sourceType === "json" && destType === "xml") {
      content = this.jsonToXml(sourceContent);
    }

    if (sourceType === "xml" && destType === "json") {
      content = this.xmlToJson(sourceContent);
    }

    if (sourceType === "xml" && destType === "yaml") {
      content = this.xmlToYaml(sourceContent);
    }

    console.log(`Convert content from ${sourceType} to ${destType}`);
    return content;
  }

  protected yamlToJson(sourceContent: string): string {
    const content = `Convert content from  yaml:${sourceContent} to json`;
    return content;
  }

  protected yamlToXml(sourceContent: string): string {
    const content = `Convert content from yaml:${sourceContent} to xml`;
    return content;
  }

  protected jsonToYaml(sourceContent: string): string {
    const content = `Convert content from json:${sourceContent} to yaml`;
    return content;
  }

  protected jsonToXml(sourceContent: string): string {
    const content = `Convert content from json:${sourceContent} to xml`;
    return content;
  }

  protected xmlToJson(sourceContent: string): string {
    const content = `Convert content from xml:${sourceContent} to json`;
    return content;
  }

  protected xmlToYaml(sourceContent: string): string {
    const content = `Convert content from xml:${sourceContent} to yaml`;
    return content;
  }

  public loadFile(): string {
    throw new Error("Method not implemented.");
  }

  public writeToFile(): boolean {
    throw new Error("Method not implemented.");
  }
}
