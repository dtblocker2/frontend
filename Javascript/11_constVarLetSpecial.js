/* ### Why Can You Change Elements of a `const` Array in JavaScript?

In JavaScript, the `const` keyword **prevents reassignment of the variable itself**, but it does **not make the contents of an object or array immutable**.

#### What Does `const` Actually Do?

- When you declare `const output = []`, you are saying:
  - The variable `output` always points to the same array.
  - You **cannot reassign** `output` to a new array or value (e.g., `output = ` will throw an error).
- However, the **contents of the array** (its elements) can still be changed:
  - You can use `push`, `pop`, or direct assignment like `output = 2`.

#### Example Breakdown

```javascript
const output = [];
output.push(1);    // Allowed: modifies the array's contents
output[0] = 2;     // Allowed: modifies the array's contents
output = [3, 4];   // Not allowed: TypeError, cannot reassign a const variable
```

- `output.push(i)` and `output = 2` are both allowed, because they **change the contents of the array**, not the binding of the variable.

#### Why Doesn't `const` Make the Array Immutable?

- `const` only protects the **binding** (the reference), not the value itself.
- If you want to make the array truly immutable, you can use methods like `Object.freeze()`:
  ```javascript
  const arr = Object.freeze([]);
  arr.push(1); // This will fail silently or throw an error in strict mode
  ```

#### Key Points

- **`const` prevents reassignment**, not mutation.
- **Array/object contents can still be changed** unless you use additional methods to freeze them.
- This behavior is the same for objects as well as arrays.

#### Summary Table

| Declaration | Can reassign variable? | Can change contents? |
|-------------|-----------------------|----------------------|
| `const`     | No                    | Yes                  |
| `let`       | Yes                   | Yes                  |
| `var`       | Yes                   | Yes                  |

If you want an array or object to be truly immutable, use `Object.freeze()` or similar techniques. */

/* variable are hoisted at top js even if they are declared in other place */

console.log(a); // undefined as variables are hoisted at top of js code but assignement of value (ie 10) and declaration is not done so it is undefined
var a = 10;

try {
  console.log(b);
  let b = 20; 
}catch(e) {
  console.log('Reference Error: as b is not declared at top of this code');
  // that is why it is said to use let because it can easily be debugged as we can get location of reference error but not in case of var
}
