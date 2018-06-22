# moonjs-loader
Webpack loader for compiling moonjs templates

## Installation

`npm install moonjs-loader`

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html?branch=master)

``` javascript

module.exports = {
    //...

    module: {
        rules: [
            {
                test: /\.moon$/,
                loader: "moonjs-loader"
            }
        ]
    }
};
```

## Loading templates

```twig
{# File: index.moon #}
<p>{{title}}</p>
```

```javascript
// File: index.js
import Moon from "moonjs";
import index from "index.moon";

Moon({
	el: "#app"
	render: index
});

```
