const discord = require('discord.js');

const access = require('./controls/access.js');
const reply  = require('./controls/reply.js');

module.exports = {

    priority: 1,

    event: function ({ client, manager, cache, bases, utils }) {

        client.on(discord.Events.InteractionCreate, async (event) => {

            // Verifica si es un comando
            if (!event.isCommand()) return;

            for (const _file of manager.events[utils.file.name].applications) {

                if (event.commandName === _file.name
                &&    (event.isChatInputCommand()          && _file.type === 'command'
                    || event.isMessageContextMenuCommand() && _file.type === 'message'
                    || event.isUserContextMenuCommand()    && _file.type === 'user')) {

                    const arguments = {

                        client,
                        event,
                        manager,
                        cache,
                        bases,
                        utils: new bases.utils(_file)
                    };

                    if (await reply(arguments)
                    &&  access(arguments)) {
                        
                        // Carga el evento
                        _file.events[utils.file.name](arguments);
                    };
                };
            };
        });
    }
};