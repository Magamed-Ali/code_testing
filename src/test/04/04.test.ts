
// @ts-ignore
test("should take old men older then 90", () => {
    const ages = [18, 20, 22, 2, 100, 24, 28];

    const oldAges = ages.filter(item => item > 90);

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(1)
})