//loop through the object using forEach so that it logs, (eg,for user1)

//'user1 is called Jon and is 23 years old'

//the loop should not return a data 
// structure

// Use one or more of the object methods to solve
const obj = {
  user1: {
    name: 'Jon',
    age: 23,
  },
  user2: {
    name: 'Jen',
    age: 25,
  },
  user3: {
    name: 'Jan',
    age: 21,
  },
};
/*loop though */

let x= Object.entries(obj).forEach(user=>{
  console.log(`${user[0]} is called ${user[1].name} and is ${user[1].age}`);
});
//this will give me the 

// console.log(x)
// // for(const key)
// let selectUser = Object.keys(obj)
// let userAge = Object.values(obj)
// let together = Object.entries(obj)
// user.forEach(element => {
  
// });

// for(const[user, name] of Object.values(obj)){
//   console.log(`${user} is called ${name} and is`)
// }
// console.log(selectUser)
// console.log(userAge)
// console.log(together)

// console.log(`${obj.user1[1]}`)


// Use Object Methods
//Create an albphabeticl list of every folder in the documents object (the keys are the folders)
//Create a list of every file in the documents object. one list.
const documents = {
  taxes: ['2010.xlx', '2020.xlx'],
  records: ['rec1.docx', 'rec2.docx', 'rec3.docx'],
  miscellaneous: ['pic.jpg', 'passwords.pdf', 'docs.txt'],
  Clubhouse: ['paty.jpg', 'christmasRules.pdf', 'pool.txt'],
};
//Are the two books alike? Create a function and Use Object methods to find out. Change object values to test for non-alike objects
const book1 = {
  title: 'My Book',
  author: 'John Doe',
  year: '2019',
};
const book2 = {
  title: 'My Book',
  author: 'John Doe',
  year: '2019',
};
