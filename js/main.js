requirejs.config({
    paths: {
        knockout: "https://cdnjs.cloudflare.com/ajax/libs/knockout/3.5.1/knockout-latest.min"
    }
});

require(["knockout", "catalog-filter"], function (ko, CatalogFilterViewModel) {
    ko.applyBindings(new CatalogFilterViewModel(), document.getElementById("catalog"));
});
