import eventsLoader       from '../loaders/events.js';
import servicesLoader     from '../loaders/services.js';
import applicationsLoader from '../loaders/applications.js';
import eventsGroup        from '../groupers/events.js';
import intentsGroup       from '../groupers/intents.js';
import eventsManager      from './events.js';

import * as directoryManager from './directory.js';

import { ToolsBuilder } from '../structures/Tools.js';

export default async (client) => {

    // Carga los eventos
    for (const _loadedEvent of eventsLoader) {

        // Si el evento no fue cargado salta al siguiente
        if (!eventsGroup[_loadedEvent.name]) continue;

        await _loadedEvent.execute({
                
            client,

            loaders: {

                events:       eventsLoader,
                services:     servicesLoader,
                applications: applicationsLoader
            },

            groupers: {

                events:  eventsGroup,
                intents: intentsGroup
            },

            managers: {

                events:    eventsManager,
                directory: directoryManager
            },

            tools: new ToolsBuilder(_loadedEvent)
        });
    }  
};