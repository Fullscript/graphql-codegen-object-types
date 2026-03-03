import { RawConfig } from "@graphql-codegen/visitor-plugin-common";

interface Config extends RawConfig {
  namespacedImportName?: string;
  ignoredSuffixes?: string[];
  allowedTypes?: string[];
  interfaceName?: string;
}

export type { Config };
