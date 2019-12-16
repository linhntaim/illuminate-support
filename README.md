# illuminate-support

Inspired by Laravel Framework: Support Component.

## Install

```shell script
npm install illuminate-support
```

## Component

### Str

#### **`ucWords(str, delimiter = '\s\t\r\n\f\v')`**
    
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

#### **`studly(value)`**
    
- **`value`**: 
    - *(required)* The input string.

```javascript
import {Str} from 'illuminate-support'

const str1 = 'hello world'
console.log(Str.studly(str1)) // output: 'HelloWorld'

const str2 = 'hello_world'
console.log(Str.studly(str2)) // output: 'HelloWorld'
```

### Manager

To support Builder (Manager) pattern.

```javascript
import {Manager} from 'illuminate-support'

class ServerManager extends Manager {
}
```