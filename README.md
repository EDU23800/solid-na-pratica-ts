# Aplicando o primeiro princípio do SOLID: Single Responsibility Principle (SRP)

## Introdução

O primeiro princípio do SOLID é o Princípio da Responsabilidade Única (Single Responsibility Principle - SRP). Esse princípio diz que uma classe deve ter apenas um motivo para mudar. Em outras palavras, uma classe deve ter apenas uma responsabilidade.

## Problema

O projeto atual possui uma classe que é responsável por abrir, converter e salvar arquivos de texto. Essa classe possui várias responsabilidades e, portanto, viola o princípio da responsabilidade única.

## Solução

Para resolver esse problema, vamos dividir a classe `Parser` em três classes: `FileReader`, `FileConverter` e `FileWriter`. Cada classe será responsável por uma única tarefa.

## Estrutura de diretórios

```
.
├── src
│   ├── index.ts
│   ├── parser.ts
│   ├── commons/
│   │   └── types/
│   │       └── file.type.ts
│   ├── services/
│   │   ├── file-converter.ts
│   │   ├── file-reader.ts
│   │   └── file-writer.ts
```