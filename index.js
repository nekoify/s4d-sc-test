(async () => {
            const Discord = require("discord.js")
            const { Client, GatewayIntentBits } = Discord

            const s4d = {
                client: new Client({
                    intents: [...Object.values(GatewayIntentBits)]
                })
            }

            s4d.client.on('ready', async () => {

});

s4d.client.login().catch((e) => {
    const tokenInvalid = true;
    const tokenError = e;
    if (e.toString().toLowerCase().includes("token")) {
        throw new Error("An invalid bot token was provided!")
    } else {
        throw new Error("Privileged Gateway Intents are not enabled! Please go to https://discord.com/developers and turn on all of them.")
    }
});

        })()