function oldBooks(input){

let favoriteBook = input[0];
let index = 1;
let bookIsFound = false;
let nexBookName = input[index];

while (nexBookName !== "No More Books"){

    if (nexBookName === favoriteBook){
        bookIsFound = true ; break;
    }
    index++;
    nexBookName = input[index];
}

if ( bookIsFound === false ){

console.log("The book you search is not here!");
console.log(`You checked ${index - 1} books.`);
} else {
    console.log(`You checked ${index - 1} books and found it`);
}



}



oldBooks (["Troy","Stronger","Life Style","Troy"])
oldBooks (["The Spot","Hunger Games","Harry Potter","Torronto","Spotify","No More Books"])
oldBooks (["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])
