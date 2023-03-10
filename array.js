
const cars = [];
cars[0]='Saab';
cars[1]= 'Volvo';
cars[2]='BMW';
cars.push('Hover');
console.log(cars);
console.log(cars.length);
console.log(cars[cars.length -1]);
console.log(cars.sort());




const carS = ['Saab','Volvo','BMW'];
carS[0]='Opel';
console.log(carS)

const person = {firstName:'John', lastName:'Doa', age:40,};
person[person.length] = "nickName:'Creek'";
console.log(person.firstName);
console.log(person);
let Text ='';
for(let x in person){
    Text += person[x];
    console.log(x)
}


const fruits = ['Banana', 'Apple','Orange','Mango'];
let fLen= fruits.length;

let text = '<ul>';
    for(let i= 0; i<fLen; i++){
        text += '<li>' + 'fruits[i]' + '</li>'
    }
    text += '</ul>';
    console.log()


    const fruitS = ['Banana', 'Apple','Orange','Mango'];
    let txt = '<ul>';

    fruitS.forEach(myFunction)
    txt += '</ul>';

    function myFunction(value){
        text += '<li>' + 'fruits[i]' + '</li>'
    }
    myFunction();
    console.log()

    const fruit = ['Banana', 'Apple','Orange','Mango'];
    fruit[6]= 'Lemon';
    console.log(fruit);
    let type = typeof fruit;
    console.log(type)
    console.log(fruit.toString());
    console.log(fruit.join("*"));
    console.log(fruit.pop());
    console.log(fruit.shift());
    console.log(fruit.unshift());
    let fruiT= fruit.unshift();
    console.log(fruit.unshift('Pear'));
    console.log(fruit)
    console.log(delete fruit[0]);
    console.log(fruit);

    const myGirls= ['Cecilia','Lone'];
    const myBoys = ['Emile','Linus'];
    const myGB= [ 'Fred', 'Mary']
    const myChildren = myGirls.concat(myBoys,myGB);
 
    console.log(myChildren);

    const arrays = ['Tobias','David'];
    const children = arrays.concat('peter');
    console.log(children);
    

    const item = ['Pen','Book','Bag'];
    item.splice(2,0,'Pencil','Ruler');
    console.log(item);

    const items = ['Pen','Book','Bag'];
    items.splice(2,2,'Pencil','Ruler');
    console.log(items);
    
    const itemS = ['Pen','Book','Bag','Pencil','Ruler'];
    let i= itemS.slice(1,3);

    console.log(i);
    console.log(itemS.sort());
    console.log(itemS.reverse());

    const points= [40,100,1,5,25,10];
    console.log(points.sort(function(a,b){return a - b}));
    console.log(points.sort(function(a,b){return b - a}));

    const point = [40,100,1,5,25,10];

    for(let i = point.length - 1; i>0; i-- ){
        let j= Math.floor(Math.random() * (i+1));
        let k = point[i];
        point[i] = point[j];
        point[j] = k;

        console.log(k)
        }

        const poin = [40, 100, 1, 5, 25, 10];
        console.log(poin.sort(function(){return 0.5 - Math.random()}));
    
    function myArrayMax(arr){
        console.log(Math.max.apply(null,[10,20,100]));
        console.log(Math.max(10,20,100));
        
    }
myArrayMax();


function myArrayMin(arr){
    console.log(Math.min.apply(null,[10,20,100]));
    console.log(Math.min(10,20,100));
    
}
myArrayMin();



function myArayMax(arr){
    let len = arr.length;
    let max = -Infinity;
    while(len--){
        if(arr[len>max]){
            max = arr[len];
        }
    }
    console.log(max);
}
myArayMax([10,20,100])


function myArayMin(arr){
    let len = arr.length;
    let min = Infinity;
    while(len--){
        if(arr[len<min]){
            min = arr[len];
        }
    }
    console.log(min);
}
myArayMin([10,20,100]);


const C= [
    {type:'Volvo', year:2016 },
    {type: 'Saab', year:2001},
    {type: 'BMW', year: 2014}
];
console.log(C.sort(function(a,b){return a.year - b.year}));
C.sort(function(a,b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x<y) {return -1;}
    if(x>y) {return 1;}
    console.log(0);
});

