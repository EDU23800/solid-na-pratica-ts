import { IFile } from "../commons/types/file.type";

export default class FileWriter implements IFile {
  public writeToFile(fileName: string, content: string): boolean {
    console.log(`Write content to file ${fileName} de tamanho ${content.length}`);
    return true;
  }
  public loadFile(): string {
    throw new Error("Method not implemented.");
  }
}
