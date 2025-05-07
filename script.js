/**
 * 23 - Recursion (part 2)
 * ICS4U - Mr. Brash 🐿️
 *
 * Read the README.md file and/or check with your teacher.
 *
 * Author:
 **/

'use strict'

/**
 * Return a random integer from min to max, inclusively
 * @param {Number}  min  The lowest possible value.
 * @param {Number}  max  The highest possible value.
 * @returns {Number} A random whole integer from max to min. 
 **/
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;  // included
}


