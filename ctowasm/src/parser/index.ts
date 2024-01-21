import parsingGrammar from "bundle-text:./parser.pegjs";
import preprocessingGrammar from "bundle-text:./preprocessor.pegjs";
import peggy, { LocationRange, Stage } from "peggy";

/**
 * Callback that the gnerated peggy parser uses to show warnings to user
 * @param parserStage
 * @param message
 * @param location
 */
function warningCallback(
  parserStage: Stage,
  message: string,
  location: LocationRange | undefined,
): void {
  console.log(message);
  //TODO: add location info nicely in future
}

const preprocessor = peggy.generate(preprocessingGrammar as string, {
  allowedStartRules: ["source_code"],
  cache: true,
  warning: warningCallback,
});

const parser = peggy.generate(parsingGrammar as string, {
  allowedStartRules: ["program"],
  cache: true,
  warning: warningCallback,
});

export default function parse(sourceCode: string) {
  return parser.parse(preprocessor.parse(sourceCode));
}
