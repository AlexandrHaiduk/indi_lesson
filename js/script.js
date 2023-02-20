const array = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4];
// const filteredArray = array.filter((num, index, array) => array.indexOf(num) === index);

// const filteredArray = array.reduce((acc, num) => {
//     if (!acc.includes(num)) {
//         acc.push(num)
//     }
//     return acc
// },[])

// const filteredArray = array.reduce((acc, num) => !acc.includes(num) ? [...acc, num]: acc,[])

// console.log(filteredArray);

const newArray = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < newArray.length / 2; i += 1) {
    let temp = newArray[i]
    newArray[i] = newArray[newArray.length - 1 - i];
    newArray[newArray.length - 1 - i] = temp
}

// console.log(newArray);
// console.log(newArray.reverse())

const people1 = [
  {
    name: 'Alex',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
];
// нарцис  'Jhon'c
const people2 = [
  {
    name: 'Alex',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: [],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
];
//немає нарциса'
const people3 = [
  {
    name: 'Alex',
    know: ['Alex', 'Eva'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
];
//немає нарциса
const people4 = [
  {
    name: 'Alex',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: ['Eva'],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
];
//немає нарциса'
// Нарциса знають всі, нарцис незнає нікого

function findNarc(array) {
    let nar = '';
    const maybeNarc = array.find((item) => item.know.length === 0)
    if (!maybeNarc) {
        return "Hемає нарциса"
    }
    nar = maybeNarc.name

    const allKnows = array.every((item) => {
        if (item.name === nar) {
            return true
        }
        return item.know.includes(nar)
    })
    return allKnows ? `нарцис  ${nar}` : "Hемає нарциса";
}

// console.log(findNarc(people4));


const string = 'Де помити мопед'

const normilesedString = string.toLowerCase().replaceAll(" ", "")

const reversedString = normilesedString.split('').reverse().join("")

const isPolindrome = reversedString === normilesedString
// console.log(isPolindrome ? "полідром" : "не поліндром");

const a = [121, 144, 19, 161, 19, 144, 19, 11];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

const dobledArray = a.map((item) => item * item)

const aSorted = [...dobledArray].sort((a, b) => a - b)
const bSorted = [...b].sort((a, b) => a - b)

console.log(aSorted);
console.log(bSorted);

// for (let i = 0; i < aSorted.length; i += 1) {
//   if (aSorted[i] !== bSorted[i]) {
//     console.log("not same")
//     break
//   }  
// }

// console.log("same")

const same = aSorted.every((item, index) => {
  return item === bSorted[index] 
})

console.log(same ? "same" : "not same");