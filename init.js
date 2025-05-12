const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let chats = [
    {
        from: 'aniket',
        to: 'jagdish',
        msg: 'hello',
        created_at: new Date(),
    },
    {
        from: 'jagdish',
        to: 'aniket',
        msg: 'hi',
        created_at: new Date(),
    },
    {
        from: 'jagdish',
        to: 'aniket',
        msg: 'how are you',
        created_at: new Date(),
    },
    {
        from: 'aniket',
        to: 'jagdish',
        msg: 'i am fine',
        created_at: new Date(),
    },
];

Chat.insertMany(chats);
