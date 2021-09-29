/*const arrayVal = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];
const ronBirthDay = 18; 
const ronBirthMon = 7;*/

const arrayVal = [1, 2, 1, 3, 2];
const ronBirthDay = 3;
const ronBirthMon = 2;

function birthday(arrayChocolate, biDayTotal, biMonLenght) {
  let results = 0;
  for (let i = 0, j = biMonLenght; i <= arrayChocolate.length - 1; i++, j++) {
    const totalSection = getTotalSection(arrayChocolate.slice(i, j));
    if (i !== j) {
      if (isEqualtoLenght(totalSection, biDayTotal) === true) {
        results++;
      }
    } else if (isEqualtoLenght(arrayChocolate[i], biDayTotal) === true)
      results++;
  }

  return results;
}

function getTotalSection(sectionArray) {
  let total = 0;
  for (let i = 0; i <= sectionArray.length - 1; i++) {
    total = total + sectionArray[i];
  }
  // console.log(sectionArray + '  b  ' + total);
  return total;
}
function isEqualtoLenght(values, total) {
  //console.log(values);
  return values === total;
}

console.log(birthday(arrayVal, ronBirthDay, ronBirthMon));
