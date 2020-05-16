var sortNumber = function (number) {
    number.sort(function (a, b) {
        if (a === b) {
            return 0;
        }
        return a < b ? -1 : 1;
    });
 };

 var reSortNumber = function (number) {
     number.sort((a, b) => b - a);
 };
 
 var number = [19, 3, 81, 1, 24, 21];
 sortNumber(number);
 
 var number2 = [1,3,5,7,9,2,4,6,8,];
 sortNumber(number2);
 
 var reNumber = [1, 3, 5, 4 , 2];
 reSortNumber(reNumber);

 console.log(number);
 console.log(number2);
 console.log(reNumber);

