# illuminate-support

Inspired by Laravel Framework: Support Component.

## Install

```shell script
npm install illuminate-support
```

## Component

### Str

#### **`ctypeLower(str)`**

- **`str`**:
    - *(required)* The input string.

```javascript
import {Str} from 'illuminate-support'

const str1 = 'hello'
console.log(Str.ctypeLower(str1)) // output: true

const str2 = 'Hello'
console.log(Str.ctypeLower(str2)) // output: false
```

#### **`lcfirst(str)`**

- **`str`**:
    - *(required)* The input string.

```javascript
import {Str} from 'illuminate-support'

const str1 = 'HelloWorld'
console.log(Str.lcfirst(str1)) // output: helloWorld
```

#### **`strncmp(str1, str2, length)`**

- **`str1`**:
    - *(required)* The input string 1.
- **`str2`**:
    - *(required)* The input string 2.
- **`length`**:
    - *(required)* The input string.

```javascript
import {Str} from 'illuminate-support'

const str1 = 'HelloWorld'
const str2 = 'HelloMars'
console.log(Str.strncmp(str1, str2, 5)) // output: 0

const str3 = 'HelloWorld'
const str4 = 'HiMars'
console.log(Str.strncmp(str1, str2, 5)) // output: -1

const str5 = 'HelloWorld'
const str6 = 'HalloMars'
console.log(Str.strncmp(str1, str2, 5)) // output: 1
```

#### **`ucwords(str, delimiter = '\s\t\r\n\f\v')`**

- **`str`**:
    - *(required)* The input string.
- **`delimiter`**:
    - *(optional)* The optional delimiters contains the word separator characters.
    - Default: `'\s\t\r\n\f\v'`.

```javascript
import {Str} from 'illuminate-support'

const str1 = 'hello world'
console.log(Str.ucWords(str1)) // output: 'Hello World'

const str2 = 'hello_world'
console.log(Str.ucWords(str2, '_')) // output: 'Hello_World'
```

#### **`after(subject, search)`**

- **`subject`**:
    - *(required)* The input string.
- **`search`**:
    - *(required)* The search string.

```javascript
import {Str} from 'illuminate-support'

const str1 = 'HelloWorld'
console.log(Str.after(str1, 'l')) // output: loWorld

const str2 = 'HelloWorld'
console.log(Str.after(str2, '')) // output: HelloWorld

const str3 = 'HelloWorld'
console.log(Str.after(str3, 'a')) // output: HelloWorld
```

#### **`afterLast(subject, search)`**

- **`subject`**:
    - *(required)* The input string.
- **`search`**:
    - *(required)* The search string.

```javascript
import {Str} from 'illuminate-support'

const str1 = 'HelloWorld'
console.log(Str.afterLast(str1, 'l')) // output: d

const str2 = 'HelloWorld'
console.log(Str.afterLast(str2, '')) // output: HelloWorld

const str3 = 'HelloWorld'
console.log(Str.afterLast(str3, 'a')) // output: HelloWorld
```

#### **`before(subject, search)`**

- **`subject`**:
    - *(required)* The input string.
- **`search`**:
    - *(required)* The search string.

```javascript
import {Str} from 'illuminate-support'

const str1 = 'HelloWorld'
console.log(Str.before(str1, 'l')) // output: He

const str2 = 'HelloWorld'
console.log(Str.before(str2, '')) // output: HelloWorld

const str3 = 'HelloWorld'
console.log(Str.before(str3, 'a')) // output: HelloWorld
```

#### **`beforeLast(subject, search)`**

- **`subject`**:
    - *(required)* The input string.
- **`search`**:
    - *(required)* The search string.

```javascript
import {Str} from 'illuminate-support'

const str1 = 'HelloWorld'
console.log(Str.beforeLast(str1, 'l')) // output: HelloWor

const str2 = 'HelloWorld'
console.log(Str.beforeLast(str2, '')) // output: HelloWorld

const str3 = 'HelloWorld'
console.log(Str.beforeLast(str3, 'a')) // output: HelloWorld
```

#### **`between(subject, from, to)`**

- **`subject`**:
    - *(required)* The input string.
