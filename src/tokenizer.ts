import { createNode } from './utils';
import { availableRules, ruleTypes } from './constants';

export default function tokenizer(input: string) {
  const tokens = [];
  const rules = input.split(';');

  let current = 0;

  while (current < rules.length) {
    // Separate the rule and the value
    const node = rules[current].split(':');

    // remove white space from the value
    const rule = node[0].trim();
    const ruleValue = node[1] !== undefined ? node[1].trim() : '';

    switch (rule) {
      case availableRules.color:
        tokens.push(
          createNode(ruleTypes.CSSRule, availableRules.color, ruleValue)
        );
        current++;
        continue;
      case availableRules.backgroundColor:
        tokens.push(
          createNode(
            ruleTypes.CSSRule,
            availableRules.backgroundColor,
            ruleValue
          )
        );
        current++;
        continue;
      case availableRules.background:
        tokens.push(
          createNode(ruleTypes.CSSRule, availableRules.background, ruleValue)
        );
        current++;
        continue;
      case availableRules.width:
        tokens.push(
          createNode(ruleTypes.CSSRule, availableRules.width, ruleValue)
        );
        current++;
        continue;
      case availableRules.height:
        tokens.push(
          createNode(ruleTypes.CSSRule, availableRules.height, ruleValue)
        );
        current++;
        continue;
      case availableRules.display:
        tokens.push(
          createNode(ruleTypes.CSSRule, availableRules.display, ruleValue)
        );
        current++;
        continue;
      case availableRules.padding:
        tokens.push(
          createNode(ruleTypes.CSSRule, availableRules.padding, ruleValue)
        );
        current++;
        continue;
      case availableRules.margin:
        tokens.push(
          createNode(ruleTypes.CSSRule, availableRules.margin, ruleValue)
        );
        current++;
        continue;
      case '':
        // Ignore white space and just continue
        current++;
        continue;
      default:
        throw new Error(`Unknown CSS rule: '${rule}'`);
    }
  }

  return tokens;
}
