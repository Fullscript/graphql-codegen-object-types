import { PluginValidateFn } from "@graphql-codegen/plugin-helpers";

import { Config } from "./types";

const validate: PluginValidateFn<Config> = (_schema, _documents, config, _outputFile, _allPlugins) => {
  if (!config.namespacedImportName) {
    throw new Error('Plugin "@fullscript/graphql-codegen-object-types" requires the "@graphql-codegen/import-types" preset');
  }
};

export { validate };