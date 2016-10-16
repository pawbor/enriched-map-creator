export function average(...args) {
  if(arguments.length === 1 && Array.isArray(arguments[0])) {
    args = arguments[0];
  }

  return sum(args) / args.length;
}

export function sum(...args) {
  if(arguments.length === 1 && Array.isArray(arguments[0])) {
    args = arguments[0];
  }

  return args.reduce((acc, val) => acc + val, 0);
}
