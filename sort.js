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
 
 var reNumber = [1, 3, 5, 4 , 2];
 
 sortNumber(number);
reSortNumber(reNumber);
 
 console.log(number);
 console.log(reNumber);