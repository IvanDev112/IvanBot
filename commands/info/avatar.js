const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Get user avatar')
        .addUserOption(option => 
            option
                .setName('target')
                .setDescription('User to get avatar of')
        ),
    async execute(interaction) {
        const user = interaction.options.getUser('target') ?? interaction.user;
        interaction.reply(`${user.username}'s avatar: ${user.avatarURL()}`);
    }
};