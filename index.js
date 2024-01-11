import app from "./app.js";
import KafkaConfig from "./config.js";
import constrollers from "./controller.js";

app.post("/api/send", constrollers.sendMessageToKafka);

const kafkaConfig = new KafkaConfig();
kafkaConfig.consume("my-topic", (value) => {
  console.log("Receive message: ", value);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
