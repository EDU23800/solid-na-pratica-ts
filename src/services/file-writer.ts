import { IFileWriteable } from "../commons/types/file.writeable.type";
export default class FileWriter implements IFileWriteable {
  public writeToFile(fileName: string, content: string): boolean {
    console.log(
      `Write content to file ${fileName} de tamanho ${content.length}`
    );
    return true;
  }
}
