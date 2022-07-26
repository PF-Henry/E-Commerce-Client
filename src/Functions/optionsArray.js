export default function optionsArray(index, stock, quantity) {
  let array = [];
  if (index === -1 && stock >= 10) {
    for (let i = 1; i <= 10; i++) {
      array.push(i);
    }
  } else if (index === -1) {
    for (let i = 1; i <= stock; i++) {
      array.push(i);
    }
  } else if (stock - quantity >= 10) {
    for (let i = 1; i <= 10; i++) {
      array.push(i);
    }
  } else {
    for (let i = 1; i <= stock - quantity; i++) {
      array.push(i);
    }
  }
  return array;
}
