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
