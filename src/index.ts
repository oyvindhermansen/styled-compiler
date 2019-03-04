import tokenizer from './tokenizer';
import parser from './parser';
import codeGenerator from './codeGenerator';

// Skipping the transformer AST step. Not needed for this type of compiler

export default function styledCompiler(css: string) {
  const tokens = tokenizer(css);
  const ast = parser(tokens);
  const newCode = codeGenerator(ast);
  // Return latest step.
  // This will be the transformer at last
  return newCode;
}
