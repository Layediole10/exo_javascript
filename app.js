// exo JS : https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php

// ---------------------Exo8---------------------------------

// function nombrePremier(nmbre) {

//     if(nmbre < 2){
//         return false;
        
//     } else if(nmbre === 2){
            
//         return true;
//     } else {

//         for(let i = 2; i < nmbre; i++){
        
//             if(nmbre % i === 0){
//                 return false;
                
//             } 
            
//          }
//          return true;  
//     }
    
           
// }

// console.log(nombrePremier(21));

// ----------------------Exo7-------------------------------

// function numberOfVowels(str){

//     let count = 0;
//     // let str = str.split(' ');
    


//     for (let i = 0; i < str.length; i++) {
        
//         if(str[i] === 'a' ||
//             str[i] === 'i' ||
//             str[i] === 'o' ||
//             str[i] === 'e' ||
//             str[i] === 'u' ||
            
//             str[i] === 'A' ||
//             str[i] === 'I' ||
//             str[i] === 'O' ||
//             str[i] === 'E' ||
//             str[i] === 'U'  
//         ){
//             count++;
//         }
        
//     }
//     return count;
    
// }
// console.log(numberOfVowels("I am going to schoolaaabbbiiiggggeu"));

// ------------------------Exo6-----------------------------

// function longestWord(sentence){

//     let array = sentence.split(" ");
//     let word = array[0];
    

//     for (let i = 0; i < array.length; i++) {

            
//         if (word.length < array[i].length) {
//            word = array[i]
//         }
         
//     }
//     return word;
// }
// console.log(longestWord("I am going to schoolaaabbbiiiggggeu"));

// -----------------------Exo5------------------------------

// function firstLetter(str){

//     let str1 = str.toLowerCase();
//     let array = str1.split(" ");
//     let array1 = [];
    
//     array.forEach(element => {
//         let first = element.charAt(0).toUpperCase();
//         // console.log(first);
//         let remplace = element.replace(element.charAt(0), first);

//         array1.push(remplace);
        
//     });


//     return array1.join(" ");

// }
// console.log(firstLetter("i aM goIng To schOoL"));

// ------------------------Exo4-------------------------------

// function alphabeticalOrder(str){

    
//     let lowerStr = str.toLowerCase();
//     let arr = lowerStr.split('').sort();
     
//     return arr.join('');
    
    
// }
// console.log(alphabeticalOrder("abdoulayeMarieRokhaya"));

// --------------------Exo1--------------------------------

// function reverseNumber(nomber){

//     let nbr = nomber + '';
//     let arr= [];
//     for (let i = nbr.length; i >= 0; i--) {
//        arr.push(nbr[i]);
        
//     }
//     return arr.join('');
// }
// console.log(reverseNumber(123456));

// -------------------Exo1Bis-------------------------------

// function reverseNumber(nomber){

//     let nbr = nomber + '';
//     return nbr.split('').reverse('').join('');
    
// }
// console.log(reverseNumber(1234567))

// -------------------Exo2--------------------------------

// function palindrome(str){

//     let str1 = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
//     let lengthStr1 = str1.length;
    
//     if (str1 === '') {

//        return "Enter a character string"
        
//     } else

//     if (lengthStr1 === 1) {
        
//         return "is a palindrome"

//     }
    
//     if(lengthStr1 > 1){

//         for (let i = 0; i < str1.length; i++) {
         
//             if (str1[i] != str1.slice(-1-i)[0]) {
                
//                 return "is not a palindrome";
//             }
                        
                    
//         }
        
//                 return "is a palindrome";
//     }

  

// }
// console.log(palindrome(''));

// -------------------Exo3----------------------------

// function generateCombination(str){

//     let arr = [];
//     let arr1 = str.split('');
    

//     for (let i = 0, j = 1; i < arr1.length; i++, j++) {
        
        
//             arr = arr1.slice(i, j);
        
//         }
        
        
    
//     return arr;
// }
// console.log(generateCombination('ours'));

// class Person {

//     #prenom;
//     #nom;
//     #sexe;
//     constructor(nom, prenom){

//         this.#nom = nom; 
//         this.#prenom = prenom;
//     }
//      setNom(nom){
//          this.#nom = nom;
//      }
//      getNom(){
//          return this.#nom;
//      }

//      setPrenom(prenom){
//         this.#prenom = prenom;
//     }
//     getPrenom(){
//         return this.#prenom;
//     }

//     setSexe(sexe){
//         this.#sexe = sexe;
//     }

//     getSexe(){
//         return this.#sexe;
//     }
// }

// let p1 = new Person('diole', 'abdoulaye');
// p1.setPrenom('Laye');
// p1.setSexe('H');

// console.log(p1.getPrenom(), p1.getSexe());

// --------------------CLASS-TODOLIST---------------------

// class Task {

//     constructor(name, description){

//         this.name = name;
//         this.description = description;
//     }

//     toString(){
//         return "Name: " + this.name +"<br/>" +" Description: " + this.description;
//     }
// }


// let inputName = document.querySelector('#name');
// let taskList = document.querySelector('#list');
// let description = document.querySelector('#descript');
// let btn = document.querySelector('#bouton');



// function show() {
    
//     let task = new Task(inputName.value, description.value);

//     addElement(task);
    

// } 

// function addElement(task){

//      let ul = document.createElement("ul");
//      let li = document.createElement("li");

//      taskList.appendChild(ul);
//      ul.appendChild(li);
//      li.textContent = task.toString();

// }

// btn.addEventListener("click", show);


// -------------------ARRAY-TODOLIST----------------------



let inputName = document.getElementById('name');
let taskList = document.getElementById('list');
let description = document.getElementById('descript');
let btn = document.getElementById('bouton');

// let table = document.getElementById('table');
 

// function show(){

//     return "Name: " + inputName.value +"<br/>" +" Description: " + description.value;
// }

// function addElement(){

//     //append data to the array

     
//     myArray.push(show());

//     let valText = "";
//     for (let i = 0; i < myArray.length; i++) {

//         valText = valText + myArray[i] +"<br/>";
        
//     }

//     taskList.innerHTML = valText;
// }

// btn.addEventListener("click", addElement);

// -----------------todoListe-Table------------------------

// function addRowTable(){

    
//     let table = document.getElementsByTagName("table")[0];
    
//     //insert row in table
//     let newRow = table.insertRow(-1);

//     //insert  cellule
//     let Cel1 = newRow.insertCell(0);
//     let Cel2 = newRow.insertCell(1);

//     Cel1.textContent = inputName.value;
//     Cel2.textContent = description.value;
// }



// btn.addEventListener("click", addRowTable);

// --------------------localStorage----------------

class Todo {

    constructor(name, description){

        this.name = name;
        this.description = description;
    }
}
  

let myArray = [];

if (localStorage.getItem("myArray") != null) {
    
    myArray = JSON.parse(localStorage.getItem("myArray"));
}

function afficher(){

    let todos = new Todo(inputName.value, description.value);

    myArray.push(todos);
    localStorage.setItem("myArray", JSON.stringify(myArray));

    ajouter(todos);
}

function recuperer() {
    
    for(let item of myArray){
        ajouter(item);
    }
}
recuperer();

function ajouter(todos) {
    
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let p = document.createElement("p");

    taskList.appendChild(ul);
    ul.appendChild(li);
    li.textContent = todos.name;
    p.textContent = todos.description;
    li.appendChild(p);
}

btn.addEventListener("click", afficher);



