const foobar = (): string => {
  return "Hello World";
};

const foobar2 = async (): Promise<string> => {
  return "Hello World";
};

const foobar3 = (): Promise<string> => {
  return new Promise((resolve) => {
    resolve("Hello World");
  });
};

export const foo = "bar";
