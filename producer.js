const{kafka} = require("./client");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
async function init(){
   const producer = kafka.producer();
   console.log("Connecting Producer");
   await producer.connect();
   console.log("Producer Connected Successfully");
   rl.setPrompt(">");
   rl.prompt();
   rl.on("line", async (line)=>{
    const [product, status] = line.split(" ");
    await producer.send({
        topic: "product-updates",
        messages: [
            {
                partition: status==status.toLowerCase()=="delivered"?0:1,
                key : "product-update",
                value: JSON.stringify({product, status})
            }
        ]
    })
   }).on("close", async ()=> await producer.disconnect());
}

init();