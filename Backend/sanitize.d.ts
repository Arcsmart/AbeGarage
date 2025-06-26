declare module "sanitize" {
  interface Sanitize {
    middleware: any; // Or specify more precise types if you know them.
    // Add other properties or methods if needed
  }
  const sanitize: Sanitize;
  export = sanitize;
}
