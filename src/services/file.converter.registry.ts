import { IFileConverterRegistry } from "../commons/types/file.converter.registry.type";
import { IFileConverter } from "../commons/types/file.converter.type";

export default class FileConverterRegistry implements IFileConverterRegistry {
  protected static instance: FileConverterRegistry;

  private constructor(public converters: IFileConverter[] = []) {}

  public static getInstance(): FileConverterRegistry {
    if (!this.instance) {
      this.instance = new FileConverterRegistry();
    }
    return this.instance;
  }

  public static register(converter: IFileConverter): void {
    this.getInstance().register(converter);
  }

  public static getConverter(
    sourceType: string,
    destType: string
  ): IFileConverter {
    return this.getInstance().getConverter(sourceType, destType);
  }

  public register(converter: IFileConverter): void {
    this.converters.push(converter);
  }

  public getConverter(sourceType: string, destType: string): IFileConverter {
    const converter = this.converters.find((converter) => {
      if (
        converter.getSourceType() === sourceType &&
        converter.getDestType() === destType
      ) {
        return converter;
      }
    });

    if (converter) {
      return converter;
    }

    throw new Error("Converter not found");
  }

  getConverters(): IFileConverter[] {
    return this.converters;
  }
}
