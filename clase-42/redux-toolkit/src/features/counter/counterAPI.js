// Similar la ejecución de un fetch
export function fetchCount(amount = 1) {
  return new Promise((resolve) => {
    return setTimeout(() => {
      return resolve({ data: amount });
    }, 2500);
  });
}
