import tokenizer from '../src/tokenizer';
import parser from '../src/parser';
import codeGenerator from '../src/codeGenerator';
import styledCompiler from '../src/index';

describe('Styled Compiler', () => {
  describe('Tokenizer', () => {
    it('should give an array of tokens that represents the css program', () => {
      const css = `
        color: red;
        background-color: blue;
      `;

      const expectedTokens = [
        {
          type: 'CSSRule',
          rule: 'color',
          value: 'red'
        },
        {
          type: 'CSSRule',
          rule: 'background-color',
          value: 'blue'
        }
      ];

      expect(tokenizer(css)).toEqual(expectedTokens);
    });
  });

  describe('Parser', () => {
    it('should produce an AST based on the tokens', () => {
      const tokens = [
        {
          type: 'CSSRule',
          rule: 'color',
          value: 'red'
        },
        {
          type: 'CSSRule',
          rule: 'background-color',
          value: 'blue'
        }
      ];

      const ast = {
        Program: {
          body: [
            {
              type: 'CSSRule',
              rule: 'color',
              value: 'red'
            },
            {
              type: 'CSSRule',
              rule: 'background-color',
              value: 'blue'
            }
          ]
        }
      };

      expect(parser(tokens)).toEqual(ast);
    });
  });

  describe('Code generator', () => {
    it('should generate the new code based on the AST', () => {
      const ast = {
        Program: {
          body: [
            {
              type: 'CSSRule',
              rule: 'color',
              value: 'red'
            },
            {
              type: 'CSSRule',
              rule: 'background-color',
              value: 'blue'
            }
          ]
        }
      };

      const expected = {
        color: 'red',
        backgroundColor: 'blue'
      };

      expect(codeGenerator(ast)).toEqual(expected);
    });
  });

  describe('Full compiler test', () => {
    it('should work as expected', () => {
      const input = `
      width: 100px;
      height: 300px;
      color: red;
      background-color: blue;
    `;

      const output = {
        width: '100px',
        height: '300px',
        color: 'red',
        backgroundColor: 'blue'
      };

      expect(styledCompiler(input)).toEqual(output);
    });

    it('should throw syntax error if rule not found', () => {
      const input = `
      width: 100px;
      height: 300px;
      test: red;
      background-color: blue;
    `;

      expect(() => {
        styledCompiler(input);
      }).toThrow("Unknown CSS rule: 'test'");
    });
  });
});
