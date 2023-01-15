

export const ages: Array<number> = [18, 20, 22, 2, 100, 24, 28];

const predicate = (age: number) => {
    return age > 90;
}

const aldAges = []

export type CourseType = {
    title: string
    price: number
}

export const courses = [
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