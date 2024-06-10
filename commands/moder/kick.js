const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Kicking people is fun!')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member to kick')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('The reason for kick'))
		.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
		.setDMPermission(false),
    async execute(interaction) {
		const target = interaction.options.getUser('target');
        const reason = interaction.options.getString('reason') ?? 'No reason';

		await interaction.reply(`Kicking ${target.username} for reason: ${reason}`);
		await interaction.guild.members.kick(target);
    }
};