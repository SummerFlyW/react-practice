import * as appPlugins from './modules';

(() => {
    "use strict";
    Object.keys(appPlugins).forEach((value) => appPlugins[value]());
})();
