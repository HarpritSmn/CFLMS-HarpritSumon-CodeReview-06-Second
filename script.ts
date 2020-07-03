let loc = [];

class Orte{
	city: string;
	address: string;
	zip: number;
	place: string;
	image: any;

	constructor(city: string, address: string, zip: number, place: string, image: any){
		this.city = city;
		this.address = address;
		this.zip = zip;
		this.place = place;
		this.image = image;

		loc.push(this);
	}

	displayLocation(){
		return document.getElementById('ort').innerHTML += `Wilkommen ${this.place} in ${this.city} ${this.address} ${this.zip}`
	}

	displayCard() {
		$(".cardWrapper").append(`
	       
	   	<div class="col-sm col-md-6 col-lg-3 d-flex align-content-stretch mt-3">
	      	<div class="card" style="width: 20rem;">
	          	<img class="card-img-top d-none d-sm-block" src="${this.image}" alt="" style="height: 10rem; object-fit: cover"/>
				<div class="card-body">
					<h5 class="card-title font-weight-bold">${this.place}</h5>
					<p class="card-text location">${this.address}, ${this.zip} - ${this.city}</p>
	           	</div>                
			</div>
	    </div> `);
	}

}

// +++++++++++++++++++++++++++++++++ Class Restaurant +++++++++++++++++++++++++++++++++

class Restaurant extends Orte {
	telNumber: string;
	cruisine: string;
	webAddress:any;

	constructor(city: string, address: string, zip: number, place: string, image: any, telNumber: string, cruisine: string, webAddress:any){
		super(city, address, zip, place, image);
		this.telNumber = telNumber;
	    this.cruisine = cruisine;
	    this.webAddress = webAddress;
	}

	displayRest () {
      	 return document.getElementById('dspRest').innerHTML += `${super.displayLocation()} enjoy delicious ${this.cruisine}.<br> Just Call ${this.telNumber} or visit us online ${this.webAddress}`;
    }


    displayCard() {
        $(".cardWrapper").append(`

            <div class="col-sm col-md-6 col-lg-3 d-flex align-content-stretch mt-3">

				<div class="card" style="width: 20rem;">
                   	<img class="card-img-top d-none d-sm-block" src="${this.image}" alt="" style="height: 10rem; object-fit: cover"/>
						
					<div class="card-body"><h5 class="card-title font-weight-bold">${this.place}</h5> </div>
							
                   	<ul class="list-group list-group-flush">
                       	<li class="list-group-item card-text">${this.telNumber}</li>
                       	<li class="list-group-item card-text">${this.cruisine}</li>
                       	<li class="list-group-item card-text"><a href="http://www.${this.webAddress}">${this.webAddress}</a></li>
            	        <li class="list-group-item card-text">${this.address}, ${this.zip} - ${this.city}</li>
           	       	</ul>	
               	</div>
		    </div> `);

    }
}

// +++++++++++++++++++++++++++++++++ Class Event +++++++++++++++++++++++++++++++++

class Events extends Orte {
	eventTitle: string;
	eventDate: any;
	eventTime: any;
	price: any;
	eventWebSite: any;

	constructor(city: string, address: string, zip: number, place: string, image: any, eventDate: any, eventTime: any, price: any, eventTitle: string, eventWebSite: any) {
		super(city, address, zip, place, image);
		this.eventTitle = eventTitle;
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		this.price = price;
		this.eventWebSite = eventWebSite;
	}

	displayEvent () {
   		return document.getElementById('dspEvent').innerHTML += `When: ${this.eventDate} <br> at ${this.eventTime} o'clock <br> ${super.displayLocation()} <br> Price: €${this.price}.-`;
   	}

	displayCard() {


        $(".cardWrapper").append(`

            <div class="col-sm col-md-6 col-lg-3 d-flex align-content-stretch mt-3">
                <div class="card" style="width: 20rem;">
                <img class="card-img-top d-none d-sm-block" src="${this.image}" alt="" style="height: 10rem; object-fit: cover"/>
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">${this.eventTitle}</h5>
                        <p class="card-text location">${this.address}, ${this.zip} - ${this.city}</p>
                   	</div>
                        
                    <ul class="list-group list-group-flush">
                       	<li class="list-group-item card-text">When: ${this.eventDate}</li>
               	        <li class="list-group-item card-text">At: ${this.eventTime}</li>
       	                <li class="list-group-item card-text">Where: ${this.address}, ${this.zip} - ${this.city}</li>
                       	<li class="list-group-item card-text">€${this.price}.-</li>
                    </ul>     
                </div>
            </div> `);    
    } 
}

//++++++++++++++++++++++++++++++++++	Orte  ++++++++++++++++++++++++++++++++++
let place1 = new Orte (" Vienna", 	"Karlsplatz 1", 		1010, 	"St. Charles Church", 	"img/karlskirche.jpg")
let place2 = new Orte ("Vienna", 	"Maxingstraße 13b", 	1130, 	"Schönbrunn Park", 		"img/schönbrunn.jpg")


//++++++++++++++++++++++++++++++++++  Restaurants  ++++++++++++++++++++++++++++++++++
let rest1 = new Restaurant("Vienna",	"Wehrgasse 8", 			1050,	"ON Restaurant",	"img/onRestaurant.jpg",	"+43(1)5854900" ,		"chinese",		"http://www.restaurant-on.at/")
let rest2 = new Restaurant("Vienna",	"Stutterheimstraße 6", 	1150,	"BioFrische", 		"img/bioFrische.jpg",	"+43(1) 9529215" ,	"indian",		"http://biofrische.wien/")


//++++++++++++++++++++++++++++++++++ Events  ++++++++++++++++++++++++++++++++++      
let event1 = new Events("Vienna",      "Ronacher- Seilerstätte 9",      1010,	"Ronacher",					"img/cats.jpg",		"Fr., 15.12.2020.",		"20:00",	"120,00",	"Cats- the musical",	"http://ronacher.at")
let event2 = new Events("Vienna",      " Meiereistraße 7",	 			1020,	"Ernst-Happel Stadion",		"img/guns.jpg",		"24.10.2020",			"12:45",	"95,50",	"Guns ‘n Roses",		"http://www.gunsandroses.com")


for (var i of loc) {
    i.displayCard();
}
