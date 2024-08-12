function countVowels(s) {
    const vowels = "aeiouAEIOU";  
    const temp = new Set();

    for (let char of s) {  
        if (vowels.includes(char)) {  
            temp.add(char.toLowerCase()); 
        }
    }

    return temp.size;  
}

const string = "Hello World";
console.log("The number of unique vowels in the string is:", countVowels(string));
