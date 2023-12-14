/**
 * Definitions of nodes that interact with wasm linear memory.
 */

import { WasmType } from "~src/wasm-ast/types";
import {
  WasmAstNode,
  WasmExpression,
  WasmStatement,
  WasmConst,
} from "~src/wasm-ast/core";

export type MemoryVariableByteSize = 1 | 4 | 8;

export interface WasmMemoryLoad extends WasmAstNode {
  type: "MemoryLoad";
  addr: WasmExpression; // the offset in memory to load from
  varType: WasmType; // wasm var type for the store instruction
  numOfBytes: MemoryVariableByteSize; // number of bytes to load
  preStatements?: (WasmStatement | WasmExpression)[];
}

export interface WasmMemoryStore extends WasmAstNode {
  type: "MemoryStore";
  addr: WasmExpression;
  value: WasmExpression;
  varType: WasmType; // wasm var type for the store instruction
  numOfBytes: MemoryVariableByteSize; // number of bytes to store
  preStatements?: (WasmStatement | WasmExpression)[];
}

export interface WasmMemoryGrow extends WasmAstNode {
  type: "MemoryGrow";
  pagesToGrowBy: WasmExpression;
}

export interface WasmMemorySize extends WasmAstNode {
  type: "MemorySize";
}

/**
 * TODO: change when can return more complex things.
 */
export interface WasmReturnVariable extends WasmAstNode {
  name: string;
  size: number; // size in bytes of this variable
  varType: WasmType; // the wasm type to use when loading/storing this variable
}

/**
 * A variable that is meant to be stored in memory.
 */
export interface WasmMemoryVariable extends WasmAstNode {
  name: string;
  size: number; // size in bytes of this variable
  varType: WasmType; // the wasm type to use when loading/storing this variable
  offset: number; // offset from the start of the scope that this variable is in. This is address for globals, offset from BP for locals/params
}

export interface WasmLocalVariable extends WasmMemoryVariable {
  type: "LocalVariable" | "LocalArray";
}

/**
 * Common fields for array-related nodes.
 */
interface WasmArrayNode {
  elementSize: number;
  arraySize: number; // number of elements of the array
}

export interface WasmLocalArray extends WasmLocalVariable, WasmArrayNode {}

/**
 * Global variables will be in the 'data' segment of memory.
 */
export interface WasmDataSegmentVariable extends WasmMemoryVariable {
  type: "DataSegmentVariable";
  initializerValue?: WasmConst; // initial value to set this global value to
}

export interface WasmDataSegmentArray
  extends WasmMemoryVariable,
    WasmArrayNode {
  type: "DataSegmentArray";
  initializerList?: WasmConst[];
}