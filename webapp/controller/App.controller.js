sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("atom.ui.ctm.controller.App", {
            onInit: function () {

            },
            handleMenuButton: function (oEvent) {
                const oSideNavigation = this.byId("idSideMenu");
                let bExpanded = oSideNavigation.getExpanded();
                oSideNavigation.setExpanded(!bExpanded);
            }
        });
    });
