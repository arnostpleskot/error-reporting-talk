// window.onerror = (message, source, lineno, colno, error) => {
//   console.error("Custom error reporter", message, source, lineno, colno, error);
//
//   return true; // When the function returns true, this prevents the firing of the default event handler.
// };

window.addEventListener('error', ({error}) => console.error("Custom error reporter", error));
