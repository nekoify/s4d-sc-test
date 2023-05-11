(async () => {
            const Discord = require("discord.js")
            const { Client, GatewayIntentBits } = Discord

            const s4d = {
                client: new Client({
                    intents: [...Object.values(GatewayIntentBits)]
                })
            }

            
        })()