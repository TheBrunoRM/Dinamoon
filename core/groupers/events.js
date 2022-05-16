import eventsLoader       from '../loaders/events.js';
import servicesLoader     from '../loaders/services.js';
import applicationsLoader from '../loaders/applications.js';

let groupedEvents = {};

for (const _loadedEvent of eventsLoader) {

    const servicesFiles     = servicesLoader.filter((val) => val.events[_loadedEvent.name]);
    const applicationsFiles = applicationsLoader.filter((val) => val.events[_loadedEvent.name]);
    const allFiles          = servicesFiles.concat(applicationsFiles);

    // Si el evento no es utilizado, salta al siguiente
    if (!allFiles.length) continue;

    // Importa el evento y los archivos que lo utilizan
    groupedEvents[_loadedEvent.name] = { 
        
        services:     servicesFiles, 
        applications: applicationsFiles,
        all:          allFiles
    };
};

export default groupedEvents;