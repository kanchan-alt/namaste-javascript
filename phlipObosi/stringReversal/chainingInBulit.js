function reverseString(text){
    return text.split('').reverse().join('')
}

// console.log(reverseString("kanchan iam master"));

function reverseString1(text){
    return [...text].reverse().join('')
}

console.log(reverseString1("kanchan iam master"));