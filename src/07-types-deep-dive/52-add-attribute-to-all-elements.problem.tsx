/**
 * Let's say we wanted to add a new optional attribute to all React
 * elements. How would we do that?
 *
 * 1. Make use of declaration merging in the global scope to add
 * a new attribute to all React elements.
 */

<>
  <div testId="123" />
  <audio testId="123" />
  <video testId="123" />
  <a testId="123" />
  <abbr testId="123" />
  <address testId="123" />
</>;
