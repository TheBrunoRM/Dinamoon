import { EventBuilder } from '../../core/structures/Event.js';
import { ToolsBuilder } from '../../core/structures/Tools.js';

export default new EventBuilder({

    priority: 4,

    execute: ({ client, loaders, groupers, managers, tools }) => {

        for (const _loadedFile of groupers.events[tools.file.name].all) {

            // Carga el evento
            _loadedFile.events[tools.file.name]({

                client, loaders, managers, groupers,

                tools: new ToolsBuilder(_loadedApplication)
            });
        };
    }
});