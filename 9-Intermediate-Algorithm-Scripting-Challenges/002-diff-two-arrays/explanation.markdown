<h1>Diff Two ArraysPassed</h1>
<h2>Problem explanation</h2>

<p>We have to compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.</p>
<p>We start with the function diffArrays with two parameters, arr1 and arr2.</p>
<p>In that function we can initialize a variable and assign it an empty array, let newArr = [].</p>
<p>We use the concat() method to merge arr1 and arr2 and assign the new array to the variable newArr, newArray = arr1.concat(arr2); the existing arrays are not changed.</p>
<p>We'll then return newArray filtered from the items that does not exist in arr1 nor in arr2.</p>
<p>The filter() method creates a new array with all the elements that pass the test implemented by a callback function.</p>
<p>In this particular case, we are interested in checking which items does not exist in both arr1 and arr2 and for that we use the includes() method that return true if the item exists and 
with the logical operator NOT (!) take truth to falsify and that item will be filtered out from newArr: newArr.filter(item => !arr1.includes(item) || !arr2.includes(item))</p>
