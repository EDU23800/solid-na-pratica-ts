import FileConverter from "./services/file.converter";
import FileReader from "./services/file-reader";
import FileWriter from "./services/file-writer";

export class Parser {
  public sourceContent: string = "";

  protected converterFile: FileConverter;
  protected writerFile: FileWriter;
  protected readerFile: FileReader;

  public static TYPE = {
    YAML: "yaml",
    JSON: "json",
    XML: "xml",
  };

  public constructor(protected type: string, protected fileName: string) {
    this.converterFile = new FileConverter();
    this.readerFile = new FileReader();
    this.writerFile = new FileWriter();
  }

  public convert(destType: string, destFileName: string): boolean {
    // Só para não carregar o arquivo novamente, se ele for muito grande pode ser um problema
    if (this.sourceContent === "") {
      this.sourceContent = this.readerFile.loadFile(this.fileName);
    }

    const content = this.converterFile.convert(
      this.type,
      this.sourceContent,
      destType
    );

    return this.writerFile.writeToFile(destFileName, content);
  }
}
