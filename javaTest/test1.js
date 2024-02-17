

// Q 3 
array =[1,2,3,4,5]
target = 15

function FindTargetValue(array,target){
    for(var i =0 ; i <array.lenght ; i ++){
       for(var j =i+1 ; i< array.length; j++){
         if(array[i] + array[j] == target){
            console.log(array[i], array[j])
        }
         }
       }
    }
    FindTargetValue(array,target)


// //Q 4 palindrome
array="abba"
function isPalindromeString(string){
    for(var i =0; i< Math.floor(string.length/2); i++){
        for(var j=1+i ; string.length ; j++){
          if( string[i] !== string[string.length-1-i] ){
        
          }return("not a palindrom")
        }
    }
    return("it is a palindrom")
}
console.log(isPalindromeString(array))

//Q5
   for ( i= 1 ; i >10 ; i--){
         
   }
    console.log(i)

// //Q 7

    function fact(value){
     const ans = 1
        for(var i=value ; i>=1 ; i --){
           ans*= i
          
           
        }
        return ans
    }
    var result= fact(5)
   console.log(result)


//    //Q 2
  myNum = 121
   function findPalindromeNum(number){
       for(var i = 0; i < Math.floor(number.length/2 ); i++) {
         for( var j=i+1 ; array.length ; j++){
            if( number[i] !== number[number.lenght -1-i]){
           return("it is not palindrome number")
            }
         }
       }return ("it is a palindrome number")
   }

    console.log(isPalindromeString(myNum))



//Q 6 
array= [1,2,2,3,4,5,6,6,7,8,8]
var myAnswer={}

function findDuplicates(){
    for(var i=0 ; i < array.length ; i++){
      if(myAnswer[array[i]] === undefined){
      myAnswer[array[i]] = 1
      console.log(array[i])
      }  

      }

    }

