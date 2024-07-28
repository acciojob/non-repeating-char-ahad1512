function firstNonRepeatedChar(str) {
 // Write your code here
	let ct =1;
	for (let i = 0; i < str.length; i++) {
		let ch = str.charAt(i);
		if(ch === str.charAt(i+1)){
			ct++;
		}
		else{
			if(ct===1){
				return ch;
			}
			ch = str.charAt(i+1);
			ct=1;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
