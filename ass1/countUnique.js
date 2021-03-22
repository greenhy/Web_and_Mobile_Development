function countUnique(arr) {
  
    const arr2unique = new Set(arr);
    const unique = [...arr2unique];

    if (unique.length!=0){
        return unique.length;
    }else{
        return 0;
    }
        
}

console.log(countUnique(['a','b','b','d','b','a','e']));