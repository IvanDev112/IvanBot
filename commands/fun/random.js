const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('random')
        .setDescription('Random number!')
        .addNumberOption(option => 
            option.setName('min')
            .setDescription('Minimum number')
        )
        .addNumberOption(option => 
            option.setName('max')
            .setDescription('Maximum number')
        ),
    async execute(interaction) {
        const min = interaction.options.getNumber('min') ?? 0;
        const max = interaction.options.getNumber('max') ?? 100;

        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);

        await interaction.reply(Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled).toString());
    },
};