const number1 = [49, 4, 9, 16, 33];
const number2 = number1.map(myFunction);
function myFunction(value){
console.log(value * 2);
}


const number = [45, 4, 8, 21, 29];
const over18 = number.filter(myFunctions);
function myFunctions(value){
    console.log(value>18);
}


const numberS = [45, 4, 8, 21, 29];
const sums = numberS.reduce(myArray);
function myArray(total,value){
    console.log(total + value);
}

const numbers = [45, 4, 8, 21, 29];
const sum = numbers.reduce(myArray,100);
function myArray(total,value){
    console.log(total + value);
}

const num = [45, 4, 9, 21, 25];
const someOver18 = num.some(myArrays);
function myArrays(value){
    console.log(value>18);
}

const numb = [45, 4, 8, 16, 25];
const allOver18 = numb.every(myArrayS);
function myArrayS(value){
    console.log(value>18)
}
const numbs = [45, 4, 8, 16, 25];
const first = numbs.find(MyArray);
function MyArray(value){
    console.log(value>18)
}

const f = ['mango', 'lemon', 'banana','apple'];
const keys = f.entries();

for(let x of keys){
    text += x + '<br>'
    console.log(x);
    console.log(keys)
    console.log(f.includes("lemon"))
    
}


const q1 = ['Jan','Feb','Mar'];
const q2 = ['Apr','May','jun'];
const q3 = ['Jul','Aug','Sep'];
const q4 = ['Oct','Nov','Dec'];
const year1 = [...q1, ...q2, ...q3, ...q4];
console.log(year1);

const d = new Date(2023,3,07,12,47,00,0);
console.log(d) 
console.log(d.toDateString);

const dt = new Date("2023-03-07T01:08:00Z")
console.log(dt);

const dat= new Date("2015/03/15");
console.log(dat);

const date = new Date("January, 23 2023");
console.log(date);

let msec = Date.parse('March,07 2023');
let date1 = new Date(msec);
console.log(date1)
console.log(date1.getFullYear());
console.log(date1.getMonth());

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const date3 = new Date("2021-03-25");
let month = months[d.getMonth()];
console.log(month)

const date2 = new Date();
console.log(date2);
console.log(date2.getDate());
console.log(date2.getHours());
console.log(date2.getMinutes());
console.log(date2.getSeconds());
console.log(date2.getMilliseconds());
console.log(date2.getDay());
console.log(date2.getTime())

const days = ['Sunday','Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday'];
const date4 = new Date();
let day1= days[date4.getDay()];
console.log(day1);

const minutes = 1000*60;
const hour = minutes * 60;
const day = hour * 24;
const year = day * 365;

let years =  Math.round(Date.now()/year); 
console.log(years)

const dd = new Date();
console.log(dd.setFullYear(2020,11,3));
console.log(dd.setMonth(2));
console.log(dd.setDate(dd.getDate() + 50));
console.log(dd.setHours(22));
console.log(dd.setMinutes(30));
console.log(dd.setSeconds(30));


let t = '';
let today = new Date();
let someday = new Date();
someday.setFullYear(2100,0,14);

if(someday>today){
    console.log('Today is before January, 14 2100');
}
else{
    console.log('Today is after January, 14 2100');
}

console.log(Math.round(4.6));
console.log(Math.round(4.5));
console.log(Math.round(4.4));

console.log(Math.ceil(4.6));
console.log(Math.ceil(4.5));
console.log(Math.ceil(4.4));
console.log(Math.ceil(4.3));
console.log(Math.ceil(4.2));
console.log(Math.ceil(-4.2));

console.log(Math.trunc(4.6));
console.log(Math.trunc(4.5));
console.log(Math.trunc(4.4));
console.log(Math.trunc(4.3));
console.log(Math.trunc(4.2));
console.log(Math.trunc(-4.2));

console.log(Math.floor(4.6));
console.log(Math.floor(4.5));
console.log(Math.floor(4.4));
console.log(Math.floor(4.3));
console.log(Math.floor(4.2));
console.log(Math.floor(-4.2));

console.log(Math.sign(-4));
console.log(Math.sign(0));
console.log(Math.sign(4));

console.log(Math.pow(8,2));

console.log(Math.sqrt(64));
console.log(Math.sqrt(16));

console.log(Math.abs(-4.7));

