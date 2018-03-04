import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AgmMarkerCluster } from './directives/marker-cluster';
var AgmJsMarkerClustererModule = (function () {
    function AgmJsMarkerClustererModule() {
    }
    return AgmJsMarkerClustererModule;
}());
export { AgmJsMarkerClustererModule };
AgmJsMarkerClustererModule.decorators = [
    { type: NgModule, args: [{
                imports: [AgmCoreModule],
                declarations: [AgmMarkerCluster],
                exports: [AgmMarkerCluster]
            },] },
];
/** @nocollapse */
AgmJsMarkerClustererModule.ctorParameters = function () { return []; };
//# sourceMappingURL=js-marker-clusterer.module.js.map