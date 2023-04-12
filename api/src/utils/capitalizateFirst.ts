//This function capitalizates the first letter of a string
export function capFirst(arg: string){ 
  return `${arg[0].toString().toUpperCase()}${arg.slice(1).toLowerCase()}`
}