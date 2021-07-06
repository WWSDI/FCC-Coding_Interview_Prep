// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

// updateInventory(
// [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
// [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
// should return:
// [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]

function updateInventory(arr1, arr2) {
  arr2.forEach(([qty2, item2]) => {
    let found = false;
    // Go thru arr1 to see if item2 exists in arr1, if so update qty; else push item2 into arr1
    arr1.forEach(([qty1, item1],i,arr) => {
      if (item1 === item2) {
        arr[i][0] += qty2;
        found = true;
      }
    });
    if (!found) arr1.push([qty2, item2]);
  });

  //sort alphabetically
  arr1.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    if (a[1] < b[1]) return -1;
    return 0;
  });

  // console.log("🌸",arr1);
  return arr1;
}

module.exports = updateInventory
