var girlsNames = ["Emma","Olivia","Ava","Isabella","Sophia","Charlotte","Mia","Amelia","Harper","Evelyn","Abigail","Emily","Elizabeth","Mila","Ella","Avery","Sofia",
"Camila","Aria","Scarlett","Victoria","Madison","Luna","Grace","Chloe","Penelope","Layla","Riley","Zoey","Nora","Lily","Eleanor","Hannah","Lillian","Addison","Aubrey",
"Ellie","Stella","Natalie","Zoe","Leah","Hazel","Violet","Aurora","Savannah","Audrey","Brooklyn","Bella","Claire","Skylar"];

var boysNames = ["Noah","Jacob","Liam", "Mason", "William","Ethan","Michael","Alexander","Jayden","Daniel","Elijah","Aiden","James","Benjamin","Matthew","Jackson",
"Logan","David","Anthony","Joseph","Joshua","Andrew","Lucas","Gabriel","Samuel","Christopher","John","Dylan","Isaac","Ryan","Nathan","Caleb","Carter","Luke","Christian",
"Hunter","Henry","Owen","Landon","Jack","Wyatt","Jonathan","Eli","Isaiah","Sebastian","Jaxon","Julian","Brayden","Gavin","Levi","Aaron"];

var surnames = ["Chung","Chen","Melton","Hill","Puckett","Song","Hamilton","Bender","Wagner","McLaughlin","McNamara","Raynor","Moon","Woodard","Desai","Wallace",
"Lawrence","Griffin","Dougherty","Powers","May","Steele","Teague","Vick","Gallagher","Solomon","Walsh","Monroe","Connolly","Hawkins","Middleton","Goldstein","Watts",
"Johnston","Weeks","Wilkerson","Barton","Walton","Hall","Ross","Chung","Bender","Woods","Mangum","Joseph","Rosenthal","Bowden","Barton","Underwood","Jones"];

var femaleTitle =["Ms","Mrs","Miss"];

var otherTitle =["Dr","Mx"];

var domains = ["@gmail.com", "@mumail.ie","@hotmail.com","@yahoo.co.uk","@outlook.com"];
var firstnames;
var secondnames;
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
var ID =0;

  for(var i=0; i<20; i++){
    console.log("INSERT INTO Customer (CustomerID, TITLE, FirstName ,LastName, DateOfBirth,  EmailAddress, MobileNumber) VALUES (NULL, '"+getRandomTitle()+"', '"+getRandomFname()+"', '"+getRandomSname()+"', '"+getRandomDoB()+"', '"+getRandomEmail()+"', '"+getRandomPhoneNum()+"');");
    ID++;
  }

var isGirl;
var titleGen;
var counter;
function getRandomDoB(){
  var day;
  var month = (Math.floor(Math.random()*12)+ 1).toFixed(0);
  var year = getRndInteger(1900,2019).toFixed(0);
  if(month=="9" |month=="4" |month=="6" |month=="11"){
    day = (Math.floor(Math.random()*30)+ 1).toFixed(0);
  }
  else{
    day = (Math.floor(Math.random()*31)+ 1).toFixed(0);
  }
  if(parseInt(day)<10){
    day = "0"+day;
  }
  if(parseInt(month)<10){
    month = "0"+month;
  }
  return year+"-"+month+"-"+day;
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
function getRandomFname(){
  var gender = Math.floor(Math.random() * 2);
  var name;
  counter++;
  if(gender == 0){
    isGirl = true;
    name = girlsNames[Math.floor(Math.random() * girlsNames.length)];
    firstnames =  name;
    return name;
  }
  else{
    isGirl = false;
    name = boysNames[Math.floor(Math.random() * boysNames.length)];
    firstnames = name;
    return name;
  }
}
function getRandomSname(){
  var name = surnames[Math.floor(Math.random()*surnames.length)];
  secondnames = name;
  return name;
}
function getRandomTitle(){
  if(isGirl){
    return femaleTitle[Math.floor(Math.random() * femaleTitle.length)];
  }
  else if(counter%6==0){
    return otherTitle[Math.floor(Math.random() * otherTitle.length)];
  }
  else{
    return "Mr";
  }
}
function getRandomEmail(){
  var num = Math.floor(Math.random()*4);
  var email;
  var dot = ".";
  var random = Math.floor(Math.random()*100);
  var domain = domains[Math.floor(Math.random()*domains.length)];
  if(num==0){
    email  = firstnames.concat(dot,secondnames,domain);
  }
  else if(num==1){
    email = firstnames.concat(random,secondnames,domain);
  }
  else if(num==2){
    email = firstnames.substring(0,1).concat(secondnames,domain);
  }
  else{
    email = firstnames.concat(dot,secondnames,random,domain);
  }
  return email;
}
function getRandomPhoneNum(){
  var phone = "08" + getRndInteger(100000,999999).toFixed(0);
  return phone;
}
function getRandomAddressHome(){
  var addr;
  var num1 = Math.floor(Math.random()*add1.length);
  var num2 = Math.floor(Math.random()*add1.length);
  var num3 = Math.floor(Math.random()*town.length);
  var num4 = Math.floor(Math.random()*counties.length);

  var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var letter1 = string.charAt(Math.floor(Math.random()*string.length));
  var randomNum1 = Math.floor(Math.random()*99)+10;
  var letter2 = string.charAt(Math.floor(Math.random()*string.length));
  var letter3 = string.charAt(Math.floor(Math.random()*string.length));
  var randomNum2 = Math.floor(Math.random()*99)+10;
  var eircode = letter1.concat(randomNum1.toFixed(0),letter2, letter3, randomNum2.toFixed(0));
  addr = add1[num1].concat(",",add1[num2],",",town[num3],",",counties[num4],",",eircode);
  return addr;
}
function getRandomAddressShip(){
  var addr;
  var num1 = Math.floor(Math.random()*add1.length);
  var num2 = Math.floor(Math.random()*add1.length);
  var num3 = Math.floor(Math.random()*town.length);
  var num4 = Math.floor(Math.random()*counties.length);

  var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var letter1 = string.charAt(Math.floor(Math.random()*string.length));
  var randomNum1 = Math.floor(Math.random()*99)+10;
  var letter2 = string.charAt(Math.floor(Math.random()*string.length));
  var letter3 = string.charAt(Math.floor(Math.random()*string.length));
  var randomNum2 = Math.floor(Math.random()*99)+10;
  var eircode = letter1.concat(randomNum1.toFixed(0),letter2, letter3, randomNum2.toFixed(0));
  addr = add1[num1].concat(",",add1[num2],",",town[num3],",",counties[num4],",",eircode);
  return addr;
}
