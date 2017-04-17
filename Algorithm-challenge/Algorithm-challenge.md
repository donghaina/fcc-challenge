Reverse a String Incomplete   *
Factorialize a Number Incomplete   *
Check for Palindromes Incomplete   *
Find the Longest Word in a String Incomplete   *
Title Case a Sentence Incomplete   *
Return Largest Numbers in Arrays Incomplete   *
Confirm the Ending Incomplete   *
Repeat a string repeat a string Incomplete   *
Truncate a string Incomplete   *
Chunky Monkey Incomplete   *
Slasher Flick Incomplete   *
Mutations Incomplete   *
Falsy Bouncer Incomplete   *
Seek and Destroy Incomplete   *
Where do I belong Incomplete   *
Caesars Cipher Incomplete   *
Sum All Numbers in a Range Incomplete   *
Diff Two Arrays Incomplete   *
Roman Numeral Converter Incomplete   *
Wherefore art thou Incomplete   *
Search and Replace Incomplete   *
Pig Latin Incomplete   *
DNA Pairing Incomplete   *
Missing letters Incomplete   *
Boo who Incomplete   *
Sorted Union Incomplete   *
Convert HTML Entities Incomplete   *
Spinal Tap Case Incomplete   *
Sum All Odd Fibonacci Numbers Incomplete   *
Sum All Primes Incomplete   *
Smallest Common Multiple Incomplete   *
Finders Keepers Incomplete   *
Drop it Incomplete   *
Steamroller Incomplete   *
Binary Agents Incomplete   *
Everything Be True Incomplete   *
Arguments Optional Incomplete   *
Validate US Telephone Numbers Incomplete
Record Collection Incomplete
Symmetric Difference Incomplete
Exact Change Incomplete
Inventory Update Incomplete
No repeats please Incomplete
Make a Person Incomplete
Map the Debris Incomplete
Pairwise Incomplete

```
function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  // Same, same; but different.
  newArr.sort();
  for (var i = 0; i < newArr.length; i++) {
    if (newArr[i]===newArr[i+1]) {
        delete newArr[i];
        delete newArr[i+1];
    }
  }
  return newArr.filter(Boolean);
}
```
```
function sumAll(arr) {
  var min,max; 
  if (arr[0]>arr[1]) {
    max = arr[0];
    min = arr[1];
  }else{
    max = arr[1];
    min = arr[0];
  }
  var sum = 0;
  for (var i = min; i <= max ; i++) {
    sum+=i;    
}
    return sum;
}
```