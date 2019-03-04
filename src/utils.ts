import { Token } from './Interfaces';

export function createNode(type: string, rule: string, value: string): Token {
  return {
    type,
    rule,
    value
  };
}
