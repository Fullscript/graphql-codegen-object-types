"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = void 0;

const validate = (_schema, _documents, config, _outputFile, _allPlugins) => {
  if (!config.namespacedImportName) {
    throw new Error('Plugin "@fullscript/graphql-codegen-object-types" requires the "@graphql-codegen/import-types" preset');
  }
};

exports.validate = validate;