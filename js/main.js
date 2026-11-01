requirejs.config({
    paths: {
        knockout: "https://cdnjs.cloudflare.com/ajax/libs/knockout/3.5.1/knockout-latest.min",
        jquery: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min"
    }
});

// On every page
require(["back-to-top"]);

if (document.querySelector(".auth-form")) {
    require(["auth-validation"]);
}

// Only the home page has the catalog
if (document.getElementById("catalog")) {
    require(["knockout", "catalog-filter"], function (ko, CatalogFilterViewModel) {
        ko.applyBindings(new CatalogFilterViewModel(), document.getElementById("catalog"));
    });
}
