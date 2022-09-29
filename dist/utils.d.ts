import { type GraphQLNamedType } from "graphql";
/**
 * Determines wether the passed GraphQL type is a input, enum, scalar or union
 *
 * @param {GraphQLNamedType} type - GraphQL type to evaluate
 * @returns {boolean}
 */
declare const isInputEnumScalarOrUnionType: (type: GraphQLNamedType) => boolean;
export { isInputEnumScalarOrUnionType };
//# sourceMappingURL=utils.d.ts.map