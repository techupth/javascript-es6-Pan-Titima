let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
  hobbies: ["Football", "Coding"],
};

let additionalHobbies = ["Painting", "Yoga"];

// Start coding here
let {name, age,scores} = studentProfile;
let hobbies = [...studentProfile.hobbies,...additionalHobbies];
let newStudentProfile = {name, age, scores, hobbies};
console.log(newStudentProfile);
