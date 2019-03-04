import { Tokens, AST } from './Interfaces';
import { availableRules, ruleTypes } from './constants';
import { createNode } from './utils';

export default function parser(tokens: Tokens) {
  const ast: AST = {
    Program: {
      body: []
    }
  };

  for (let i = 0; i < tokens.length; i++) {
    const rule = tokens[i];
    ast.Program.body.push(createNode(ruleTypes.CSSRule, rule.rule, rule.value));
  }

  return ast;
}
