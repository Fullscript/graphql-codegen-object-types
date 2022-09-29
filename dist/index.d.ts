import { PluginFunction, Types } from "@graphql-codegen/plugin-helpers";
import { Config } from "./types";
import { validate } from "./validate";
/**
 * Plugin for generating a single interface containing all Object types defined in a schema
 *
 * @param {GraphQLSchema} schema - GraphQL schema from which to generate code
 * @param documents - Not used
 * @param {Config} config - Configuration for this plugin
 * @returns {string} Generated interface
 */
declare const plugin: PluginFunction<Config, Types.PluginOutput>;
export { plugin, validate };
//# sourceMappingURL=index.d.ts.map