const employee1 = {
  name: "John",
  age: 20,
};

const result1 = checkProperties(employee1);

function checkProperties(employee){
  if(employee?.scores === undefined || employee?.scores === null){
    return undefined;
  }else if(employee?.scores?.english === undefined || employee?.scores?.english === null){
    return "English score is not defined";
  }
}



console.log(result1);
const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
  },
};

const result2 = checkProperties(employee2);
console.log(result2);
