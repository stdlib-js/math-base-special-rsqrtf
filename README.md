<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Reciprocal Square Root

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the reciprocal of the principal [square root][square-root] of a single-precision floating-point number.

<section class="intro">

The reciprocal of the principal [square root][square-root] is defined as

<!-- <equation class="equation" label="eq:reciprocal_square_root" align="center" raw="\operatorname{rsqrtf}(x)=\frac{1}{\sqrt{x}}" alt="Reciprocal square root"> -->

```math
\mathop{\mathrm{rsqrtf}}(x)=\frac{1}{\sqrt{x}}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{rsqrtf}(x)=\frac{1}{\sqrt{x}}" data-equation="eq:reciprocal_square_root">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@0fa0140fef638265646fb520a52170d5e0495023/lib/node_modules/@stdlib/math/base/special/rsqrtf/docs/img/equation_reciprocal_square_root.svg" alt="Reciprocal square root">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-rsqrtf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var rsqrtf = require( '@stdlib/math-base-special-rsqrtf' );
```

#### rsqrtf( x )

Computes the reciprocal (inverse) square root of a single-precision floating-point number.

```javascript
var v = rsqrtf( 1.0 );
// returns 1.0

v = rsqrtf( 4.0 );
// returns 0.5

v = rsqrtf( 0.0 );
// returns Infinity

v = rsqrtf( NaN );
// returns NaN

v = rsqrtf( Infinity );
// returns 0.0
```

For negative numbers, the reciprocal square root is **not** defined.

```javascript
var v = rsqrtf( -4.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var rsqrtf = require( '@stdlib/math-base-special-rsqrtf' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu() * 100.0 );
    console.log( 'rsqrt(%d) = %d', x, rsqrtf( x ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/rsqrtf.h"
```

#### stdlib_base_rsqrtf( x )

Computes the reciprocal (inverse) [square root][square-root] of a single-precision floating-point number.

```c
float y = stdlib_base_rsqrtf( 4.0 );
// returns 0.5
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_rsqrtf( const float x );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/rsqrtf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 3.14f, 9.0f, 0.0f, 0.0f/0.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_rsqrtf( x[ i ] );
        printf( "rsqrt(%f) = %f\n", x[ i ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/rsqrt`][@stdlib/math/base/special/rsqrt]</span><span class="delimiter">: </span><span class="description">compute the reciprocal square root of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math-base/special/sqrtf`][@stdlib/math/base/special/sqrtf]</span><span class="delimiter">: </span><span class="description">compute the principal square root of a single-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-rsqrtf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-rsqrtf

[test-image]: https://github.com/stdlib-js/math-base-special-rsqrtf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-rsqrtf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-rsqrtf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-rsqrtf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-rsqrtf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-rsqrtf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-rsqrtf/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-rsqrtf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-rsqrtf/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-rsqrtf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-rsqrtf/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-rsqrtf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-rsqrtf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-rsqrtf/main/LICENSE

[square-root]: https://en.wikipedia.org/wiki/Square_root

<!-- <related-links> -->

[@stdlib/math/base/special/rsqrt]: https://github.com/stdlib-js/math-base-special-rsqrt

[@stdlib/math/base/special/sqrtf]: https://github.com/stdlib-js/math-base-special-sqrtf

<!-- </related-links> -->

</section>

<!-- /.links -->
