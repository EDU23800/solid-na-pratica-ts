export interface IFile {
  loadFile(fileName: string): string;
  writeToFile(fileName: string, content: string): boolean;
}
