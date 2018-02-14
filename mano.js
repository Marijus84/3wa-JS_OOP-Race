let kiekis = prompt("Kiek masinu turi lenktyniauti?",5);
kiekis = parseInt(kiekis)

if (!((Number.isInteger(kiekis)) && (kiekis >0))) {
    alert("Masinu kiekis turi buti sveikasis skaicius");
  }

let atstumas = prompt("Koki atstuma turi vaziuoti?",100);
atstumas = parseInt(atstumas)

if (!((Number.isInteger(atstumas)) && (atstumas >0))) {
    alert("Atstumas turi buti sveikasis skaicius");
  }

let Masina = [];

function Car(pav) {
  this.marke = pav;
  this.greitis = 0;
  this.atstumas = 0;
  console.log("Sukuriau masina " + pav);
}

Car.prototype.speedup = function(s){
  this.greitis += s;
}

Car.prototype.slowdown = function(s){
  this.greitis -= s;
  if (this.greitis < 0) {
    this.greitis = 0;
  }
}

Car.prototype.movement = function(){
  this.atstumas = this.atstumas + (this.greitis * 0.5);
}



for (let i = 0; i < kiekis; i++) {
   Masina[i] =  new Car(i+1);
   shape = $("<div></div>");
   shape.attr("id", i)
   shape.css("position", "absolute");
   shape.css("top", i*80+80);
   shape.css("width","100px");
   shape.css("height","50px");
   shape.css("border-width", "5px");
   shape.css("border-style", "solid");
   shape.appendTo("body");
   line = $("<div></div>");

   line.css("position", "absolute");
  line.css("top", 80);
   line.css("left", atstumas*3+100);
   line.css("width","5px");
   line.css("height","600px");
   line.css("border-width", "5px");
   line.css("border-color", "red");
   line.css("border-style", "solid");
   line.appendTo("body");

}

var move = setInterval(moving, 500);
var pacek = setInterval(pace, 2000);

pace();
moving();

function moving (){


  //shape.remove();
  for (let i = 0; i < kiekis; i++) {

    Masina[i].movement();
    //shape = $("<div></div>");
    //shape.css("position", "absolute");
    //shape.css("top", i*80+80);
    $("#" + i).css("left", Masina[i].atstumas*3);
    $("#" + i).text("Atstumas:" + Masina[i].atstumas + " Greitis: "+Masina[i].greitis);
  //  shape.css("width","50px");
  //  shape.css("height","50px");
  //  shape.css("border-width", "5px");
  //  shape.css("border-style", "solid");
  //  shape.appendTo("body");
 }

  //  let node = document.createElement("p");
  //  let textnode = document.createTextNode("Masina "+ Masina[i].marke +" nuvaziavo: " + Masina[i].atstumas);
  //  node.appendChild(textnode);
  //  document.getElementById('divas').appendChild(node);


  for (let i = 0; i < kiekis; i++) {
    let win = 0;
    if (Masina[i].atstumas > atstumas) {
      clearInterval(move);
      clearInterval(pacek);
      let maks = 0;
      let info;
      for (var j = 0; j < kiekis; j++) {
        if (Masina[j].atstumas > maks) {
          maks = Masina[j].atstumas;
          info = Masina[j].marke;
        }
      }
      let textnode2 = document.createTextNode("Laimejo masina "+ info);
      document.getElementById('laimejo').appendChild(textnode2);
    }

  }

}

function pace(){
  for (let i = 0; i < kiekis; i++) {
    let kryptis = Math.floor((Math.random() * 2));
    if (kryptis == 1) {
      Masina[i].speedup( Math.floor((Math.random() * 5) + 1));
      console.log(Masina[i].greitis);
    } else {
        Masina[i].slowdown( Math.floor((Math.random() * 5) + 1));
      }
    }
  }
