/* what does it mean to have this keyword and how to bind context to it */

const Person = {
    name: 'dtblocker',
    greet() {
        console.log(`hi i am ${this.name}`)
    },
};

Person.greet();

const greetFunction = Person.greet

/* as we transfer method to another variable the context is lost */
try {
    greetFunction()
}catch(e) {
    console.log('TypeError: this.name is undefined as greet has lost its context in greetFunction')
}

/* In order to retain context */

const boundGreet = Person.greet.bind({ name: 'hitesh' }) // context is changed

boundGreet()

/* also see bind, call and apply
## bind vs call vs apply in JavaScript

JavaScript provides three important methods—**bind**, **call**, and **apply**—to control the execution context (`this`) of functions. While they share similarities, each serves a unique purpose and has distinct behavior.

### Core Differences

| Feature                         | bind        | call        | apply       |
|----------------------------------|-------------|-------------|-------------|
| **Immediate Invocation**         | No          | Yes         | Yes         |
| **Arguments Format**             | List/array  | List        | Array       |
| **Returns**                      | New function| Result      | Result      |
| **Use Case**                     | Defer execution; set context for future use | Invoke immediately with custom context | Invoke immediately; arguments as array |

### How Each Works

#### `call()`
- **Purpose:** Invokes the function immediately, setting `this` to the provided context.
- **Arguments:** The first argument is the context (`this` value); subsequent arguments are passed individually.
- **Example:**
  ```javascript
  function sayHello(greeting) {
    console.log(greeting + ', ' + this.name);
  }
  const person = { name: 'Alice' };
  sayHello.call(person, 'Hi'); // Output: Hi, Alice
  ```
- **Use when:** You want to call the function right away and pass arguments one by one[1][2][6].

#### `apply()`
- **Purpose:** Like `call()`, but arguments are passed as an array.
- **Arguments:** The first argument is the context; the second is an array of arguments.
- **Example:**
  ```javascript
  function sayHello(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
  }
  const person = { name: 'Alice' };
  sayHello.apply(person, ['Hello', '!']); // Output: Hello, Alice!
  ```
- **Use when:** Arguments are already in an array or array-like object[2][4][6].

#### `bind()`
- **Purpose:** Returns a new function, bound to the provided context and (optionally) preset arguments. Does NOT execute the function immediately.
- **Arguments:** The first argument is the context; subsequent arguments are preset for later.
- **Example:**
  ```javascript
  function sayHello(greeting) {
    console.log(greeting + ', ' + this.name);
  }
  const person = { name: 'Alice' };
  const greetAlice = sayHello.bind(person, 'Hey');
  greetAlice(); // Output: Hey, Alice
  ```
- **Use when:** You want to create a function for later use with a specific context and optional arguments[2][3][4][5][6].

### Summary Table

|                | call                  | apply                  | bind                 |
|----------------|-----------------------|------------------------|----------------------|
| **Context**    | Sets `this`           | Sets `this`            | Sets `this`          |
| **Arguments**  | List                  | Array                  | List (preset for later)|
| **When Runs**  | Immediately           | Immediately            | On later call        |
| **Return**     | Result of function    | Result of function     | New function         |

### When to Use Each

- **Use `call`** when you know the context and arguments and want to invoke the function immediately.
- **Use `apply`** for immediate invocation, but you have arguments in an array.
- **Use `bind`** when you need a new function with fixed `this` and possibly preset arguments, to use later (e.g., as an event handler or callback)[1][2][5][6].

These methods are essential for advanced JavaScript, especially for functional programming patterns, callbacks, and controlling execution context.
*/
