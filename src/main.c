/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

#include "stdlib/math/base/special/rsqrtf.h"
#include "stdlib/math/base/special/sqrt.h"

/**
* Computes the reciprocal square root of a single-precision floating-point number.
*
* @param x       number
* @return        reciprocal square root
*
* @example
* float y = stdlib_base_rsqrtf( 4.0f );
* // returns 0.5
*/
float stdlib_base_rsqrtf( const float x ) {
	// As the square root is a fundamental numerical operation, compute in extended precision in order to avoid precision loss:
	return 1.0f / stdlib_base_sqrt( x );
}
