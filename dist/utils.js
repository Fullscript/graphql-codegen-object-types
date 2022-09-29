"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInputEnumScalarOrUnionType = void 0;

var _graphql = require("graphql");

/**
 * Determines wether the passed GraphQL type is a input, enum, scalar or union
 * 
 * @param {GraphQLNamedType} type - GraphQL type to evaluate
 * @returns {boolean} 
 */
const isInputEnumScalarOrUnionType = type => {
  return (0, _graphql.isInputObjectType)(type) || (0, _graphql.isEnumType)(type) || (0, _graphql.isScalarType)(type) || (0, _graphql.isUnionType)(type);
};

exports.isInputEnumScalarOrUnionType = isInputEnumScalarOrUnionType;