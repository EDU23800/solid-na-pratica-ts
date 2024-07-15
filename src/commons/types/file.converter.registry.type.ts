import { IFileConverter } from "./file.converter.type";

export interface IFileConverterRegistry {
  register(converter: IFileConverter): void;
  getConverter(sourceType: string, destType: string): IFileConverter;
  getConverters(): IFileConverter[];
}
