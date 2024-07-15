# Aplicando o quarto princípio do SOLID: Interface Segregation Principle (ISP)

## Introdução

O quarto princípio do SOLID é o Princípio da Segregação de Interfaces (Interface Segregation Principle - ISP). Esse princípio diz que uma classe não deve ser forçada a implementar interfaces que ela não utiliza. Em outras palavras, devemos dividir interfaces grandes em interfaces menores e mais específicas para que as classes que as implementam não sejam obrigadas a implementar métodos que não utilizam.

## Problema

Temos uma interface chamada `IFile`, que possui 2 métodos, `loadFile` e `writeToFile`, porém, a classe `FileReader` não precisa implementar o método `writeToFile` e a classe `FileWriter` não precisa implementar o método `loadFile`, logo, a interface `IFile` viola o ISP, pois força as classes que a implementam a implementar métodos que não são utilizados.

## Solução

Dividir em 2 interfaces menores, `IFileReadable` e `IFileWritable`, para que as classes que as implementam não sejam obrigadas a implementar métodos que não utilizam.

Na classe `Parser`, alterar a dependência de `IFile` para `IFileReadable` e `IFileWritable` e garantir que as classes `FileReader` e `FileWriter` implementem as interfaces corretas.

Remover a interface `IFile` e garantir que a classe `Parser` dependa apenas das interfaces `IFileReadable` e `IFileWritable`.

## Estrutura de diretórios

```plaintext
.
├── src
│   ├── index.ts
│   ├── parser.ts
│   ├── commons/
│   │   └── types/
│   │       └── file.converter.type.ts
│   │       └── file.readable.type.ts
│   │       └── file.writeable.type.ts
│   ├── services/
│   │   ├── converters/
│   │   │   ├── json-to-xml.converter.ts
│   │   │   ├── json-to-yaml.converter.ts
│   │   │   ├── xml-to-json.converter.ts
│   │   │   ├── xml-to-yaml.converter.ts
│   │   │   ├── yaml-to-json.converter.ts
│   │   │   ├── yaml-to-xml.converter.ts
│   │   ├── file-reader.ts
│   │   ├── file-writer.ts
│   │   └── file.converter.registry.ts
```