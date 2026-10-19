define(["knockout"], function (ko) {
    return function CatalogFilterViewModel() {
        var self = this;
        
        self.active = ko.observable("all");

        self.select = function (id) {
            self.active(id);
        };
        
        self.pressed = function (id) {
            return self.active() === id ? "true" : "false";
        };
    };
});
