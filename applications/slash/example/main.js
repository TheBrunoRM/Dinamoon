import discord from 'discord.js';

import { SlashApplicationBuilder } from '../../../core/structures/Application/Slash.js';

export default new SlashApplicationBuilder({

    description: 'Comando de ejemplo',
    
    descriptionLocalizations: {

        'es-ES': 'Comando de ejemplo',
        'en-US': 'Example command'
    },
    
    events: {
        
        application: ({ client, event, loaders, groupers, managers, tools }) => {

            const interactionEmbed = new discord.EmbedBuilder({

                description: 'Hola mundo'
            });
            
            event.editReply({ embeds: [ interactionEmbed ] });
        }
    }
});