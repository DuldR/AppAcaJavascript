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

Student.prototype.hasConflict = function(course) {

    check = false;
    this.courses.forEach(function(el) {
            if (el.conflictsWith(course)) {
                check = true;
            }
        }
    )

    return check;
}

Student.prototype.courseLoad = function() {

    load = {};
    this.courses.forEach(function(el) {
            if (load[el.dept] === undefined) {
                load[el.dept] = 0;
            }

            load[el.dept] += el.credit;
        }
    )

    return load;
}

class Course {
    constructor(name, dept, credit, days, block) {
        this.name = name;
        this.dept = dept;
        this.credit = credit;
        this.day = days
        this.block = block
        this.students = [];
    }
}

Course.prototype.addStudent = function(st) {

    st.enroll(this);
    this.students.push(st);

}

Course.prototype.conflictsWith = function(course) {
    if (JSON.stringify(course.day) === JSON.stringify(this.day) && JSON.stringify(course.block) === JSON.stringify(this.block)) {
        return true;
    }

    return false;
}

var stud = new Student("Garrett", "Julaka")
let cal = new Course("Calc1", "Math", 1, ['wed', 'fri'], 1)
let cool = new Course("Cool", "No", 1, ['wed', 'fri'], 1)
let coo1l = new Course("Cool", "No", 1, ['wed', 'fri'], 2)
let cal2 = new Course("Calc2", "Math", 2)
let eng = new Course("Eng1", "Lit", 1)
let his = new Course("History1", "History", 1)

cal.addStudent(stud)
cal2.addStudent(stud)
eng.addStudent(stud)
his.addStudent(stud)