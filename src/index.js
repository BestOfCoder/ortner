const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildsMembers,
        IntentsBitField.Flags.GuildsMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.login(""
);
