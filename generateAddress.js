var add1 = ["The Burrow",	"Windyridge",	"Garden Cottage",	"Wild Bank","Mile End",	"Dreamwood	Stillness",	"Mighty Oaks","Bridgelands",	"Kuredu	Cumfrubrum",	"Elmsgate",
"Chestnuts",	"Wisteria Cottages",	"Daisy Cottage",	"South Bank","Lealands",	"The Cherries",	"The Warren","Jackdaws",	"Brookvale",	"Newland Cottage",	"Little Copse",
"Crystal Cottage",	"Nabdean",	"High Trees",	"Robins Hedge","Campion",	"Heatherbell",	"Chimney Cottage",	"Welcombe","Rosemary House",	"Hunters Wood",	"Elm Tree Wood",	"Church View",
"Court Lodge",	"Mulberry",	"Silverwood",	"Cedar Cabin","Sierra Lodge",	"Crows Nest",	"Southcote",	"Eastholme","Holmeswood",	"White Goose",	"Bulverton House",	"Tannery Gardens",
"Kites Farm",	"Snowdrops Cottage",	"Seren Cottage",	"Hope Corner","Taw Court",	"Little Acorn",	"Seacrest",	"Oak Cottage","Ardoran",	"Rose Cottage",	"Woodhouse Barn",	"Little Wood",
"Oystercatchers",	"Oakhall Cottage",	"Barton Villa",	"Queen Oaks Court","Pine View",	"Jasmine Cottage",	"Blossom",	"Mill House Farm","Stonehurst",	"Blackberry Cottage",	"Oaklands",	"Old Cottage",
"Woolley Cottage",	"Oak View",	"Riverside",	"Greenhills","Druid's Cottage",	"Grey Barn",	"Appletree Lodge",	"The Old Parsonage"];

var town = ["Abbeydorney","Abbeyfeale","Abbeyknockmoy","Abbeylara","Blackwater","Blanchardstown","Blarney","Blennerville","Blessington","Blue Ball","Boherbue",
"Clondalkin","Clondrohid","Clonegal","Clones","Clonfert","Clonlara","Clonliffe","Clonmacnoise","Clonmany","Clonmel","Clonmellon","Dolphin's Barn","Donabate","Donaghmede",
"Eadestown","Easky","Flagmount","Fossa","Goleen","Goresbridge","Holycross","Inagh","Johnstown","Killucan","Killurin","Killybegs","Loughlinstown","Loughmore","Mahoonagh","Narin","Narraghmore","Patrickswell",
"Rathmolyon","Rathmore","Rathmullan","Scariff","Timahoe","Timoleague"];

var counties = ["County Cork",  "County Galway","County Mayo","County Donegal","County Kerry","County Tipperary","County Clare","County Tyrone","County Antrim","County Limerick",
"County Roscommon","County Down","County Wexford","County Meath","County Londonderry","County Kilkenny","County Wicklow","County Offaly","County Cavan","County Waterford",
"County Westmeath","County Sligo","County Laois","County Kildare","County Fermanagh","County Leitrim","County Armagh","County Monaghan","County Longford","County Dublin",
"County Carlow","County Louth"
];

for(var i=0; i<20; i++){
  console.log("INSERT INTO Address (AddressID, AddressLine1, AddressLine2, Town, CityOrCounty, EIRCODE) VALUES (NULL, '"+getRandomAdd1()+"', '"+getRandomAdd2()+"', '"+getRandomTown()+"', '"+getRandomCounty()+"', '"+getRandomEircode()+"');");
}
function getRandomAdd1(){
  return add1[Math.floor(Math.random()*add1.length)];
}
function getRandomAdd2(){
  return add1[Math.floor(Math.random()*add1.length)];
}
function getRandomTown(){
  return town[Math.floor(Math.random()*town.length)];
}
function getRandomCounty(){
  return counties[Math.floor(Math.random()*counties.length)];
}
function getRandomEircode(){
  var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var letter1 = string.charAt(Math.floor(Math.random()*string.length));
  var randomNum1 = Math.floor(Math.random()*99)+10;
  var letter2 = string.charAt(Math.floor(Math.random()*string.length));
  var letter3 = string.charAt(Math.floor(Math.random()*string.length));
  var randomNum2 = Math.floor(Math.random()*99)+10;
  var eircode = letter1.concat(randomNum1.toFixed(0),letter2, letter3, randomNum2.toFixed(0));
  return eircode;
}
