import { IFileReadable } from "../commons/types/file.readable.type";

export default class FileReader implements IFileReadable {
  loadFile(fileName: string): string {
    const content = `Load file: ${fileName}`;
    console.log(content);
    return content;
  }
}
