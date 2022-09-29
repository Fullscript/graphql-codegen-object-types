import { isEnumType, isInputObjectType, isScalarType, isUnionType, type GraphQLNamedType } from "graphql";

/**
 * Determines wether the passed GraphQL type is a input, enum, scalar or union
 * 
 * @param {GraphQLNamedType} type - GraphQL type to evaluate
 * @returns {boolean} 
 */
 const isInputEnumScalarOrUnionType = (type: GraphQLNamedType) => {
  return isInputObjectType(type) || isEnumType(type) || isScalarType(type) || isUnionType(type)
};

export { isInputEnumScalarOrUnionType };