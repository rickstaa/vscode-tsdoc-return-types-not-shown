/** A small example function to show that the return type is not shown in vscode. */

/** The function return type. */
interface ExampleFunctionReturnType {
  /** The first return string. */
  string1: string;
  /** The second return string. */
  string2: string;
}

/** The function arguments. */
interface ExampleFunctionArgs {
  /** The first string that should be printerd. */
  string1: string;
  /** The second string that should be printed. */
  string2: string;
}

/** An example function.
 * @returns The function example type
 */
const exampleFunction = ({
  string1,
  string2,
}: ExampleFunctionArgs): ExampleFunctionReturnType => {
  console.log(string1);
  console.log(string2);
  return { string1: "Hello", string2: "world" };
};

export default exampleFunction;
