for(var i=1; i<=20; i++){
  console.log("INSERT INTO CustomerAddress (CustomerID, AddressID, Home ,Shipping) VALUES ('"+i+"', '"+i+"', '"+genRandom()+"', '"+genRandom()+"');");
}
function genRandom(){
  return Math.floor(Math.random()*2);
}
