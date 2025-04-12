'use strict'

// true or false 

// task#1

// if('0'){
//     alert( 'Hello' );
// }
// כן יהיה אלרט כי מחרוזרת לא רקה



// task#2

// const name = prompt('Enter the full name of JS')
// const fullname = 'ECMAScript'
// if(fullname == name)
//     alert('!Correct')
// else
//     alert('!incorrect')



// task#3

// let score = 75;
// let grade = (score >= 90)? 'A' 
// : (score >= 80)? 'B' 
// : (score >= 70)? 'C'
// : (score >= 60)? 'D'
// : 'F';

// console.log("הציון הוא:", grade);



// task#4

// const number = prompt('Enter a number')
// if(isNaN(number))
//     alert('not a number')
// else if(Number(number>0))
//     alert('1')
// else if(Number(number<0))
//     alert('-1')
// else
//     alert('0')



// task#5

// const a = Number(prompt('First Number'))
// const b = Number(prompt('Second Number'))

// const result = (a + b < 4)? 'Not enough' : 'A lot';
// console.log(result);



// task#6

// let login = prompt('Enter Username:')
// let message = ((['Employee', 'Director']).indexOf(login) > -1 ? 'Hello' : !login.length ? 'No Login' : '')

// console.log(message)



// task#7

// console.log(false || 'sdf'); // sdf
// console.log(false && '');// false 
// console.log(true || '');// true 
// console.log(true && '');// 
// console.log(undefined || null);// null
// console.log(undefined || 0 || null);// null
// console.log(undefined && 0 && null);// undefined
// console.log(1 || 0);// 1
// console.log(null || 1);// 1 
// console.log(null || 0 || 1);// 1




// switch case

// task#1

// let input = prompt("הזן יום בשבוע (1-7, או שם היום בעברית/באנגלית):").toLowerCase().trim();

// let infoArray = [
// "יום ראשון - חזרה לשגרה",
// "יום שני - ישיבת צוות",
// "יום שלישי - עבודה על פרויקט",
// "יום רביעי - ספורט בערב",
// "יום חמישי - סיום משימות",
// "יום שישי - קניות לשבת",
// "שבת - מנוחה"
// ];

// let dayIndex;

// switch (input) {
//     case "1":
//     case "sunday":
//     case "יום ראשון":
//         dayIndex = 0;
//             break;
//     case "2":
//     case "monday":
//     case "יום שני":
//         dayIndex = 1;
//             break;
//     case "3":
//     case "tuesday":
//     case "יום שלישי":
//         dayIndex = 2;
//             break;
//     case "4":
//     case "wednesday":
//     case "יום רביעי":
//         dayIndex = 3;
//             break;
//     case "5":
//     case "thursday":
//     case "יום חמישי":
//         dayIndex = 4;
//             break;
//     case "6":
//     case "friday":
//     case "יום שישי":
//         dayIndex = 5;
//             break;
//     case "7":
//     case "saturday":
//     case "שבת":
//         dayIndex = 6;
//             break;
//     default:
//         alert("הקלט לא זוהה. נסה שוב עם מספר בין 1 ל־7 או שם של יום.");
//     dayIndex = -1;
// }

// if (dayIndex !== -1) {
//     alert(infoArray[dayIndex]);
// }




// loops

// task#1

// let n = 100;
// let i = 1;
// let sum = 0;
// while (i <= n){
//     sum+=i;
//     i++;
// }
// console.log(sum);



// task#2

// let number = 0;
// do{
//     let input = prompt("Enter Number:");
//     let number = Number(input);
// } while(isNaN(number) || number <= 0);

// console.log(number);



// task#3

// for (let i = 1; i <= 10; i++) {
//     console.log(`7 x ${i} = ${7 * i}`);
// }  



// task#4

// const secret = Math.floor(Math.random() * 10) + 1;

// for (let i = 1; i <= 10; i++) {
//     let guess = Number(prompt(`ניסיון ${i}: נחש מספר בין 1 ל-10`));

//     if (guess === secret) {
//         alert("נכון! 🎉");
//     break;
// } else {
//     alert("לא נכון, נסה שוב.");
// }

//     if (i === 10) {
//         alert("נגמרו הניסיונות. המספר היה: " + secret);
//     }
// }



// task#5

// let n = 30;
// let i = 1;
// for(i=1; i<=30; i++){
//     if(i % 3 == 0) continue;
// console.log(`${i}`);
// }



// task#6

// let i = 3;

// while (i) {
//     alert( i-- ); // ולא מדפיס אחרי זה false מדפיס ערך אחרון 1 כי כאשר הערך הופל ל-0 זה 
// } 



// task#7

// let i = 0;
// while (++i < 5) console.log( i ); 
                                        // לא הלולאה הראשונה מדפיסה עד 4 כי היא מעלה את הערך לפני הבדיקה כאשר הלולאה השניה מעלה לאחר הבדיקה את הערך ומדפיסה 5
// let i = 0;
// while (i++ < 5) console.log( i );



// task#8

// for(let i = 0; i < 5; ++i) console.log ( i );
// for(let i = 0; i < 5; i++) console.log ( i ); //  הלולאות האלו כן מדפיסות את אותם בערכים כי ההוספה היא בסוף הלולאהwhile להבדיל מהלולאה 



// task#9

// for(let i = 2; i <= 10; i++){
//     if(i % 2 == 0)
//         console.log( i );
// }



// task#10

// let i = 0;
// while(i < 3){
//     alert(`number ${i}!`) // הלולאה תדפיס התראה של 1.2.3 ותצא
// i++;
// }



