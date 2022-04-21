console.log("Working");
//Question1
  /*function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter())


//Ques2

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // o/p- 1;
  }
  console.log(count); // o/p- 0;
})();*/

//Ques3

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i);//  o/p -3 ;
    }, 1000); 
  };

  //Ques4;

  function areaRectangle(width, length)
  {
      let area = width * length;
      return area;
  }

  
  let width= 8;
  let length = 6;
  alert (console.log(areaRectangle(width, length)));


  //Ques8


var a = 12;
(function () {
  alert(a);
})();12



//Question 9

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();


//Question10;
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);

//Question7;

let counter = 100;
function Increment()
    {
       function inner() 
        {
             counter += counter;
             return counter;
        }
    return inner();
    }
    var x = Increment();
    var y = Increment();
    console.log(x);
    console.log(y);



    function Counter() {
    
        var k = 0;
    
        setTimeout( function () {
            var innerCounter = 0;
            k += 1;
            alert("k = " + counter);
    
            setTimeout( function () {
                k += 30;
                innerCounter += 20;
                alert("k = " + k + "innerCounter = " + innerCounter)
            }, 500);
    
        }, 1000);
    };
    
    Counter();