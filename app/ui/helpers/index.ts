export const convertToDollarAmountWithCents = (amount: number) => {
  let dollarAmount = amount/100
  if((amount % 100) === 0) {
    return dollarAmount.toString() + '.00'
  } 
  return dollarAmount.toString()
}