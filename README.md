# graphql-codegen-object-types

graphql-codegen-object-types is a plugin for [@graphql-codgen](https://www.the-guild.dev/graphql/codegen) used to generate a TypeScript interface of all object types within a GraphQL schema.

## Prerequisites

If you don't already have **@graphql-codegen** setup, you can follow their [getting started guide](https://www.the-guild.dev/graphql/codegen/docs/getting-started).

To use **graphql-codegen-object-types** you will also need:
- [@graphql-codegen/import-types-preset](https://www.npmjs.com/package/@graphql-codegen/import-types-preset)
- [@graphql-codegen/add](https://www.npmjs.com/package/@graphql-codegen/add)

## Installation
Add **graphql-codegen-object-types** to your dependencies like so:

Yarn v1:
- `yarn add https://github.com/Fullscript/graphql-codegen-object-types.git#1.0.0`

Yarn v2 (and onwards):
- `yarn add @fullscript/graphql-codegen-object-types@https://github.com/Fullscript/graphql-codegen-object-types.git#1.0.0`

NPM:
- `npm install https://github.com/Fullscript/graphql-codegen-object-types.git#1.0.0`

## Configuration

In your codegen configuration file, add something similar to the following:
```yaml
generates:
  # any configuration you already have
  path/to/generatedFile.ts:
    preset: import-types
    presetConfig:
      typesPath: "path/to/baseTypes"
    plugins:
      - add: 
        content:
          - "import type * as Types from 'path/to/baseTypes';"
      - "@fullscript/graphql-codegen-object-types"
    config:
      ignoredSuffixes:
        - "Connection"
        - "Error"
        - "Query"
        - "Mutation"
      useTypeImports: true
```
### Options

Each of the following options are optional, default values are listed as part of description.

- **ignoredSuffixes**: A list of type suffixes or names to ignore from your GraphQL schema. Any object type that matches an entry within this list will not be part of the generated interface.
- **useTypeImports**: (default `false`) Whether or not to use type imports/exports.
- **interfaceName**: (default `GraphQLObjectTypes`) The name of the generated TypeScript interface.

## Example output
```ts
import type * as Types from 'path/to/baseTypes';

interface GraphQLObjectTypes {  
  User: Types.User;
  Country: Types.Country;
  // ...
}

export type { GraphQLObjectTypes };
```

