
// @ts-ignore
const ades = [18, 20, 22, 2, 100, 24, 28];

const predicate = (age: number) => {
    return age > 90;
}

const aldAges = []

type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 210},
    {title: "React", price: 150}
]

const chipPredicate = (course: CourseType) => {
    return course.price < 160;
}

const chipCourses = [
    {title: "CSS", price: 110},
    {title: "React", price: 150}
]