# Hoshen-Kopelman algorithm - JavaScript implementation

JavaSscript implementation of the Hoshen-Kopelman algorithm.

To create JavaScript implementation I was using pseudo code from this [Wikipedia site](https://en.wikipedia.org/wiki/Hoshen%E2%80%93Kopelman_algorithm).

## Usage

If you would like to use the implementation, the code is inside of `rasterAndLabel.js` file. Function `rasterAndLabel(grid)`takes one argument, which is two dimensional array with equal length of arrays. Passed have to be filled with `true` or `false` values. True value indicates that the particular part is occupied. In results function returns array of the same size as argument array, however result array is filled with number. Each number indicates membership to a group.

### Example:

Input array:

|       |       |       |       |       |       |
|-------|-------|-------|-------|-------|-------|
| true  | false | false | true  | false | false |
| false | true  | true  | true  | true  | false |
| false | false | true  | false | false | false |
| true  | true  | false | true  | true  | false |
| false | false | true  | true  | false | true  |
| false | false | false | false | true  | true  |

Result array:

|       |       |       |       |       |       |
|-------|-------|-------|-------|-------|-------|
| 1     |       |       | 2     |       |       |
|       | 2     | 2     | 2     | 2     |       |
|       |       | 2     |       |       |       |
| 4     | 4     |       | 5     | 5     |       |
|       |       | 5     | 5     |       | 7     |
|       |       |       |       | 7     | 7     |