- **`from`**:
    - *(required)* The search from string.
- **`to`**:
    - *(required)* The search to string.

```javascript
import {Str} from 'illuminate-support'

const str1 = 'HelloWorld'
console.log(Str.between(str1, 'l', 'l')) // output: loWor

const str2 = 'HelloWorld'
console.log(Str.between(str2, '', '')) // output: HelloWorld
console.log(Str.between(str2, '', 'l')) // output: HelloWorld
console.log(Str.between(str2, 'l', '')) // output: HelloWorld
```

#### **`camel(value)`**

- **`value`**:
    - *(required)* The input string.

```javascript
import {Str} from 'illuminate-support'

const str1 = 'hello world'
console.log(Str.camel(str1)) // output: 'helloWorld'

const str2 = 'hello_world'
console.log(Str.camel(str2)) // output: 'helloWorld'

const str3 = 'HelloWorld'
console.log(Str.camel(str3)) // output: 'helloWorld'
```

#### **`contains(haystack, needles)`**

- **`value`**:
    - *(required)* The input string.
- **`needles`**:
    - *(required)* The search string, or the array of search strings.

```javascript
import {Str} from 'illuminate-support'

const str1 = 'HelloWorld'
console.log(Str.containsA(str1, 'Hello')) // output: true

const str2 = 'HelloWorld'
console.log(Str.contains(str2, ['Hello', 'John'])) // output: true

const str3 = 'HelloWorld'
console.log(Str.contains(str3, ['Hi', 'John'])) // output: false
```

#### **`containsAll(haystack, needles)`**

- **`value`**:
    - *(required)* The input string.
- **`needles`**:
    - *(required)* The array of search strings.

```javascript
import {Str} from 'illuminate-support'

const str1 = 'HelloWorld'
console.log(Str.containsAll(str1, ['Hello', 'World'])) // output: true

const str2 = 'HelloWorld'
console.log(Str.containsAll(str2, ['Hello', 'John'])) // output: false
```

#### **`endsWith(haystack, needles)`**

- **`value`**:
    - *(required)* The input string.
- **`needles`**:
    - *(required)* The search string, or the array of search strings.

```javascript
import {Str} from 'illuminate-support'

const str1 = 'HelloWorld'
console.log(Str.endsWith(str1, 'World')) // output: true

const str2 = 'HelloWorld'
console.log(Str.endsWith(str2, ['John', 'World'])) // output: true

const str3 = 'HelloWorld'
console.log(Str.endsWith(str3, ['John', 'Mary'])) // output: false
```

#### **`snake(value)`**

- **`value`**:
    - *(required)* The input string.

```javascript
import {Str} from 'illuminate-support'

const str1 = 'hello world'
console.log(Str.snake(str1)) // output: 'hello_world'

const str2 = 'helloWorld'
console.log(Str.snake(str2)) // output: 'hello_world'

const str3 = 'HelloWorld'
console.log(Str.snake(str3)) // output: 'hello_world'
```

#### **`startsWith(haystack, needles)`**

- **`value`**:
    - *(required)* The input string.
- **`needles`**:
    - *(required)* The search string, or the array of search strings.

```javascript
import {Str} from 'illuminate-support'

const str1 = 'HelloWorld'
console.log(Str.startsWith(str1, 'Hello')) // output: true

const str2 = 'HelloWorld'
console.log(Str.startsWith(str2, ['Hello', 'Hi'])) // output: true

const str3 = 'HelloWorld'
console.log(Str.startsWith(str3, ['Hi', 'Hallo'])) // output: false
```

#### **`studly(value)`**

- **`value`**:
    - *(required)* The input string.

```javascript
import {Str} from 'illuminate-support'

const str1 = 'hello world'
console.log(Str.studly(str1)) // output: 'HelloWorld'

const str2 = 'hello_world'
console.log(Str.studly(str2)) // output: 'HelloWorld'

const str3 = 'helloWorld'
console.log(Str.studly(str3)) // output: 'HelloWorld'
```

### Manager

To support Builder (Manager) pattern.

```javascript
import {Manager} from 'illuminate-support'

class ServerManager extends Manager {
}
```