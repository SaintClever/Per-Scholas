// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];



let userId = () => {
  let id = [];
  let result = []
  
  // User ID
  for (let i in LearnerSubmissions) {
    // console.log(LearnerSubmissions[i].learner_id); // consoles user ID's
    if (!id.includes(LearnerSubmissions[i].learner_id)) {
      id.push(LearnerSubmissions[i].learner_id);
    }
  }
  // console.log(id); // Output UNIQUE user id's in an array to prevent duplicates
  
  // User ID Object
  for (let i in id) {
    let myObject = {};
    myObject.id = id[i];
    result.push(myObject);
  }
  // console.log(result); // Output id's in an object

  // return result;
  return id;
}
// console.log(userId()); // Invoke userId


// let usersObject = (userId) => {
//   let users = [];

//   for (let i = 0; i < userId.length; i++) {
//     let myObject = {};
//     myObject["id"] = userId[i];
//     users.push(myObject);
//   }
//   console.log(users);
// }

// console.log(usersObject(userId()));



let grades = () => {
  let result = [];

  for (let i in LearnerSubmissions) {
    // console.log(LearnerSubmissions[i], LearnerSubmissions[i].learner_id)
    // console.log();
    for (let j in userId()) {
      console.log(userId()[j]);
      if (userId()[j] === LearnerSubmissions[i].learner_id) {
        console.log(LearnerSubmissions[i].submission.score);
      }
    }
  }
}

console.log(grades());


function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.

  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0 // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833 // late: (140 - 15) / 150
    }
  ];

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
