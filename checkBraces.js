function checkBraces(inputStr) {
	const braces = [ ['<','>'] , ['{','}'] , ['[',']'] , ['(',')'] ];
	const strToCheck = inputStr.split('');
	const stack = [];

	// Check if opening brace

	const isOpeningBrace = (char) => {
	  
	  for (const brace of braces) {

	    if (brace[0] === char) {
	      return true;
	    }

	  }
	  
	  return false;
	}

	// Check if opening brace matches closing brace

	const matches = (opening, closing) => {

	  for (const brace of braces) {

	    if (brace[0] === opening && brace[1] === closing) {

	      return true;
	    }

	  }

	  return false;
	}

	// Check if char is brace

	const isParanthesis = (char) => {
	  
	  for (const brace of braces) {

	    if (brace[0] === char || brace[1] === char) {

	      return true;
	    }

	  }
	  
	  return false;
	}

	for (let char of strToCheck) {
		if (isParanthesis(char)) {

		  if (isOpeningBrace(char)) {
		    stack.push(char);
		  } else {

		    if (stack.length === 0) {
		      return false;
		    }

		    if (!matches(stack.pop(), char)) {
		      return false;
		    }
		  }
		}
	}

	return stack.length === 0 ? true : false;
}