console.log(Math.sin(90*Math.PI/180));
console.log(Math.cos(0*Math.PI/180));

console.log(Math.min(0, 500, 3, 8, -47));
console.log(Math.max(0, 500, 3, 8, -47));

console.log(Math.log(1));
console.log(Math.log(2));
console.log(Math.log(3));
console.log(Math.log(10));

console.log(Math.log2(16));
console.log(Math.log10(1000));

console.log(Math.floor(Math.random()*10));

console.log(Math.random());

console.log(Math.floor(Math.random()*100) + 1);

function getRndInteger(min,max){
    console.log(Math.floor(Math.random()*(max  - min )+ min));
}
getRndInteger(1,7,90,50,67,35,70);

function getRndIntegers(min,max){
    console.log(Math.floor(Math.random()*(max  - min + 1 )+ min));
}
getRndIntegers(1,7,90,50,67,35,70)

console.log(Boolean(10>9));

let r= 0;
console.log(Boolean(r));

let e= -0;
console.log(Boolean(e));

let x= '';
console.log(Boolean(x));

let y= null;
console.log(Boolean(y));

let v= false;
let z= new Boolean(false);
console.log(v);
console.log(z);

console.log(x==y);
console.log(x===y);

let p= 5;
console.log(p==8);
console.log(p==5);
console.log(p===5);
console.log(p==='5');
console.log(p!==8);
console.log(p!==5);
console.log(p!=='5');
console.log(p>8);
console.log(p<8);

let name = null;
let tx='missing';
let ans = name ?? tx;
console.log(ans);


let hr= 20;
if(hr<18){
    console.log('Good day');
}
else if(hr>18){
    console.log('Good evening');
}
else{
    console.log('Good morning');
}

let day2;
switch(new Date().getDay()){
    case 0: 
    day2 ='Sunday';
    break;
    case 1: 
    day2 ='Monday';
    break;
    case 2: 
    day2 ='Tuesday';
    break;
    case 3: 
    day2 ='Wednesday';
    break;
    case 4: 
    day2='Thursday';
    break;
    case 5: 
    day2 ='Friday';
    break;
    case 6: 
    day2 ='Saturday';
     
}
console.log(day2);

let month1;
switch(new Date().getMonth()){
    case 0:
        month1 = 'January';
        break;
        case 1:
            month1 = 'February';
            break;
            case 2:
                month1 = 'March';
                break;
                case 3:
                    month1 ='April';
                    break;
                    case 4:
                        month1 ='May';
                        break;
                        case 5:
                            month1 = 'June';
                            break;
                            case 6:
                                month1 = 'July';
                                break;
                                case 7:
                                    month1 ='August';
                                    break;
                                    case 8:
                                        month1 = 'September';
                                        break;
                                        case 9:
                                            month1 = 'October';
                                            break;
                                            case 10:
                                                month1 = 'November';
                                                break;
                                                case 11:
                                                    month1 = 'December'

}
console.log(month1);

let xx= '0';
switch(xx){
    case 0:
        text = 'off';
        break;
        case 1:
            text = 'on';
            break;
            default:
            text = 'no text found';
}
console.log(xx);

const frt='';
switch(frt){
    case 'Banana':
        console.log('Hello,');
        break;
        case 'Mango':
            console.log('welcome')
            break;
            default:
                console.log('neither')
        
}

let Txt = '';
for(let a = 0, length= cars.length; a<length; a++){
    Txt +=cars[a] + '<br>'
    console.log(+Txt)
}

let iteM = ['Pen','Pencil','Ruler','Book'];
let tt='';
for(let x of iteM){
    tt += iteM[x];
    console.log(x);
}

let ii= 0;
while(ii<10){
    console.log( 'The number is' + ii);
    ii++;
    
}

for(let i= 0; i < 10; i++){
console.log(i)
if(i == 5){
    break;
}
}

for(let i= 0; i < 10; i++){
    console.log(i)
    if(i == 5){
       continue;
    }
    }

    const letters = ['a','b','c'];
    for(x of letters){
        console.log(x);
    }

    
    const letter = new Set (['A','B','C']);
    for(x of letter){
        console.log(x);
    };

    const fts = new Map([
        ['Apple',500],
    ['lemon',300],
    ['Banana',200],
    ['Mango',100]
    ]);
        for(x of fts){
            console.log(x)
        }