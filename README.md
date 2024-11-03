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

### Dates

#### msToTimestamp

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

```ts
import { dateToUTC } from '@kevink01/flipper';

const date = new Date(); // -05:00 (New York)
const utc_date = dateToUTC(date); // UTC +00:00
```

---

### String

#### getInitials

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

---

### Math

#### round

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

```ts
import { shuffle } from '@kevink01/flipper';

const array = [1, 4, 6, 8, 9];
console.log(shuffle(array)); // [4,6,1,9,8]

console.log(shuffle(array)); // [9,1,6,8,4]
```
