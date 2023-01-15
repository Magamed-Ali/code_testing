import {ages, courses, CourseType} from "./04";

test("should take old men older then 90", () => {

    const predicate = (age: number) => {
        return age > 90;
    }

    const oldAges = ages.filter(predicate);


    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test("should take courses chipper 160", () => {

    const predicate = (age: CourseType) => {
        return age.price < 160;
    }

    const oldAges = courses.filter(predicate);


    expect(oldAges.length).toBe(2)
    expect(oldAges[0].title).toBe("CSS")
    expect(oldAges[1].title).toBe("React")
})

test("get only complited tasks", ()=> {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Solt", isDone: false},
        {id: 4, title: "Sugar", isDone: true},
    ]

    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(2);
    expect(completedTasks[1].id).toBe(4)
})