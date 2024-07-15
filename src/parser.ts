export class Parser {
  public static TYPE = {
    YAML: "yaml",
    JSON: "json",
    XML: "xml",
  };

  public constructor(protected type: string, protected fileName: string) {}
  public sourceContent: string = "";

  protected yamlToJson(): string {
    this.loadFile(this.fileName);
    const content = `Convert content from ${this.type}:${this.fileName} to json`;
    return content;
  }

  protected yamlToXml(): string {
    this.loadFile(this.fileName);
    const content = `Convert content from ${this.type}:${this.fileName} to xml`;
    return content;
  }

  protected jsonToYaml(): string {
    this.loadFile(this.fileName);
    const content = `Convert content from ${this.type}:${this.fileName} to yaml`;
    return content;
  }

  protected jsonToXml(): string {
    this.loadFile(this.fileName);
    const content = `Convert content from ${this.type}:${this.fileName} to xml`;
    return content;
  }

  protected xmlToJson(): string {
    this.loadFile(this.fileName);
    const content = `Convert content from ${this.type}:${this.fileName} to json`;
    return content;
  }

  protected xmlToYaml(): string {
    this.loadFile(this.fileName);
    const content = `Convert content from ${this.type}:${this.fileName} to yaml`;
    return content;
  }

  public convert(destType: string, destFileName: string): boolean {
    let content = "";
    if (this.type === Parser.TYPE.YAML && destType === Parser.TYPE.JSON) {
      content = this.yamlToJson();
    }

    if (this.type === Parser.TYPE.YAML && destType === Parser.TYPE.XML) {
      content = this.yamlToXml();
    }

    if (this.type === Parser.TYPE.JSON && destType === Parser.TYPE.YAML) {
      content = this.jsonToYaml();
    }

    if (this.type === Parser.TYPE.JSON && destType === Parser.TYPE.XML) {
      content = this.jsonToXml();
    }

    if (this.type === Parser.TYPE.XML && destType === Parser.TYPE.JSON) {
      content = this.xmlToJson();
    }

    if (this.type === Parser.TYPE.XML && destType === Parser.TYPE.YAML) {
      content = this.xmlToYaml();
    }

    if (content === "") {
      return false;
    }

    console.log(
      `Convert content from ${this.type}:${this.fileName} to ${destType}:${destFileName}`
    );
    this.writeFile(destFileName, content);
    return true;
  }

  protected loadFile(fileName: string): string {
    if (this.sourceContent !== "") {
      return this.sourceContent;
    }

    this.sourceContent = `Load file ${fileName}`;
    return this.sourceContent;
  }

  protected writeFile(fileName: string, content: string): boolean {
    console.log(`Write content to file ${fileName}`);
    return true;
  }
}
