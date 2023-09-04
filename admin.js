const { kafka } = require("./client");

async function init() {
    const admin = kafka.admin();
    console.log("Admin connecting...");
    await admin.connect();
    console.log("Adming Connection Success...");
  
    console.log("Creating Topic[product-updates]");
    await admin.createTopics({
      topics: [
        {
          topic: "product-updates",
          numPartitions: 2,
        },
      ],
    });
    console.log("Topic Created Success [product-updates]");
  
    console.log("Disconnecting Admin..");
    await admin.disconnect();
  }
  
  init();