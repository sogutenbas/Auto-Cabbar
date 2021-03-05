let brand = "audi"
let model = 2016
let color = "black"
let customer =1
if(customer>4){
    console.log("Uzun sureli musterimiz oldugunuz icin butun marka ve model araciniza bakim yapiyoruz..")
}
else if((color=="red" || color=="black") && (brand=="bmw" || brand=="audi" || brand=="wv")){

if (brand=="bmw" && color=="red" && 2009<model && model<2020){
    console.log("arabaniz isleme alinmistir..")
}
else if((brand=="audi" && 2004<model && model<2011) || (2013<model && model<2021)){
    console.log("arabaniz isleme alinmistir..")
}
else if(brand=="vw" && color=="black" && 2000<model && model<2019){
    console.log("arabaniz isleme alinmistir..")
}
else if(brand=="bmw" && color=="black" && model==2020){
    console.log("arabaniz isleme alinmistir..")
}
else{
    console.log("Uzgunuz bu araca bakim yapamiyoruz..")
}
}

