export interface IFileConverter {
  convert(sourceContent: string): string;
  getSourceType(): string;
  getDestType(): string;
}