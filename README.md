# Aplicando o segundo princípio do SOLID: Open/Closed Principle (OCP)

## Introdução

O segundo princípio do SOLID é o Princípio Aberto/Fechado (Open/Closed Principle - OCP). Esse princípio diz que uma classe deve estar aberta para extensão, mas fechada para modificação.

## Problema

O projeto atual possui uma classe que é responsável por converter arquivos de texto para JSON. No entanto, o cliente solicitou que a aplicação suporte a conversão de arquivos para outros formatos, como XML, YAML e JSON, por enquanto, porém novos formatos podem ser adicionados no futuro. Isso é um problema mapeado pois a classe `ConvertFile` precisa ser modificada toda vez que um novo formato de arquivo é adicionado.


## Solução

Para resolver esse problema, vamos criar uma interface chamada `FileConverter` e um registro de conversores chamado `FileConverterRegistry`. A interface `FileConverter` terá um método chamado `convert` que será implementado por todas as classes de conversão de arquivo. O registro de conversores será responsável por armazenar todas as classes de conversão de arquivo e retornar a classe correta com base no formato do arquivo.

Assim, a classe `ConvertFile` não precisará ser modificada toda vez que um novo formato de arquivo for adicionado. Apenas a nova classe de conversão de arquivo precisa ser criada e registrada no `FileConverterRegistry`.

Obs.: Aqui estamos aplicando ainda mais o SRP, pois não existe mais a classe `ConvertFile`, que tinha a responsabilidade de converter arquivos. Agora, ela é uma interface que define um contrato para as classes de conversão de arquivo.

## Estrutura de diretórios

```plaintext
.
├── src
│   ├── index.ts
│   ├── parser.ts
│   ├── commons/
│   │   └── types/
│   │       └── file.converter.type.ts
│   │       └── file.type.ts
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