export default class XmlToYamlConverter {
  public convert(content: string): string {
    console.log("Converting XML to YAML");
    return content;
  }

  public getSourceType(): string {
    return "xml";
  }

  public getDestType(): string {
    return "yaml";
  }
}
