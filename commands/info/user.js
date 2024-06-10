const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('User info')
        .addUserOption(option => 
            option
                .setName('target')
                .setDescription('Target user')
        ),
    async execute(interaction) {
        const user = interaction.options.getUser('target') ?? interaction.user;

        const embed = new EmbedBuilder()
            .setAuthor({ name: user.username, iconURL: user.avatarURL() })
            .setDescription('User info')
            .addFields(
                { name: 'ID', value: user.id, inline: true },
                { name: 'Username', value: user.username, inline: true },
                { name: 'Created at', value: user.createdAt.toString(), inline: true },
                { name: 'Is Bot', value: user.bot.toString() }
            )
            .setImage(user.avatarURL())
            .setFooter({ text: 'Created By IvanBot', iconURL: 'https://cdn.discordapp.com/avatars/852934916496687135/d6a8142c0ff8bbb1c8d62527754f76ae.webp' });

        await interaction.reply(`${user.username}'s info`);
        await interaction.channel.send({ embeds: [embed] });
    },
};