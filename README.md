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

The compiler translates this to an abstract syntax tree, that later transforms this into a
plain JavaScript object with the respective styles.

The final output will look like this

```ts
{
  height: '100px',
  width: '300px',
  backgroundColor: 'salmon'
}
```
