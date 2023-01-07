import {StudentType} from "../object/02";
import exp from "constants";
import {addSkill, makeStudentActive} from "./03";


let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Dimych",
        age: 32,
        isActive: false,
        address: {
            streetTitle: "Surganova 2",
            city: {
                tittle: "Minsk",
                countryTitleL: "Belarus",
            }
        },
        technologies: [
            {id: 1, title: "HTML"},
            {id: 2, title: "js"},
            {id: 3, title: "React"},
        ]
    }
})

test("new teach skill should be added to student", () => {
    expect(student.technologies.length).toBe(3);
    addSkill(student, "JS")

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined() // проверяет сушествует ли id
})


test("student should be made active", () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student)

    expect(student.isActive).toBe(true);
})