class Student {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.courses = [];
    }
}

Student.prototype.name = function() {
    return this.first.concat(" ", this.last);
}

Student.prototype.enroll = function(course) {
    if (course instanceof Course === false) {
        console.log("That's not a valid course dingus");
    } else {
        this.courses.push(course);
    }
}

Student.prototype.courseLoad = function() {

    load = {};
    this.courses.forEach(function(el) {
            if (load[el.dept] === undefined) {
                load[el.dept] = 0;
            }

            y[el.dept] += el.credit;
        }
    )

    return load;
}

class Course {
    constructor(name, dept, credit) {
        this.name = name;
        this.dept = dept;
        this.credit = credit;
        this.students = [];
    }
}

Course.prototype.addStudent = function(st) {

    st.enroll(this);
    this.students.push(st);

}


var stud = new Student("Garrett", "Julaka")
let cal = new Course("Calc1", "Math", 1)
let cal2 = new Course("Calc2", "Math", 2)
let eng = new Course("Eng1", "Lit", 1)
let his = new Course("History1", "History", 1)

cal.enrollStudent(s)
cal2.enrollStudent(s)
eng.enrollStudent(s)
his.enrollStudent(s)