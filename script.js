var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var loc = [];
var Orte = /** @class */ (function () {
    function Orte(city, address, zip, place, image) {
        this.city = city;
        this.address = address;
        this.zip = zip;
        this.place = place;
        this.image = image;
        loc.push(this);
    }
    Orte.prototype.displayLocation = function () {
        return document.getElementById('ort').innerHTML += "Wilkommen " + this.place + " in " + this.city + " " + this.address + " " + this.zip;
    };
    Orte.prototype.displayCard = function () {
        $(".cardWrapper").append("\n\t       \n\t   \t<div class=\"col-sm col-md-6 col-lg-3 d-flex align-content-stretch mt-3\">\n\t      \t<div class=\"card\" style=\"width: 20rem;\">\n\t          \t<img class=\"card-img-top d-none d-sm-block\" src=\"" + this.image + "\" alt=\"\" style=\"height: 10rem; object-fit: cover\"/>\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<h5 class=\"card-title font-weight-bold\">" + this.place + "</h5>\n\t\t\t\t\t<p class=\"card-text location\">" + this.address + ", " + this.zip + " - " + this.city + "</p>\n\t           \t</div>                \n\t\t\t</div>\n\t    </div> ");
    };
    return Orte;
}());
// +++++++++++++++++++++++++++++++++ Class Restaurant +++++++++++++++++++++++++++++++++
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(city, address, zip, place, image, telNumber, cruisine, webAddress) {
        var _this = _super.call(this, city, address, zip, place, image) || this;
        _this.telNumber = telNumber;
        _this.cruisine = cruisine;
        _this.webAddress = webAddress;
        return _this;
    }
    Restaurant.prototype.displayRest = function () {
        return document.getElementById('dspRest').innerHTML += _super.prototype.displayLocation.call(this) + " enjoy delicious " + this.cruisine + ".<br> Just Call " + this.telNumber + " or visit us online " + this.webAddress;
    };
    Restaurant.prototype.displayCard = function () {
        $(".cardWrapper").append("\n\n            <div class=\"col-sm col-md-6 col-lg-3 d-flex align-content-stretch mt-3\">\n\n\t\t\t\t<div class=\"card\" style=\"width: 20rem;\">\n                   \t<img class=\"card-img-top d-none d-sm-block\" src=\"" + this.image + "\" alt=\"\" style=\"height: 10rem; object-fit: cover\"/>\n\t\t\t\t\t\t\n\t\t\t\t\t<div class=\"card-body\"><h5 class=\"card-title font-weight-bold\">" + this.place + "</h5> </div>\n\t\t\t\t\t\t\t\n                   \t<ul class=\"list-group list-group-flush\">\n                       \t<li class=\"list-group-item card-text\">" + this.telNumber + "</li>\n                       \t<li class=\"list-group-item card-text\">" + this.cruisine + "</li>\n                       \t<li class=\"list-group-item card-text\"><a href=\"http://www." + this.webAddress + "\">" + this.webAddress + "</a></li>\n            \t        <li class=\"list-group-item card-text\">" + this.address + ", " + this.zip + " - " + this.city + "</li>\n           \t       \t</ul>\t\n               \t</div>\n\t\t    </div> ");
    };
    return Restaurant;
}(Orte));
// +++++++++++++++++++++++++++++++++ Class Event +++++++++++++++++++++++++++++++++
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(city, address, zip, place, image, eventDate, eventTime, price, eventTitle, eventWebSite) {
        var _this = _super.call(this, city, address, zip, place, image) || this;
        _this.eventTitle = eventTitle;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.price = price;
        _this.eventWebSite = eventWebSite;
        return _this;
    }
    Events.prototype.displayEvent = function () {
        return document.getElementById('dspEvent').innerHTML += "When: " + this.eventDate + " <br> at " + this.eventTime + " o'clock <br> " + _super.prototype.displayLocation.call(this) + " <br> Price: \u20AC" + this.price + ".-";
    };
    Events.prototype.displayCard = function () {
        $(".cardWrapper").append("\n\n            <div class=\"col-sm col-md-6 col-lg-3 d-flex align-content-stretch mt-3\">\n                <div class=\"card\" style=\"width: 20rem;\">\n                <img class=\"card-img-top d-none d-sm-block\" src=\"" + this.image + "\" alt=\"\" style=\"height: 10rem; object-fit: cover\"/>\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title font-weight-bold\">" + this.eventTitle + "</h5>\n                        <p class=\"card-text location\">" + this.address + ", " + this.zip + " - " + this.city + "</p>\n                   \t</div>\n                        \n                    <ul class=\"list-group list-group-flush\">\n                       \t<li class=\"list-group-item card-text\">When: " + this.eventDate + "</li>\n               \t        <li class=\"list-group-item card-text\">At: " + this.eventTime + "</li>\n       \t                <li class=\"list-group-item card-text\">Where: " + this.address + ", " + this.zip + " - " + this.city + "</li>\n                       \t<li class=\"list-group-item card-text\">\u20AC" + this.price + ".-</li>\n                    </ul>     \n                </div>\n            </div> ");
    };
    return Events;
}(Orte));
//++++++++++++++++++++++++++++++++++	Orte  ++++++++++++++++++++++++++++++++++
var place1 = new Orte(" Vienna", "Karlsplatz 1", 1010, "St. Charles Church", "img/karlskirche.jpg");
var place2 = new Orte("Vienna", "Maxingstraße 13b", 1130, "Schönbrunn Park", "img/schönbrunn.jpg");
//++++++++++++++++++++++++++++++++++  Restaurants  ++++++++++++++++++++++++++++++++++
var rest1 = new Restaurant("Vienna", "Wehrgasse 8", 1050, "ON Restaurant", "img/onRestaurant.jpg", "+43(1)5854900", "chinese", "http://www.restaurant-on.at/");
var rest2 = new Restaurant("Vienna", "Stutterheimstraße 6", 1150, "BioFrische", "img/bioFrische.jpg", "+43(1) 9529215", "indian", "http://biofrische.wien/");
//++++++++++++++++++++++++++++++++++ Events  ++++++++++++++++++++++++++++++++++      
var event1 = new Events("Vienna", "Ronacher- Seilerstätte 9", 1010, "Ronacher", "img/cats.jpg", "Fr., 15.12.2020.", "20:00", "120,00", "Cats- the musical", "http://ronacher.at");
var event2 = new Events("Vienna", " Meiereistraße 7", 1020, "Ernst-Happel Stadion", "img/guns.jpg", "24.10.2020", "12:45", "95,50", "Guns ‘n Roses", "http://www.gunsandroses.com");
for (var _i = 0, loc_1 = loc; _i < loc_1.length; _i++) {
    var i = loc_1[_i];
    i.displayCard();
}
