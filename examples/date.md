### Date

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
