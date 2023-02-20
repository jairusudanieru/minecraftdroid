const {
    EmbedBuilder,
    PermissionFlagsBits,
    SlashCommandBuilder,
} = require("discord.js");
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName("serverip")
        .setDescription("Shows the Server Ip and Port")
        .setDefaultMemberPermissions(PermissionFlagsBits.UseApplicationCommands),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setDescription(`<:emoji_dot:1044083172784218132>**Minecraft Java Edition**\nServer Address: pandesalsmp.mcph.co\nCustom Address: play.pandesalsmp.tk\n\n<:emoji_dot:1044083172784218132**Minecraft Bedrock & PE**\nServer Address: play.pandesalsmp.tk\nServer Port: 23504`)
            .setColor("#2f3136");

        if(interaction.channel.id != "987326255085006848") {
            await interaction.reply({
                content: "You cannot do that in this Channel.",
                ephemeral: true
            })
        } else {
            try {
                await interaction.reply({
                    embeds: [embed]
                });
                await wait(10000)
                await interaction.deleteReply()
            } catch (error) {
                await interaction.reply({
                    content: "Something went wrong! Please report this to Developers.",
                    ephemeral: true
                });
            }
        }
    },
};
