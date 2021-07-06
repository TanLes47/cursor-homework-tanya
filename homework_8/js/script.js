class Students {
    constructor(university, course, fullName, marks, status ){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.status = status;   
        }
    getInfo = function(){
            if(this.status === "expelled"){
                return `Студент ${this.course}го курсу ${this.university}, ${this.fullName} - ВІДРАХОВАН`
            }
            else if(this.status === "recover"){
                return `Студент ${this.course}го курсу ${this.university}, ${this.fullName} - ПОНОВЛЕН`
            }
            else{
            return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`
          };
        };   
    getAverageMark = function(){
        if(this.status === "expelled"){
            return null;
        }
        else if(this.status === "recover" || this.status === "student"){
            return (this.marks.reduce((sum, el) => sum += el, 0)/this.marks.length);
         }
        }
    dismiss = function(){
        this.status = "expelled";
        return this.getInfo();
        }
    recover = function(){
        this.status = "recover";
        return this.getInfo();
        }  
    get getMarks(){
            if (this.status === "expelled") {
            return null;
            }
            else if(this.status === "recover" || this.status === "student"){return this.marks};
        }
    set (markInput){
        if(this.status === "expelled"){
            return null;
        }
        else if(this.status === "recover" || this.status === "student"){
            return this.getMarks.push(markInput);
        };
        };
        
};

class BudgetStudent extends Students{
    constructor(university, course, fullName, marks, status){
       super (university, course, fullName, marks, status);
       setInterval(this.getScholarship, 30000);

} 
getScholarship = () => {
    if (this.status === "student" && (this.getAverageMark() >= 4)){
        console.log(`Студент ${this.fullName} отримала 1400 грн. стипендії`);
    }
    else if (this.status === "expelled" || this.getAverageMark() < 4){
        console.log(`Студент ${this.fullName} не отримує стипендію`); 
    }
}
};


const ostap = new Students("Вищої Школи Психотерапії м.Одеса", "1",  "Остап Бендер", [5, 4, 4, 5], "student");

console.log (`Перший студент - ${ostap.getInfo()}`);
console.log(`Оцінки студента - ${ostap.getMarks}`);
ostap.set(5);
console.log(`Поставлена оцінка - 5, усі оцінки - ${ostap.getMarks}`);  
console.log(`Середній бал студента - ${ostap.getAverageMark()}`); 
console.log(ostap.dismiss()); 
console.log(`Оцінки студента - ${ostap.getMarks}`);  
console.log(`Середній бал студента - ${ostap.getAverageMark()}`); 
console.log(ostap.set(5))  
console.log(ostap.recover());  
console.log(`Оцінки студента - ${ostap.getMarks}`);  
console.log(`Середній бал студента - ${ostap.getAverageMark()}`);  


const tania = new BudgetStudent("Університет ім. І.Франка м.Львів", "5",  "Лесівців Тетяна", [5, 4, 4, 5], "student");

console.log (`Другий студент - ${tania.getInfo()}`);