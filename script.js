// Create Student Class
class Student {
  constructor(id, name, grades, attendance) {
    this.id = id;
    this.name = name;
    this.grades = grades;
    this.attendance = attendance;
  }

  // Calculate Average

  calculateAverage() {
    let total = this.grades.reduce(function (sum, grade) {
      return sum + grade;
    }, 0);

    return total / this.grades.length;
  }

  // Get Grade

  getGrade() {
    let average = this.calculateAverage();

    if (average >= 90) {
      return "A";
    } else if (average >= 80) {
      return "B";
    } else if (average >= 70) {
      return "C";
    } else if (average >= 60) {
      return "D";
    } else if (average >= 50) {
      return "E";
    } else {
      return "F";
    }
  }
  getFinalResult() {
    let average = this.calculateAverage();

    if (average >= 50 && this.attendance >= 75) {
      return "ناجح";
    } else {
      return "يحتاج مراجعة";
    }
  }
}

// Create Student Object

// Create Students Array

let studentsList = [
  new Student(101, "Shahd", [90, 80, 85], 95),

  new Student(102, "Ahmed", [70, 60, 80], 85),

  new Student(103, "Mohamed", [45, 40, 50], 80),

  new Student(104, "Mona", [42, 48, 45], 90),
];

console.log(studentsList);

studentsList.forEach(function (student) {
  console.log("Name:", student.name);
  console.log("Average:", student.calculateAverage());
  console.log("Grade:", student.getGrade());
  console.log("Final Result:", student.getFinalResult());
});

let strugglingStudents = studentsList.filter(function (student) {
  let average = student.calculateAverage();

  return average >= 40 && average <= 49;
});

console.log("Struggling Students:", strugglingStudents);

// Add 5 mercy marks

let studentsAfterMercy = strugglingStudents.map(function (student) {
  return {
    name: student.name,
    averageBefore: student.calculateAverage(),
    averageAfter: student.calculateAverage() + 5,
  };
});

console.log("Students After Mercy:", studentsAfterMercy);

// Calculate Total After Mercy

let totalAfterMercy = studentsAfterMercy.reduce(function (sum, student) {
  return sum + student.averageAfter;
}, 0);

console.log("Total After Mercy:", totalAfterMercy);
