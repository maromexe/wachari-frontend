define(["knockout"], function (ko) {
    return function CatalogFilterViewModel() {
        var self = this;

        var titles = { all: "All", movie: "Movies", tv: "TV Shows" };
        var cards = document.querySelectorAll(".movie-card");

        self.active = ko.observable("all");

        self.select = function (id) {
            self.active(id);
        };

        self.pressed = function (id) {
            return self.active() === id ? "true" : "false";
        };

        // A card is visible when the active tab is "all" or matches its data-type
        self.isShown = function (type) {
            return self.active() === "all" || self.active() === type;
        };

        self.title = ko.computed(function () {
            return titles[self.active()];
        });

        self.count = ko.computed(function () {
            return Array.prototype.filter.call(cards, function (card) {
                return self.isShown(card.dataset.type);
            }).length;
        });
    };
});
