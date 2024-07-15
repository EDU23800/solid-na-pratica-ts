import FileConverter from "./services/file.converter.registry";
import FileReader from "./services/file-reader";
import FileWriter from "./services/file-writer";
import { IFileConverter } from "./commons/types/file.converter.type";
import { IFileWriteable } from "./commons/types/file.writeable.type";
import { IFileReadable } from "./commons/types/file.readable.type";

export class Parser {
  public sourceContent: string = "";
  protected writerFile: IFileWriteable;
  protected readerFile: IFileReadable;

  public static TYPE = {
    YAML: "yaml",
    JSON: "json",
    XML: "xml",
  };

  public constructor(protected type: string, protected fileName: string) {
    this.readerFile = new FileReader();
    this.writerFile = new FileWriter();
  }

  public convert(destType: string, destFileName: string): boolean {
    // Só para não carregar o arquivo novamente, se ele for muito grande pode ser um problema
    if (this.sourceContent === "") {
      this.sourceContent = this.readerFile.loadFile(this.fileName);
    }

    // Aqui é onde a mágica acontece
    const converterFile: IFileConverter = FileConverter.getConverter(
      this.type,
      destType
    );

    const content = converterFile.convert(this.sourceContent);

    return this.writerFile.writeToFile(destFileName, content);
  }
}
