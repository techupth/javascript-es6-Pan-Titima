let height = undefined;

function nullCoalescing(height){
   return height ?? 'Height is not defined';
}

let result = nullCoalescing(height);
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”


