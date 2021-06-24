const outputs = document.querySelectorAll(".output");
const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

// 1.Створити функцію, яка поверне список предметів для конкретного студента.
document.querySelector(".btn-1").addEventListener("click", () => {
  const index = document.querySelector(".select-1").value; 
  let subjects = Object.keys(students[index].subjects);
  let listSubjects = subjects.map((subject) => {
      return subject[0].toUpperCase() + subject.slice(1).replaceAll("_", " ");
  });

  outputs[0].innerHTML = `Список предметів студента: ${listSubjects}`;
});

// 2.Створити функцію, яка поверне середню оцінку по усім предметам для переданого студента.

document.querySelector(".btn-2").addEventListener("click", () => {
    const index = document.querySelector(".select-2").value; 
    let averageMark = getAverageMark(index);
    outputs[1].innerHTML = `Середня оцінка студента: ${students[index].name}: ${averageMark}`;
});

function getAverageMark(index) {
  let marks = [].concat(...Object.values(students[index].subjects));
  return (averageMark = (marks.reduce((sum, mark) => sum + mark) / marks.length).toFixed(2));
}

// 3.Створити функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту.

document.querySelector(".btn-3").addEventListener("click", () => {
  const index = document.querySelector(".select-3").value;
  let studentInfo = JSON.stringify(getStudentInfo()[index], null, 2); 
  outputs[2].innerHTML = `Загальна інформація студента = ${studentInfo}`;
});

function getStudentInfo() {
  return students.map((student, index) => ({
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(index),
  }));
}

// 4.Функція, яка повертає імена студентів у алфавітному порядку

document.querySelector(".btn-4").addEventListener("click", () => {
  let sortedStudents = students.map((student) => {
    return student.name;
    })
    .sort();
  outputs[3].innerHTML = `${sortedStudents}`;
});

// 5.функція, яка повертає кращого студента зі списку по показнику середньої оцінки.

document.querySelector(".btn-5").addEventListener("click", () => {
  let studentsInfo = getStudentInfo(); 
  let sortedStudentsInfo = studentsInfo.sort((a, b) =>
    a.averageMark < b.averageMark ? 1 : -1
  );
  let nameBestStudent = sortedStudentsInfo[0].name;
  outputs[4].innerHTML = `Найкращий студент: ${nameBestStudent}`;
});

// 6.Функція, яка повертає об'єкт, в якому ключі це букви у слові, а значення – кількість їх повторень.

document.querySelector(".btn-6").addEventListener("click", () => {
  const word = document.querySelector("#input-6").value.toLowerCase().replaceAll(/\d/g, "");
  outputs[5].innerHTML = `Введіть слово`;
  if (!word) {
  } else {
    let quantityLetters = {};
  for (let i = 0; i < word.length; i++) {
    quantityLetters[word[i]] = word.split(word[i]).length - 1; 
    }
  outputs[5].innerHTML = `Кількість букв в слові: ${word}: ${JSON.stringify(quantityLetters,null,2)}`;
  }
});
