// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

// Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

function sym(a,b,...rest) {
  const diff1 = a.reduce((acc,x) => {
    if(!b.includes(x)) acc.push(x);
    return acc
  },[])

  const diff2 = b.reduce((acc,x) => {
    if(!a.includes(x)) acc.push(x);
    return acc
  },[])

  let uniqueDiff = new Set(diff1.concat(diff2))
  uniqueDiff = Array.from(uniqueDiff).sort()

  if(rest.length === 0) return uniqueDiff
  else {
    let leftover=rest.slice(1)
    return sym(uniqueDiff, rest[0], ...leftover)
  }

}

console.log(sym([1, 2, 3], [5, 2, 1, 4], [3, 4, 5]))