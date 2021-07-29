class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 4, 5];
    }

    getInfo() {
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`
    } 
    
    get getMarks() { 
        if (this.dismiss) {
            return null;
        } else {
            return this.marks;
        }
    }

    set setMarks(newMark) {
        if (this.dismiss) {
            return null;
        } else {
            this.marks = [...this.marks, newMark]
            return this.marks;
        }
    }

    getAverageMark() {
        if(this.dismiss) {
           return null;
        } else {
            return this.marks.reduce((sum, el) => sum += el, 0)/this.marks.length;
        }
    }

    getDismissed() {
        this.dismiss = true;
    }
  
    getRecovered() {
        this.dismiss = false;
    }
}

const ostap = new Student("Вищої Школи Психотерапії м.Одеса", "1",  "Остап Бендер");

console.log (`Перший студент - ${ostap.getInfo()}`);
console.log(`Оцінки студента - ${ostap.getMarks}`);
ostap.setMarks = 5;
console.log(`Поставлена оцінка - 5, усі оцінки - ${ostap.getMarks}`); 
console.log(`Середній бал студента - ${ostap.getAverageMark()}`);
ostap.getDismissed();
console.log(`Студент відрахований: ${ostap.getMarks}`);  
ostap.getRecovered();  
console.log(`Студент поновлений:  ${ostap.getMarks}`);  
  

class BudgetStudent extends Student {
    constructor(university, course, fullName, marks, status) {
        super (university, course, fullName, marks, status);
        setInterval(this.getScholarship, 30000);
} 

getScholarship = () => {
    if (this.dismissed = false || this.getAverageMark() >= 4) {
        console.log(`Студент ${this.fullName} отримала 1400 грн. стипендії`);
    }
    else if (this.dismissed = true || this.getAverageMark() < 4) {
        console.log(`Студент ${this.fullName} не отримує стипендію`); 
    }
}
}

const tania = new BudgetStudent("Університет ім. І.Франка м.Львів", "5",  "Лесівців Тетяна", [5, 4, 4, 5], "student");

console.log (`Другий студент - ${tania.getInfo()}`);





