const propsNumber = process.argv[2];

const myObject = {};
for(let i = 1; i<=propsNumber; i++){
    myObject[`attr-${i}`] = i;
}


for(let prop in myObject){
    console.log(prop);
    console.log(myObject[prop]);
}