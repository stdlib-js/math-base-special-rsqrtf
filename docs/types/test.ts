/*
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

import rsqrtf = require( './index' );


// TESTS //

// The function returns a number...
{
	rsqrtf( 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a value other than a number...
{
	rsqrtf( true ); // $ExpectError
	rsqrtf( false ); // $ExpectError
	rsqrtf( null ); // $ExpectError
	rsqrtf( undefined ); // $ExpectError
	rsqrtf( '5' ); // $ExpectError
	rsqrtf( [] ); // $ExpectError
	rsqrtf( {} ); // $ExpectError
	rsqrtf( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	rsqrtf(); // $ExpectError
}
