# Aplicando os princípios do SOLID na prática

## Objetivo

Esse projeto como objetivo apresentar os princípios de SOLID via branches a partir de um projeto responsável por converter arquivos de texto de um formato para outro. Cada branch apresenta um princípio do SOLID e a sua respectiva refatoração.

Vamos começar o projeto pela branch `main` sem a aplicação de nenhum princípio do SOLID.

## Princípios SOLID

- [Single Responsibility Principle (SRP)](https://en.wikipedia.org/wiki/Single-responsibility_principle)
- [Open/Closed Principle (OCP)](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle)
- [Liskov Substitution Principle (LSP)](https://en.wikipedia.org/wiki/Liskov_substitution_principle)
- [Interface Segregation Principle (ISP)](https://en.wikipedia.org/wiki/Interface_segregation_principle)
- [Dependency Inversion Principle (DIP)](https://en.wikipedia.org/wiki/Dependency_inversion_principle)

## Branches

Siga esta ordem para entender os princípios do SOLID:

- main
- 1-srp
- 2-ocp
- 3-lsp
- 4-isp
- 5-dip

## Dicas

- Utilize os comandos `git checkout <branch>` para navegar entre as branches
- Utilize os comandos `git diff <branch> <branch>` para comparar as diferenças entre as branches
- **Leia** o README.md de cada branch para entender o princípio aplicado
- Olhe o código fonte de cada branch para entender a refatoração
- **Não** se preocupe em entender tudo de uma vez, vá com calma e entenda cada princípio aos poucos
- Faça o seu! Experimente, teste, quebre e refatore o código.

## Requisitos

- Node.js
- TypeScript

## Caso de uso

Existe a necessidade de criar um conversor de formatos de arquivos de texto. O usuário deve ser capaz de abrir um arquivo, converter o arquivo para um formato específico e salvar o arquivo convertido. Os formatos de arquivos suportados são de início são:

- JSON
- XML
- YAML

O cliente informou que futuramente, novos formatos de arquivos serão suportados.

### Passos

1. Abrir o arquivo
2. Converter o arquivo
3. Salvar o arquivo

## Estrutura inicial do projeto ( apenas para referência, não falaremos do package.json, tsconfig.json, etc )

```
.
├── src
│   ├── index.ts
│   ├── parser.ts
```