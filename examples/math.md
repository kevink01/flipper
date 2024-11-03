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
