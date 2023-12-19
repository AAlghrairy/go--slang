import { WasmExpression } from "~src/wasm-ast/core";

/**
 * Base class for nodes that are meant to wrap other expressions to perform some simple operation on the results of the wrapped expression.
 */
export interface WasmWrapperNode extends WasmExpression {
  expr: WasmExpression;
}

/**
 * Special wrapper node to handle converting an expression value to a "boolean" value (1 or 0).
 */
export interface WasmBooleanExpression extends WasmWrapperNode {
  type: "BooleanExpression";
  wasmVariableType: "i32";
  isNegated?: boolean;
}

type ExtendIntInstructions = "i64.extend_i32_s" | "i64.extend_i32_u";
type WrapIntInstructions = "i32.wrap_i64";
type PromoteFloatInstructions = "f64.promote_f32";
type DemoteFloatInstructions = "f32.demote_f64";
type ConvertIntToFloatInstructions =
  | "f32.convert_i32_s"
  | "f32.convert_i32_u"
  | "f32.convert_i64_s"
  | "f32.convert_i64_u"
  | "f64.convert_i32_s"
  | "f64.convert_i32_u"
  | "f64.convert_i64_s"
  | "f64.convert_i64_u";
type TruncateFloatToIntInstructions =
  | "i32.trunc_f32_s"
  | "i32.trunc_f32_u"
  | "i32.trunc_f64_s"
  | "i32.trunc_f64_u"
  | "i64.trunc_f32_s"
  | "i64.trunc_f32_u"
  | "i64.trunc_f64_s"
  | "i64.trunc_f64_u";

export type NumericConversionInstruction =
  | ExtendIntInstructions
  | WrapIntInstructions
  | PromoteFloatInstructions
  | DemoteFloatInstructions
  | ConvertIntToFloatInstructions
  | TruncateFloatToIntInstructions;

/**
 * Wrapper for wasm types that performs a operation on a numeric type, like extending/wrapping ints.
 */
export interface WasmNumericConversionWrapper extends WasmWrapperNode {
  type: "NumericWrapper";
  instruction: NumericConversionInstruction;
}
