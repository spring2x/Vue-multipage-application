export default function logoArr(arr){
   var arrLength = arr.length;
   var arr2 = [];
  //  console.log(arrLength);
   for(var i=7;i>0;i--){
      arr2.push(arr[arrLength-i]);
   }
   for(var j=0;j<arrLength;j++){
      arr2.push(arr[j]);
   }
   for(var k=0;k<7;k++){
      arr2.push(arr[k]);
   }
   return arr2;
}