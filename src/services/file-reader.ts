import { IFile } from "../commons/types/file.type";

export default class FileReader implements IFile {
  loadFile(fileName: string): string {
    const content = `Load file: ${fileName}`;
    console.log(content);
    return content;
  }
  writeToFile(): boolean {
    throw new Error("Method not implemented.");
  }
}
