/**
 * @param fn function: Async function
 * @description Takes an async function and returns a function that returns the async function with .catch. Called by: handleError(fn)(params)
 */
export function handleError(fn: any) {
  return function (...params: any) {
    return fn(...params).catch((err: Error) => {
      console.log(`There was an error`);
      console.log(`ERROR NAME: ${err.name}`);
      console.log(`ERROR MSG: ${err.message}`);
    });
  };
}
