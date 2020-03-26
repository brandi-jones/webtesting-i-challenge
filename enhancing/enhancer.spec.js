const enhancer = require('./enhancer.js');

const object = {
    name: "test",
    durability: 50,
    enhancement: 15
}


// test away!

it("should run the tests", function() {
    expect(true).toBe(true);
});

//repair
it("should return updated durability of item", function() {

    const newObject = enhancer.repair(object);

    expect(newObject.durability).toBe(100);
})

//success
describe("success function tests", function() {

    it("success on enhancement >= 20, enhancement unchanged", function() {
        object.enhancement = 20;

        const newObject = enhancer.succeed(object);
        
        expect(newObject.enhancement).toBe(object.enhancement);
    })

    it("success on enhancement < 20, enhancement+1", function() {
        object.enhancement = 15;

        const newObject = enhancer.succeed(object);

        expect(newObject.enhancement).toBe(16);
    })
})


//fail
describe("fail function tests", function() {

    it("fail on enhancement < 15", function() {
        object.enhancement = 14;

        const newObject = enhancer.fail(object);

        expect(newObject.durability).toBe(45);
    })

    it("fail on enhancement >= 15", function() {
        object.enhancement = 15;
        object.durability = 50;

        const newObject = enhancer.fail(object);

        expect(newObject.durability).toBe(40)
    })

    it("fail on enhancement < 16", function () {
        object.enhancement = 17;
        object.durability = 50;

        const newObject = enhancer.fail(object);

        expect(newObject.enhancement).toBe(16);
        expect(newObject.durability).toBe(40);
    })

})


describe("get function tests", function() {

    it("item enhancement at 0", function() {
        object.enhancement = 0;

        const newObject = enhancer.get(object);

        expect(newObject.name).toBe("test");
    })

    it("item enhancement > 0", function() {
        object.enhancement = 15;
        
        const newObject = enhancer.get(object);

        expect(newObject.name).toBe("[+15] test")
    })
})
