let timer = 0
let choice = ['|','/','-','\\']
let choiceIndex =0;
for(let i = 0;i<5;i++){
  timer += 200;
  
  setTimeout(() => {
    if(choiceIndex === 4){
      choiceIndex = 0
    }
    process.stdout.write(`\r${choice[choiceIndex++]}     `);
  }, timer);

}
setTimeout(()=>{
  process.stdout.write(`\n`)
},timer+200);