# Aplicando o quinto princípio do SOLID: Dependency Inversion Principle (DIP)

## Introdução

O quinto princípio do SOLID é o Princípio da Inversão de Dependência (Dependency Inversion Principle - DIP). Esse princípio diz que as classes de alto nível não devem depender de classes de baixo nível, ambas devem depender de abstrações. Além disso, abstrações não devem depender de detalhes, detalhes devem depender de abstrações.

## Problema

A classe `Parser` depende diretamente das classes `FileReader` e `FileWriter`, que são classes de baixo nível. Além disso, a classe `Parser` depende diretamente dos métodos `loadFile` e `writeToFile` das classes `FileReader` e `FileWriter`, que são detalhes de implementação. Ela também diretentamente da classe `FileConverterRegistry`, que é uma classe de baixo nível e não de uma lista ou array de conversores.

## Solução

Como nós já aplicamos o Princípio da Segregação de Interfaces (ISP), nós já temos interfaces específicas para leitura e escrita de arquivos, `IFileReadable` e `IFileWritable`. Agora, vamos criar uma interface `IFileConverterRegistry` para representar uma lista ou array de conversores.

Na classe `Parser`, alterar os parâmetros do construtor para receber as interfaces `IFileReadable`, `IFileWritable` e `IFileConverterRegistry` e garantir que a classe `Parser` dependa apenas de abstrações.


## Estrutura de diretórios

Obs.: Agora se tornou interessante colocar as interfaces para exibir abaixo.

```plaintext
.
├── src
│   ├── index.ts
│   ├── parser.ts
│   ├── commons/
│   │   └── types/
│   │       └── file.converter.registry.type.ts
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
```