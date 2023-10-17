const { Client } = require("@discordjs/core")
const discord = require("discord.js")
const  cliente = new discord.Client()

cliente.on("ready", () => {
    console.log("logado")
})
cliente.on('Message', (message) => {
    if (nessage.content === "Olá"){
        message.replay("Oii JMiguel")
    }
})

cliente.login(MTE2Mzg3MjUxNjk3MzAxNTE0MA.GKq8X4.Z7pKhWD0KdErqw8r0tOLsYNPlTGr-B1Hggb47c)

Client.on('messageCreate', (message) =>{
    console.log
})