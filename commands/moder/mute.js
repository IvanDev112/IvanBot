const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mute')
		.setDescription('Mute this MF!')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member to mute')
				.setRequired(true))
        .addNumberOption(option =>
            option
                .setName('time')
                .setDescription('time in seconds')
                .setRequired(true)
        )
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('The reason for mute'))
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles)
		.setDMPermission(false),
    async execute(interaction) {
		const target = interaction.options.getUser('target');
        const muteTime = interaction.options.getNumber('time');
        const reason = interaction.options.getString('reason') ?? 'No reason';

        const mutedRole = interaction.guild.roles.cache.get('1249388895280300043');
        
        await interaction.guild.members.addRole({ role: mutedRole, user: target });
		await interaction.reply(`Muting ${target.username} for reason: ${reason} for ${muteTime} s`);
        setTimeout(async () => await interaction.guild.members.removeRole({ role: mutedRole, user: target }), muteTime * 1000);
    }
};