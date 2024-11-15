function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let i=s1.toLowerCase();
	let j=s2.toLowerCase();

	return i.indexOf(j);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
