import { PluginFunction, Types } from "@graphql-codegen/plugin-helpers";
import { GraphQLNamedType } from "graphql";
import { ObjMap } from "graphql/jsutils/ObjMap";

import { Config } from "./types";
import { validate } from "./validate";
import { isInputEnumScalarOrUnionType } from "./utils";

// A list of common schema types to be ignored
const DEFAULT_IGNORED_SUFFIXES = [
  "__Directive",
  "__EnumValue",
  "__Field",
  "__InputValue",
  "__Schema",
  "__Type",
] as const;

/**
 * Filters out and returns GraphQL type names that match the required criteria
 * 
 * @param {ObjMap<GraphQLNamedType>} typesMap - A map of all the GraphQL types in the schema
 * @param {string[]} [ignoredSuffixes=[]] - List of type suffixes or names to ignore
 * @returns {string[]} An array of GraphQL type names
 */
const filterIgnoredSuffixes = (typesMap: ObjMap<GraphQLNamedType>, ignoredSuffixes: string[] = []) => {
  return Object.keys(typesMap).filter((typeName) => {
    const type = typesMap[typeName];

    return ![...DEFAULT_IGNORED_SUFFIXES, ...ignoredSuffixes].some((ignoredType) => {
      return typeName.endsWith(ignoredType) || isInputEnumScalarOrUnionType(type);
    })
  })
}

/**
 * Generates interface properties from the passed type names
 * 
 * @param {string[]} typeNames - A map of all the GraphQL types in the schema
 * @param {string} globalTypesNamespace - Namespace from which shared types are imported
 * @returns {string} Interface properties as one string
 */
const generateInterfaceProperties = (typeNames: string[], globalTypesNamespace: string) => {
  return typeNames.map((typeName) => {
    return `  ${typeName}: ${globalTypesNamespace}${typeName};`
  }).join("\n");
};

/**
 * Determines the name of the exported interface
 * 
 * @param {string | undefined} intefaceName - Interface name override if specified by config
 * @returns {string} Interface name
 */
const getInterfaceName = (intefaceName: string | undefined) => {
  return intefaceName || "GraphQLObjectTypes";
}

/**
 * Generates an export statement for the generated interface
 * 
 * @param {boolean | undefined} typeExport - Whether to use type exports or not, specified by config
 * @param {string} interfaceName - The interface name to export
 * @returns {string} export statement
 */
const generateExportStatement = (typeExport: boolean | undefined, interfaceName: string) => {
  const exportStatement = `export ${typeExport ? "type " : ""}`;
  return `${exportStatement}{ ${interfaceName} };`;
};

/**
 * Plugin for generating a single interface containing all Object types defined in a schema
 * 
 * @param {GraphQLSchema} schema - GraphQL schema from which to generate code
 * @param documents - Not used
 * @param {Config} config - Configuration for this plugin
 * @returns {string} Generated interface
 */
const plugin: PluginFunction<Config, Types.PluginOutput> = (schema, _documents, config) => {
  const { namespacedImportName, ignoredSuffixes, useTypeImports, interfaceName: configInterfaceName } = config;
  const typesMap = schema.getTypeMap();

  const globalTypesNamespace = namespacedImportName ? `${namespacedImportName}.` : '';
  const filteredTypes = filterIgnoredSuffixes(typesMap, ignoredSuffixes);

  const interfaceProperties = generateInterfaceProperties(filteredTypes, globalTypesNamespace);
  const interfaceName = getInterfaceName(configInterfaceName);
  const exportStatement = generateExportStatement(useTypeImports, interfaceName);

  return `\ninterface ${interfaceName} {\n${interfaceProperties}\n}\n\n${exportStatement}`;
};

export { plugin, validate };