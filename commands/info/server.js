const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Server info'),
    async execute(interaction) {
        const guild = interaction.guild;

        const embed = new EmbedBuilder()
            .setAuthor({ name: guild.name, iconURL: guild.iconURL() })
            .addFields(
                { name: 'ID', value: guild.id },
                { name: 'Name', value: guild.name, inline: true },
                { name: 'Created At', value: guild.createdAt.toString(), inline: true },
                { name: 'Members Count', value: guild.memberCount.toString() }
            )
            .setImage(guild.iconURL());
        await interaction.reply(`${guild.name}`);
        await interaction.channel.send({ embeds: [embed] });
    }
};