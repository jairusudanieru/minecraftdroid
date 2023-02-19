const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
} = require("discord.js");

module.exports = {
    data: {
        name: "whitelistdeny",
    },
    async execute(interaction) {
        const row = new ActionRowBuilder().setComponents(
            new ButtonBuilder()
                .setCustomId("whitelistdeny")
                .setLabel("Application Rejected")
                .setEmoji("<:emoji_circlecross:1067128052615753748>")
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true),
            new ButtonBuilder()
                .setCustomId("whitelistadd")
                .setLabel("Add Rejected Player?")
                .setEmoji("<:emoji_circleplus:1012348409769902080>")
                .setStyle(ButtonStyle.Secondary)
        );

        try {
            await interaction.update({
                components: [row]
            })
            await interaction.followUp({
                content: `Application Successfully Rejected`,
                ephemeral: true
            });
        } catch (error) {
            await interaction.reply({
                content: "Something went wrong!",
                ephemeral: true
            });
        }
    },
};
