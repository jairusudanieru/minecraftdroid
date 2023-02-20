const { ChannelType } = require('discord.js');

module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        if (message.author.bot || message.channel.type == ChannelType.DM) return;

        if (message.content.includes(`<@${client.user.id}>`)) {
            await message.reply('You can use `/` to see the commands.');
        }
    }
}
