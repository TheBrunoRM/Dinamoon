import channelControler from './controlers/channel.js';
import replyControler   from './controlers/reply.js';

import { EventBuilder } from '../../core/structures/Event.js';
import { ToolsBuilder } from '../../core/structures/Tools.js';

export default new EventBuilder({

    priority: 2,
    
    execute: ({ client, loaders, groupers, managers, tools }) => {

        client.on('interactionCreate', async (event) => {
            
            // Si no es un comando
            if (!event.isCommand()) return;

            for (const _loadedApplication of groupers.events[tools.file.name].applications) {

                if (event.commandName === _loadedApplication.name
                &&    (event.isChatInputCommand()          && _loadedApplication.type === 'slash'
                    || event.isUserContextMenuCommand()    && _loadedApplication.type === 'user'
                    || event.isMessageContextMenuCommand() && _loadedApplication.type === 'message')) {

                    const fileArguments = {

                        client, event, loaders, managers, groupers,

                        tools: new ToolsBuilder(_loadedApplication)
                    };

                    if (await channelControler(fileArguments)
                    &&  await replyControler(fileArguments)) {

                        // Carga el evento 
                        _loadedApplication.events[tools.file.name](fileArguments);
                    };

                    // Detiene el bucle
                    break;
                };
            };
        });
    }
});