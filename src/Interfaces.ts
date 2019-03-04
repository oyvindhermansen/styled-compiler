interface Token {
  type: string;
  rule: string;
  value: string;
}

type Tokens = Token[];

interface AST {
  Program: {
    body: Tokens;
  };
}

export { Token, Tokens, AST };
