/**
 * Translator module which performs translation of C AST to WAT AST.
 */
import { setPseudoRegisters } from "~src/translator/util";
import { ModuleFunction } from "~src/modules/types";
import { WasmModule } from "~src/translator/wasm-ast/core";
import translateFunction from "~src/translator/translateFunction";
import { CAstRootP } from "~src/processor/c-ast/core";
import processIncludedModules from "~src/translator/processImportedFunctions";
import ModuleRepository from "~src/modules";

export default function translate(
  CAstRoot: CAstRootP,
  moduleRepository: ModuleRepository
) {
  const wasmRoot: WasmModule = {
    type: "Module",
    dataSegmentByteStr: CAstRoot.dataSegmentByteStr, // byte str to set the data segment to
    globalWasmVariables: [], // actual wasm global variables -  used for pseudo registers
    functions: {},
    memorySize: 1,
    importedFunctions: [],
  };

  const processedImportedFunctions = processIncludedModules(
    moduleRepository,
    CAstRoot.externalFunctions
  );

  wasmRoot.importedFunctions = processedImportedFunctions.functionImports;
  // add function wrappers of imported functions
  processedImportedFunctions.wrappedFunctions.forEach((wrappedFunction) => {
    wasmRoot.functions[wrappedFunction.name] = wrappedFunction;
  });

  CAstRoot.functions.forEach((func) => {
    wasmRoot.functions[func.name] = translateFunction(func);
  });

  setPseudoRegisters(wasmRoot, CAstRoot.dataSegmentSizeInBytes);

  return wasmRoot;
}
