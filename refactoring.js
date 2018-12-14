function func(s, a, b) {
 
    if (s === '') {
        return -1;
    }
    
    let i = s.length - 1;
    let aIndex = -1;
    let bIndex = -1;
    
    while (aIndex * bIndex >= 0 && i >= 0) {
    
    	const currentChar = s.substring(i, i +1);
      
		aIndex = currentChar == a ? i : aIndex;
		bIndex = currentChar == b ? i : bIndex;

		i--;
    }
    
    return Math.max(aIndex, bIndex);
}