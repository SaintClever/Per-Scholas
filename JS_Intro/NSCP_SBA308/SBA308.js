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

function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.

  let result = [];


  // course
  for (let i in course) {
    console.log(course[i]);
  }
  console.log();


  // ag
  let assignmentFunc = () => {
  let assignmentArray = [];

  for (let i in ag.assignments) {
    let assignment = {};

    assignment.id = ag.assignments[i].id;
    assignment.due_at = ag.assignments[i].due_at;
    assignment.points_possible = ag.assignments[i].points_possible;

    if (!assignmentArray.includes(assignment)) {
      assignmentArray.push(assignment);
    }
  }

  return assignmentArray;
  }
  console.log(assignmentFunc());
  console.log();


  // submissions
  let submissionFunc = () => {
    let sub = [];

    for (let i in submissions) {
      let submissionObject = {}

      submissionObject.id = submissions[i].learner_id;
      submissionObject.score = submissions[i].submission.score;
      submissionObject.assignment_id = submissions[i].assignment_id;

      if (!sub.includes(submissionObject)) {
        sub.push(submissionObject)
      }
    }

    return sub;
  }
  let submission = submissionFunc();
  console.log(submission);
  console.log();


  let average = () => {
    let avg125 = [], avg132 = [];

    for (let i = 0; i < submission.length; i++) {
      if (submission[i].id === 125) {
        avg125.push(submission[i].score);
      } else if (submission[i].id === 132) {
        avg132.push(submission[i].score);
      }
    }

    return {125: avg125, 132: avg132};
  }
  console.log(average());
  console.log();

  // const result = [
  //   {
  //     id: 125,
  //     avg: 0.985, // (47 + 150) / (50 + 150)
  //     1: 0.94, // 47 / 50
  //     2: 1.0 // 150 / 150
  //   },
  //   {
  //     id: 132,
  //     avg: 0.82, // (39 + 125) / (50 + 150)
  //     1: 0.78, // 39 / 50
  //     2: 0.833 // late: (140 - 15) / 150
  //   }
  // ];

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
