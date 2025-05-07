# 23 - Recursion Part 2

###### ICS4U - Mr. Brash 🐿️

- [Jump to the Tasks](#your-tasks)

### `Recursion`
- divides a complex problem into smaller sub-problems (i.e. divide and conquer)
    - subproblems are smaller instances of the same type of problem.
- is somehow self-referential (calls itself)

Today you will continue to practice this new skill of _recursion_. After that, we will use it to search for a hidden value and then to sort an array.

### Helper Functions:
Sometimes you will utilize a "_helper function_" to facilitate the _actual_ recursion. This helps track values that were not part of the original function call.

---

### Challenge: Converting Strings to Integers

(Requires a helper function!)

The `parseInt()` and `Number()` functions are very important tools. We can't do much without them. **But how do they work?**

Let's focus on `parseInt()`. This function will return a `Number` up until it reaches something that is _NaN_.  
**Example:** `parseInt("425 kelvin")`  returns the _Number_ `425`

🤔 Can we convert that String to a number _ourselves_ (using recursion)? 

**Thoughts & Facts:**  
- The integer ascii values for '0' to '9' are 48 to 57.  
- JavaScript Strings have a `.charCodeAt()` function that gives you the integer code value of a character at that location.  
- We will need to look for non-numeric characters _first_ (potentially non-recursively) in order to find the numeric substring we hope to convert.  
- This will utilize a _helper function_ that does the true recursion.  

### Step 1: Generate some pseudocode

 Feel free to work with a partner. Write out your thoughts:
 - What's the plan?
 - Base Case?
 - Recursive Case?

---

### Another Problem: _Palindromes_

Now let's look at a _palindrome_ - a `String` which reads the same forwards & backwards (i.e. "level", "noon", "mom"). Can we write a function that takes a `String` and recursively _determines_ whether the string is a palindrome or not?

To do this _recursively_, we must express the palindrome problem in terms of smaller palindrome problems.

**Here is a _recursive_ formulation of the problem:**

- A String is a palindrome if its first and last characters are identical AND the substring in between those characters is also a palindrome.

    > radar  -->  ada  -->  d<br>
    > noon  -->  oo  -->  " "   (empty string)

Eventually, the problem (the String) will become so small that we can no longer formulate a smaller version (there is no substring). This is the **Base Case**. In the palindrome problem, an empty string or a single character is trivially a palindrome and hence will be considered the **base case** for that problem.

Some palindrome examples:

    1 - is_palindrome("level")  --> is_palindrome("eve")  -->  is_palindrome("v")  -->  true
    2 - is_palindrome("doomed") --> is_palindrome("oome") -->  false
    3 - is_palindrome("poop")   --> is_palindrome("oo")   -->  is_palindrome("")   -->  true
    4 - is_palindrome("abcdba") --> is_palindrome("bcdb") -->  is_palindrome("cd") -->  false

---

## Your Tasks:

- 🔙 [to the Lesson](#23---recursion-part-2)

Try to avoid looking things up. **Pseudocode and whiteboards are your friends!**

**No particular order:**

### String to Integer - `int(str)`: 
Use _recursion_ to convert the given string `str` to a number (integer) and **return that integer** value. If a non-numerical character is found, ignore it and all succeeding characters and return the integer value parsed up to that point. You are essentially recreating the `parseInt()` function.

**For Example:**
```JS
int("123hello987")   // returns 123
=> 123
int("9384")          // returns 9384
=> 9384
int("B15")           // returns NaN
=> NaN
```

---

### Is it a Palindrome - `is_palindrome(str)`: 
Use _recursion_ to determine if a given string is a _[palindrome](https://en.wikipedia.org/wiki/Palindrome)_ or not. Return `true` or `false`.

---

### Create a Palindrome - `create_palindrome(len)`:
Given a length (`len`) greater than 0, create a palindrome of randomly selected lowercase letters. The lowercase alpha is ASCII 97-122 (a-z).  
**Examples:**  
`create_palindrome(2)` -> `"gg"`  
`create_palindrome(1)` -> `"b"`  
`create_palindrome(13)` -> `"grsdhwawhdsrg"`

---

### Reverse a String - `reverse(str)`:
Most programming languages have built-in libraries that can reverse a string, but we're going to do it _recursively_, one character at a time. **Return** the given string `str` _reversed_. Test your function with a very large string to see where it maxes-out the stack. If you _can_ max out the stack, are there ways around that while keeping it recursive? (just food for thought)
<br>

---

### Looking for a challenge? Done all your work? Try this one:

- `gcd(m, n)` - Read carefully.<br>
One of the most famous recursive algorithms was stated over two thousand years ago by the Greek mathematician Euclid. _Euclid's algorithm_, as it is called, provides a method for finding the [greatest common divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor) (gcd) for a pair of natural numbers. The algorithm is based on the following properties of a gcd:
  1. The gcd of two _equal_ values, m == n, is simply m (or n, since they are the same).
  e.g., The gcd of 7 and 7 is simply 7, which is the largest number that will divide into 7.
  2. If two numbers are not equal, then the gcd of the two values will also divide into their difference and
  will, in fact, be the gcd of this difference. Thus, if m > n, then the gcd of (m, n) will be equal to the
  gcd of (m-n, n).  
  For Example: The number 15 and 10 have a difference of 5. Therefore, the gcd of 15 and 10 must also be
  the gcd of 10 and 5, which must be the gcd of 5 and 5 (which is, of course, 5).
  3. If the numbers are not equal and the first number is smaller than the second, then we can simply
  switch the numbers and apply rule 2.

  <br>Write the algorithm `gcd(m,n)` that _recursively_ discovers and returns the greatest common divisor of the two given numbers.

  <br>
  
  🐿️
