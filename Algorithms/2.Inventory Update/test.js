const updateInventory = require("./index");

test('updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return an array of length 6', () => {
  expect(
    updateInventory(
      [
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"],
      ],
      [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"],
      ],
    ).length,
  ).toBe(6);
});

test('updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]', () => {
  let arr1 = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
  ];
  let arr2 = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"],
  ];
  let result = [
    [88, "Bowling Ball"],
    [2, "Dirty Sock"],
    [3, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [5, "Microphone"],
    [7, "Toothpaste"],
  ];
  expect(updateInventory(arr1, arr2)).toEqual(result);
});

// test('updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]', () => {
//   // let ;
//   // let arr2 = ;
//   // let result = ;
//   expect(updateInventory(arr1 = [
//     [21, "Bowling Ball"],
//     [2, "Dirty Sock"],
//     [1, "Hair Pin"],
//     [5, "Microphone"],
//   ], [
//     [2, "Hair Pin"],
//     [3, "Half-Eaten Apple"],
//     [67, "Bowling Ball"],
//     [7, "Toothpaste"],
//   ])).toEqual([
//     [88, "Bowling Ball"],
//     [2, "Dirty Sock"],
//     [3, "Hair Pin"],
//     [3, "Half-Eaten Apple"],
//     [5, "Microphone"],
//     [7, "Toothpaste"],
//   ]);
// });