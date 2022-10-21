1. Line 12 will print 3 <br> The variable i is declared using the var keyword so it can be accessed anywhere inside the discountPrices function regardless of the block it is defined in. Since the prices array has length 3, i = 3 when the loop is exited and lime 12 prints 3.
   
2. Line 13 will print 150 <br> The variable discountedPrice is declared using the var keyword so it can be accessed anywhere inside the discountPrices function regardless of the block it is defined in. During the final iteration of the for loop,   i = 2, discountedPrice = prices[2] * (1 - 0.5) = 300 * 0.5 = 150   and nothing is reassigned to discountedPrice after exiting the loop. So, line 13 will print 150.
   
3. Line 14 will print 150 <br> The variable finalPrice is declared using the var keyword so it can be accessed anywhere inside the discountPrices function regardless of the block it is defined in. During the final iteration of the for loop,   i = 2, discountedPrice = prices[2] * (1 - 0.5) = 300 * 0.5 = 150, finalPrice = Math.round(150 * 100) / 100 = 150   and nothing is reassigned to finalPrice after exiting the loop. So, line 14 will print 150.
   
4. This function will return the discounted array containing elements [50, 100, 150] but nothing will be printed on the console <br> The for loop iterates 3 times:   When i = 0, discountedPrice = prices[0] * (1 - 0.5) = 100 * 0.5 = 50,   finalPrice = Math.round(50 * 100) / 100 = 50   which is pushed into the discounted array.   When i = 1, discountedPrice = prices[1] * (1 - 0.5) = 200 * 0.5 = 100,   finalPrice = Math.round(100 * 100) / 100 = 100   which is pushed into the discounted array.   When i = 2, discountedPrice = prices[2] * (1 - 0.5) = 300 * 0.5 = 150,   finalPrice = Math.round(150 * 100) / 100 = 150   which is pushed into the discounted array.   Then, the function returns the discounted array.
   
5. Line 12 would result in an error <br> Since the variable i is declared with the let keyword inside the for block, it can only be accessed within that block. Accessing i on line 12 from outside the for block would result in the code returning an error.
   
6. Line 13 would result in an error <br> Since the variable discountedPrice is declared with the let keyword inside the for block, it can only be accessed within that block. Accessing discountedPrice on line 13 from outside the for block would result in the code returning an error.
   
7. Line 14 will print 150 <br> The variable finalPrice is declared using the let keyword inside the discountPrices function block so it can only be accessed anywhere inside that function, including line 14 which is inside that function. During the final iteration of the for loop,   i = 2, discountedPrice = prices[2] * (1 - 0.5) = 300 * 0.5 = 150, finalPrice = Math.round(150 * 100) / 100 = 150   and nothing is reassigned to finalPrice after exiting the loop. So, line 14 will print 150.
   
8. This function will return the discounted array containing elements [50, 100, 150] but nothing will be printed on the console <br> The for loop iterates 3 times:   When i = 0, discountedPrice = prices[0] * (1 - 0.5) = 100 * 0.5 = 50,   finalPrice = Math.round(50 * 100) / 100 = 50   which is pushed into the discounted array.   When i = 1, discountedPrice = prices[1] * (1 - 0.5) = 200 * 0.5 = 100,   finalPrice = Math.round(100 * 100) / 100 = 100   which is pushed into the discounted array.   When i = 2, discountedPrice = prices[2] * (1 - 0.5) = 300 * 0.5 = 150,   finalPrice = Math.round(150 * 100) / 100 = 150   which is pushed into the discounted array.   Then, the function returns the discounted array. There would be no errors resulting from code in this function because none of the code accesses any variables beyond its scope.
   
9.  Line 11 would result in an error <br> Since the variable i is declared with the let keyword inside the for block, it can only be accessed within that block. Accessing i on line 11 from outside the for block would result in the code returning an error.
    
10. Line 12 will print 3 <br> The variable length is declared using the const keyword inside the discountPrices function block so it can only be accessed anywhere inside that function, including line 12 which is inside that function. During its declaration, length is assigned with the length of the prices array which is 3 and there is no attempt to reassign length anywhere before line 12, so line 12 will print 3.
    
11. This function will return the discounted array containing elements [50, 100, 150] but nothing will be printed on the console <br> The discounted variable is declared as an empty array with the const keyword so it can be accessed only within the function and cannot be reassigned another value. Similarly, the length variable is declared with the const keyword and assigned with the value of the length of the prices array which is 3, so it can be accessed only within the function and cannot be reassigned another value. The for loop iterates 3 times:   When i = 0, discountedPrice = prices[0] * (1 - 0.5) = 100 * 0.5 = 50   which is pushed into the discounted array. This does not result in an error because the value of the array assigned to the discounted variable is modified but a new array is not reassigned to the discounted variable.   When i = 1, discountedPrice = prices[1] * (1 - 0.5) = 200 * 0.5 = 100,    which is pushed into the discounted array.   When i = 2, discountedPrice = prices[2] * (1 - 0.5) = 300 * 0.5 = 150,   which is pushed into the discounted array.   Then, the function returns the discounted array. There would be no errors resulting from code in this function because none of the code accesses any variables beyond its scope.
    
12. A. `student.name` <br> 
    B. `student['Grad Year']` <br> 
    C. `student.greeting();` <br> 
    D. `student['Favorite Teacher'].name` <br> 
    E. `student.courseLoad[0]` <br> 

13. A. '3' + 2 = '32' since 2 maps to '2' <br> 
    B. '3' - 2 = 1 since '3' maps to 3 <br> 
    C. 3 + null = 3 since null maps to 0 <br> 
    D. '3' + null = '3null' since null maps to 'null' <br> 
    E. true + 3 = 4  since true maps to 1 <br> 
    F. false + null = 0 since false and null both map to 0 <br> 
    G. '3' + undefined = '3undefined' since undefined maps to 'undefined' <br> 
    H. '3' - undefined = NaN since undefined maps to NaN

14. A. '2' > 1 = true since '2' maps to 2 <br> 
    B. '2' < '12' = false since '2' > '1' (i.e. '2' is lexicographically greater than '12') <br> 
    C. 2 == '2' = true since '2' maps to 2 <br> 
    D. 2 === '2' = false since 2 and '2' have different data types <br> 
    E. true == 2 = false since true maps to 1 <br> 
    F. true === Boolean(2) = true since Boolean(2) = true so true and Boolean(2) both have the same data type and value

15. The == operator checks the equality of 2 values with automatic type conversion while the === operator checks the equality without type conversion.
    
16. See part2-question16.js
    
17. The result will be [2,4,6] <br> Calling modifyArray([1,2,3], doSomething) will pass array [1,2,3] to array and the callback function doSomething to callback. In the first for loop iteration, i = 0, callback(array[0]) = doSomething(1) = 1 * 2 = 2 is pushed into newArr. In the second for loop iteration, i = 1, callback(array[1]) = doSomething(2) = 2 * 2 = 4 is pushed into newArr. In the third for loop iteration, i = 2, callback(array[2]) = doSomething(3) = 3 * 2 = 6 is pushed into newArr. Then, since the length of array is 3, the loop is exited and newArr = [2,4,6] is returned.
    
18. -
    
19. 1 <br>  <br> 3 <br> 2 <br>