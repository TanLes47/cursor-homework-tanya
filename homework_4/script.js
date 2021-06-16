
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// 1). Поділ студентів на пари(хлопець+дівчина)
function  getPairs(students) {
    return [
        [students[0], students[2]],
        [students[1], students[3]],
        [students[4], students[5]],
    ];
} 

const pairs = getPairs(students);
console.log(pairs);

// 2). Зіставлення пар та тем проектів
function getPairsThemes(pairs, themes) {
    const getPairsThemes = [];
    for (let i = 0; i < pairs.length; i++) 
        getPairsThemes[i] = [pairs[i].join(' і '), themes[i]];
    return getPairsThemes;
}

const pairsThemes = getPairsThemes(pairs, themes);
console.log(pairsThemes);

// 3).Зіставлення оцінки(marks) зі студентом(students):
function setStudentsMarks(students, marks) {
    const studentsMarks = [];
    for (let i = 0; i < students.length; i++)
        studentsMarks[i] = [students[i], marks[i]];
    return studentsMarks;
}

const studentsMarks = setStudentsMarks(students, marks);
console.log(studentsMarks);

// 4) Випадкова оцінка(від 1 до 5) кожній парі за проєкт
function setPairsThemesMarks(pairs) {
    let pairsThemesMarks = [...pairs];
    for (let i = 0; i < pairs.length; i++){
        const mark = Math.floor(Math.random() * 5) + 1;
        pairsThemesMarks[i] = [pairsThemes[i], mark]; 
    }
    return pairsThemesMarks;
}

const pairsThemesMarks = setPairsThemesMarks(pairs);
console.log(pairsThemesMarks);

document.querySelector(".projects").innerHTML = `
<ul>1.Поділ студентів на пари:
    <li>${ pairs[0] }</li>
    <li>${ pairs[1] }</li>
    <li>${ pairs[2] }</li>
</ul>
<ul>2.Зіставлення пар та тем проектів:
    <li>${ pairsThemes[0] }</li>
    <li>${ pairsThemes[1] }</li>
    <li>${ pairsThemes[2] }</li>
</ul>
    <ul>3.Оцінки студентів:
    <li>${ studentsMarks[0] }</li>
    <li>${ studentsMarks[1] }</li>
    <li>${ studentsMarks[2] }</li>
    <li>${ studentsMarks[3] }</li>
    <li>${ studentsMarks[4] }</li>
    <li>${ studentsMarks[5] }</li>
</ul>
<ul>4.Випадкова оцінка(від 1 до 5) кожній парі за проєкт:
    <li>${ pairsThemesMarks[0] }</li>
    <li>${ pairsThemesMarks[1] }</li>
    <li>${ pairsThemesMarks[2] }</li>
</ul>`