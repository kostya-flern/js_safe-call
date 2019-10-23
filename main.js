'use strict'

const safeCall = () => {
  try {
    f();
  } catch (error) {
    return false;
  }
  return true;
}

safeCall(() => console.log('Hello!')); // true
safeCall(() => JSON.parse('abc')); // false
safeCall(() => false); // true
safeCall(() => abc); // false