export interface IFileWriteable {
  writeToFile(fileName: string, content: string): boolean;
}
