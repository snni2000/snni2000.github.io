var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://github.com/snni2000/snni2000.github.io/blob/main/week%204/cities1.json');
ourRequest.onload = function() {
console.log(ourRequest.responseText);
};
ourRequest.send();