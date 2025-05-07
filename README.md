# 4.2 - Recursion Part 2

###### ICS4U - Mr. Brash 🐿️

- [Jump to the Tasks](#your-tasks)

### Reminder:  `Recursion`
- divides a complex problem into smaller sub-problems (i.e. divide and conquer)
    - subproblems are smaller instances of the same type of problem.
- is somehow self-referential (calls itself)

### Factorials are a perfect example for recursion.
Last class you were asked to devise a recursive algorithm that will return the factorial of a number.
```JS
    function factorial(n) {...}
```
How successful were you? If you struggled, have a classmate (or your teacher) explain the solution. Recursion can be difficult to understand.

Today you will be practicing this new skill of _recursion_.


---

### A new Challenge - Converting Strings to Integers
The `parseInt()` and `Number()` functions are very important tools. We couldn't do a lot without them. **But how do they work?**<br>Let's focus on `parseInt()`.
- Take a string and (for now) assume it is made of only the digits 0-9. For example `"4293"`<br>
**Thoughts:**
    - The **length** of that string (currently 4) can be a very helpful piece of information.
    - The integer ascii character values for characters '0' to '9' are 48 to 57.
    - JavaScript has a `charCodeAt()` function that gives you the integer code value of a character.

🤔 Can we recursively convert a String to a number? 

#### Generate some pseudocode to do it (feel free to work with a partner).

---

### Another Problem: Palindromes

Let's look at a palindrome - a String which reads the same forwards & backwards (i.e. "level", "noon", "mom"). How can we write a function that takes a String and recursively determines whether the string is a palindrome? To do this recursively, we must express the palindrome problem in terms of smaller palindrome problems.

**Here is the _recursive_ formulation of the problem:**

- A String is a palindrome if its first and last characters are identical AND the substring in between those characters is also a palindrome.

    > radar  -->  ada  -->  d<br>
    > noon  -->  oo  -->  " "   (empty string)

Notice the following very important facts about recursion:
- The sub-problem(s) MUST be an instance of the same kind of problem.
- The sub-problem(s) MUST be smaller than the original problem size.

Eventually, the problem (the String) will become so small that we can no longer formulate a smaller version (there is no substring). This is the **Base Case**. In the palindrome problem, an empty string or a single character is trivially a palindrome and hence will be considered the **base case** for that problem.

Here are some palindrome examples.

    1 - is_palindrome("level")  --> is_palindrome("eve")  -->  is_palindrome("v")  -->  true<br>
    2 - is_palindrome("poop")   --> is_palindrome("oo")   -->  is_palindrome("")   -->  true<br>
    3 - is_palindrome("abcdba") --> is_palindrome("bcdb") -->  is_palindrome("cd") -->  false<br>
    4 - is_palindrome("doomed") --> is_palindrome("oome") -->  false

#### Could you generate pseudocode for the `is_palindrome()` function?

---

## Your Tasks:

- [Back to the Lesson](#42---recursion-part-2)


You have all the JavaScript skills required to do these, so try to avoid looking things up. Pseudocode and whiteboards are your friends!

#### String to Integer - `string_to_int(str)`: 
_Recursively_ convert the given string `str` to a number (integer) and **return that integer** value. **Note:** Check each character for non-numeric characters. If a non-numerical character is found, ignore it and all succeeding characters and return the integer value parsed up to that point. You are essentially recreating the `parseInt()` function.

**For Example:**
```JS
string_to_int("123hello987")   // returns 123
=> 123
string_to_int("I'm not a number")  // returns NaN
=> NaN
string_to_int("9384")  // returns 9384
=> 9384
string_to_int("B15")   // returns NaN
=> NaN
```
<br>

#### Reverse a String - `reverse(str)`:
Yes, most programming languages have built-in libraries that can reverse a string, but we're going to do it _recursively_, one character at a time. **Return** the given string `str` _reversed_. Test your function with a very large string to see where it maxes-out the stack. If you _can_ max out the stack, are there ways around that while keeping it recursive? (just food for thought)
<br>

#### Is it a Palindrome - `is_palindrome(str)`: 
Use _recursion_ to determine if a given string is a _[palindrome](https://en.wikipedia.org/wiki/Palindrome)_ or not. Return `true` or `false`. (This is Mr. Brash's favourite, for some reason)


---

### Looking for a challenge? Done all your work? Try this one:

- `gcd(m, n)` - Read carefully.<br>
One of the most famous recursive algorithms was stated over two thousand years ago by the Greek mathematician Euclid. _Euclid's algorithm_, as it is called, provides a method for finding the [greatest common divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor) (gcd) for a pair of natural numbers. The algorithm is based on the following properties of a gcd:
  1. The gcd of two equal values, m and n, is simply m (or n, since they are the same).
  e.g., The gcd of 7 and 7 is simply 7, which is the largest number that will divide into 7.
  2. If two numbers are not equal, then the gcd of the two values will also divide into their difference and
  will, in fact, be the gcd of this difference. Thus, if m > n, then the gcd of m and n will be equal to the
  gcd of n and m - n.
  e.g., The number 15 and 10 have a difference of 5. Therefore, the gcd of 15 and 10 must also be
  the gcd of 10 and 5 (which is, of course, 5).
  3. If the numbers are not equal and the first number is smaller than the second, then we can simply
  switch the numbers and apply rule 2.

  <br>Write the algorithm `gcd(m,n)` that _recursively_ discovers and returns the greatest common divisor of the two given numbers.

  <br><br><br>
  
  🐿️
