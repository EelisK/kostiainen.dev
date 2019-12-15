export default <T>(x: T | undefined): x is T => typeof x !== "undefined";
