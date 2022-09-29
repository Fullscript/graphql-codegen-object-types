import { RawConfig } from "@graphql-codegen/visitor-plugin-common";

interface Config extends RawConfig {
  namespacedImportName?: string;
  ignoredSuffixes?: string[];
  interfaceName?: string;
}

export type { Config };