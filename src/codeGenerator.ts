import { availableRules } from './constants';
import { Tokens, Token, AST } from './Interfaces';

export default function codeGenerator(ast: AST) {
  const cssBlock = {};
  const program = ast.Program.body;

  for (let i = 0; i < program.length; i++) {
    const rule = program[i];

    // Test for special cases with camel casing
    // If no transform, just add the rule as is.
    if (rule.rule === availableRules.backgroundColor) {
      cssBlock['backgroundColor'] = rule.value;
    } else if (rule.rule === availableRules.fontFamily) {
      cssBlock['fontFamily'] = rule.value;
    } else {
      cssBlock[rule.rule] = rule.value;
    }
  }

  return cssBlock;
}
