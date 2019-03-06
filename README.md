# Styled compiler

My first attempt on something remotely close to a compiler

> The Program definitely contains bugs. This is for learning purposes only!

## Basic usage

```ts
// Not on NPM, so this is just for the examples
import styledCompiler from 'styledCompiler';
```

The `styledCompiler` takes a string of CSS, very much like a
styled component in the React ecosystem.

```ts
const myCss = `
  height: 100px;
  width: 300px;
  background-color: salmon;
`;

styledCompiler(myCSSBlock);
```

The compiler translates this to an abstract syntax tree. Here's how it looks like:

```ts
{
  Program: {
    body: [
      {
        type: 'CSSRule',
        rule: 'height',
        value: '100px'
      },
      {
        type: 'CSSRule',
        rule: 'width',
        value: '300px'
      },
      {
        type: 'CSSRule',
        rule: 'background-color',
        value: 'salmon'
      }
    ];
  }
}
```

The last step of this compiler takes the AST and transforms it into a plain javascript object
that contains the styles in the CSS string.

Here's how it looks like when the compiler has done it's job:

```ts
{
  height: '100px',
  width: '300px',
  backgroundColor: 'salmon'
}
```
