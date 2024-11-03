# flipper

A package for utility functions & templates that can be reused in projects

---

-   [flipper](#flipper)
    -   [Utility functions](#utility)
        -   [Dates](#dates)
            -   [msToTimestamp](#mstotimestamp)
            -   [msToTime](#mstotime)
            -   [dateToUTC](#datetoutc)
        -   [String](#string)
            -   [getInitials](#getinitials)
            -   [capitalize](#capitalize)
            -   [ellipse](#ellipse)
        -   [Math](#math)
            -   [round](#round)
            -   [fix](#fix)
        -   [Shuffle](#shuffle)
            -   [shuffle](#shuffle)

## Utility

### Date

#### msToTimestamp

##### Definition

```ts
/**
 * Convers ms into a XX:YY:ZZ timestamp
 * @param ms Timestamp given in milliseconds
 * @returns Timestamp converted to XX:YY:ZZ format
 */
function msToTimestamp(ms: number): string;
```

##### Examples

```ts
import { msToTimestamp } from '@kevink01/flipper';

const ms = 400;
const timestamp = msToTimstamp(ms);
console.log(timestamp); // 0:00

// Seconds
const ms1 = 5_000;
const timestamp1 = msToTimestamp(ms1);
console.log(timestamp1); // 0:05

// Minutes
const ms2 = 63_000;
const timestamp2 = msToTimestamp(ms2);
console.log(timestamp2); // 1:03

// Hours
const ms3 = 3_605_000;
const timestamp3 = msToTimestamp(ms3);
console.log(timestamp3); // 1:00:05
```

#### msToTime

##### Definition

```ts
/**
 * Converts a date into a time format. Format may include:
 * 1. 'X second(s)'
 * 2. 'X minute(s) and Y second(s)
 * 3. 'X hour(s), Y minute(s), and Z second(s)
 * @param ms Timestamp given in milliseconds
 * @returns Timestamp converted to time format
 */
function msToTime(ms: number): string;
```

##### Examples

```ts
import { msToTime } from '@kevink01/flipper';

const ms = 400;
const time = msToTime(ms);
console.log(time); // 0 seconds

const ms1 = 5_000;
const time1 = msToTime(ms1);
console.log(time1); // 5 seconds

const ms2 = 63_000;
const time2 = msToTime(ms2);
console.log(time2); // 1 minute and 3 seconds

const ms3 = 3_605_000;
const time3 = msToTime(ms3);
console.log(time3); // 1 hour and 5 seconds

const ms4 = 4_474_000;
const time4 = msToTime(ms4);
console.log(time4); // 1 hour, 14 minutes, and 34 seconds
```

#### dateToUTC

##### Definition

```ts
/**
 * Converts a local date object to a UTC date object
 * @param date Date object based on locale
 * @returns UTC date
 */
function dateToUTC(date: Date): Date;
```

##### Examples

```ts
import { dateToUTC } from '@kevink01/flipper';

const date = new Date(); // -05:00 (New York)
const utc_date = dateToUTC(date); // UTC +00:00
```

### Math

#### round

##### Definition

```ts
/**
 * Round a number to a specified digit place
 * @param num Number to round
 * @param precision The digit to round to
 * @returns Rounded number
 */
function round(num: number, precision: number): number;
```

##### Examples

```ts
import { round } from '@kevink01/flipper';

const num = 10.34;
const rounded = round(num, 1);
console.log(rounded); // 10.3

const num2 = 8.3;
const rounded2 = round(num2, 0);
console.log(rounded2); // 8

const num3 = -8.7;
const rounded3 = round(num3, 0);
console.log(rounded3); // -9
```

#### fix

##### Definition

```ts
/**
 * Add trailing decimal places to a number
 * @param num Number to add decimal places
 * @param decimals The number of decimal places to add
 * @returns Fixed number with specified decimal places
 */
function fix(num: number, decimals: number): string;
```

##### Examples

```ts
import { fix } from '@kevink01/flipper';

const num = 8.3;
const fixed = fix(num, 4);
console.log(fixed); // 8.3000

const num2 = 13;
const fixed2 = fix(num2, 2);
console.log(fixed2); // 13.00
```

### Shuffle

#### shuffle

##### Definition

```ts
/**
 * Shuffles a generic array
 * @param arr The array to be shuffled
 * @returns Shuffled array
 */
function shuffle<T>(arr: T[]): T[];
```

##### Examples

```ts
import { shuffle } from '@kevink01/flipper';

const array = [1, 4, 6, 8, 9];
console.log(shuffle(array)); // [4,6,1,9,8]

console.log(shuffle(array)); // [9,1,6,8,4]
```

### String

#### getInitials

##### Definition

```ts
/**
 * Get the intiials of a string username.
 * @param name The full name of the user. Assumes first and last name is provided.
 * @returns The initials of the user's full name, or their first name initial. Otherwise, return "AA"
 */
function getInitials(name?: string): string;
```

##### Examples

```ts
import { getInitials } from '@kevink01/flipper';

const name = '';
const initials = getInitials(name);
console.log(initials); // AA

const name2 = 'Joe';
const initials = getInitials(name2);
console.log(initials2); // J

const name3 = 'John Smith';
const initials = getInitials(name3);
console.log(initials3); // JS
```

#### capitalize

##### Definition

```ts
/**
 * Capitalizes the string
 * @param str String to capitlize
 * @returns The first letter of the string capitalized, while case is preserved
 */
function capitalize(str: string): string;
```

##### Examples

```ts
import { capitalize } from '@kevink01/flipper';

const str = 'a';
const capitalized = capitalize(str);
console.log(capitalized); // A

const str2 = 'avocado';
const capitalized = capitalize(str2);
console.log(capitalized); // Avocado
```

#### ellipse

##### Definition

```ts
/**
 * Truncate the string to a maximum length, and add ellipse to the tail
 * @param str String to ellipse
 * @param maxLength The maximum length the string should have
 * @returns Ellipsed string (or the full string if str's length < maxLength)
 */
function ellipse(str: string, maxLength: number): string;
```

##### Examples

```ts
import { ellipse } from '@kevink01/flipper';

const str = 'string';
const ellipsed = ellipse(str, -10); // Defaults to print string if second parameter is negative
console.log(ellipsed); // string

const str2 = 'string';
const ellipsed2 = ellipse(str2, -10);
console.log(ellipsed2); // (empty string)

const str3 = 'string';
const ellipsed3 = ellipse(str3, -10);
console.log(ellipsed3); // string

const str4 = 'string';
const ellipsed4 = ellipse(str4, -10);
console.log(ellipsed4); // str...
```
