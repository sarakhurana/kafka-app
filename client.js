const{ Kafka } = require("kafkajs");

exports.kafka = new Kafka({
    clientId: "kafka-app",
    brokers: ["192.168.1.4:9092"]
});