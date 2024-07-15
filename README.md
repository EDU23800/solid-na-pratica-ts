# Aplicando o terceiro princípio do SOLID: Liskov Substitution Principle (LSP)

## Introdução

O terceiro princípio do SOLID é o Princípio da Substituição de Liskov (Liskov Substitution Principle - LSP). Esse princípio diz que objetos de um super tipo devem ser substituíveis por objetos de um subtipo sem afetar a integridade do programa. Ex: `Ave` é um super tipo e `Pinguim` é um subtipo. Se um método espera um objeto do tipo `Ave`, ele deve ser capaz de aceitar um objeto do tipo `Pinguim` sem quebrar o programa.

## Problema

Em nossa classe `Parser` temos 2 propriedades, `fileReader` e `fileWriter`, que são instâncias das classes `FileReader` e `FileWriter`, respectivamente, porém, se o tipo dessas for alterado para o tipo `IFile`, que é a interface que ambas as classes implementam, o código precisa continuar funcionando sem problemas, pois eu espero um `IFile` e não uma instância de `FileReader` ou `FileWriter`, logo a classe `Parser` deve ser capaz de aceitar qualquer classe que implemente a interface `IFile`.

## Solução

Alterar a dependencia de `FileReader` e `FileWriter` para `IFile` na classe `Parser` e garantir que ambas as classes implementem a interface `IFile`.

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