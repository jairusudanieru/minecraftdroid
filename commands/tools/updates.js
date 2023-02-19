const {
    EmbedBuilder,
    PermissionFlagsBits,
    SlashCommandBuilder,
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("updates")
        .setDescription("The Updates Embed")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),
    async execute(interaction) {
        const title = "Pandesal Pack Update!";
        const embed = new EmbedBuilder()
            .setDescription(`<:icon_dot:973828580272402444>**${title}**\nDue to a bug in 1.19.3 Texture Packs, I created separate Texture Packs for 1.19-1.19.2 and 1.19.3 players. However, they are identical, with the exception that the old texture pack does not work properly in 1.19.3.\n\n<:icon_dot:973828580272402444>**Removed Textures**\n- Custom Player Totems\n- Carved Pumpkin Fake Bedrock\n- Custom Font`)
            .setImage("https://cdn.discordapp.com/attachments/1074008682167287948/1074008760344907806/2023-02-12_00.46.21.png")
            .setColor("#2f3136");

        try {
            const update = await interaction.channel.send({
                content: `<@&988710464768860191>`,
                embeds: [embed],
            })
            await update.startThread({
                name: title,
                autoArchiveDuration: 60,
                reason: 'Discussion',
            });
            await interaction.reply({
                content: "Updates Embed Sent!",
                ephemeral: true,
            });
        } catch (error) {
            await interaction.reply({
                content: "Something went wrong! Try Checking the bot's Permission.",
                ephemeral: true
            });
        }
    },
};
