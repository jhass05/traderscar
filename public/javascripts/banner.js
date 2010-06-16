



//Specify the slider's width (in pixels)
var sliderwidth="730px";
//Specify the slider's height
var sliderheight="90px";
//Specify the slider's slide speed (larger is faster 1-10)
var slidespeed=3;
//configure background color:
slidebgcolor="#FFF";

//Specify the slider's images
var leftrightslide=new Array()
var finalslide=''
leftrightslide[1]='<img src="images/logos/acura.jpg" border=0 alt="Ver modelos de Acura"></a>'
leftrightslide[2]='<img src="images/logos/astonmartin.jpg" border=0 alt="Ver modelos de Aston Martin"></a>'
leftrightslide[3]='<img src="images/logos/audi.jpg" border=0 alt="Ver modelos de Audi"></a>'
leftrightslide[4]='<img src="images/logos/bentley.jpg" border=0 alt="Ver modelos de Bentley"></a>'
leftrightslide[5]='<img src="images/logos/bmw.jpg" border=0 alt="Ver modelos de BMW"></a>'
leftrightslide[6]='<img src="images/logos/buick.jpg" border=0 alt="Ver modelos de Buick"></a>'
leftrightslide[7]='<img src="images/logos/cadillac.jpg" border=0 alt="Ver modelos de Cadillac"></a>'
leftrightslide[8]='<img src="images/logos/chevrolet.jpg" border=0 alt="Ver modelos de Chevrolet"></a>'
leftrightslide[9]='<img src="images/logos/chrysler.jpg" border=0 alt="Ver modelos de Chrysler"></a>'
leftrightslide[10]='<img src="images/logos/dodge.jpg" border=0 alt="Ver modelos de Dodge"></a>'
leftrightslide[11]='<img src="images/logos/ferrari.jpg" border=0 alt="Ver modelos de Ferrari"></a>'
leftrightslide[12]='<img src="images/logos/ford.jpg" border=0 alt="Ver modelos de Ford"></a>'
leftrightslide[13]='<img src="images/logos/gmc.jpg" border=0 alt="Ver modelos de GMC"></a>'
leftrightslide[14]='<img src="images/logos/honda.jpg" border=0 alt="Ver modelos de Honda"></a>'
leftrightslide[15]='<img src="images/logos/hummer.jpg" border=0 alt="Ver modelos de HUMMER"></a>'
leftrightslide[16]='<img src="images/logos/hyundai.jpg" border=0 alt="Ver modelos de Hyundai"></a>'
leftrightslide[17]='<img src="images/logos/infiniti.jpg" border=0 alt="Ver modelos de Infiniti"></a>'
leftrightslide[18]='<img src="images/logos/isuzu.jpg" border=0 alt="Ver modelos de Isuzu"></a>'
leftrightslide[19]='<img src="images/logos/jaguar.jpg" border=0 alt="Ver modelos de Jaguar"></a>'
leftrightslide[20]='<img src="images/logos/jeep.jpg" border=0 alt="Ver modelos de Jeep"></a>'
leftrightslide[21]='<img src="images/logos/kia.gif" border=0 alt="Ver modelos de Kia"></a>'
leftrightslide[22]='<img src="images/logos/lamborghini.jpg" border=0 alt="Ver modelos de Lamborghini"></a>'
leftrightslide[23]='<img src="images/logos/landrover.jpg" border=0 alt="Ver modelos de Land Rover"></a>'
leftrightslide[24]='<img src="images/logos/lexus.gif" border=0 alt="Ver modelos de Lexus"></a>'
leftrightslide[25]='<img src="images/logos/lincoln.jpg" border=0 alt="Ver modelos de Lincoln"></a>'
leftrightslide[26]='<img src="images/logos/lotus.jpg" border=0 alt="Ver modelos de Lotus"></a>'
leftrightslide[27]='<img src="images/logos/maserati.jpg" border=0 alt="Ver modelos de Maserati"></a>'
leftrightslide[28]='<img src="images/logos/maybach.jpg" border=0 alt="Ver modelos de Maybach"></a>'
leftrightslide[29]='<img src="images/logos/mazda.jpg" border=0 alt="Ver modelos de Mazda"></a>'
leftrightslide[30]='<img src="images/logos/mercedes.jpg" border=0 alt="Ver modelos de Mercedes-Benz"></a>'
leftrightslide[31]='<img src="images/logos/mercury.jpg" border=0 alt="Ver modelos de Mercury"></a>'
leftrightslide[32]='<img src="images/logos/mini.jpg" border=0 alt="Ver modelos de MINI"></a>'
leftrightslide[33]='<img src="images/logos/mitsubishi.jpg" border=0 alt="Ver modelos de Mitsubishi"></a>'
leftrightslide[34]='<img src="images/logos/nissan.jpg" border=0 alt="Ver modelos de Nissan"></a>'
leftrightslide[35]='<img src="images/logos/pontiac.jpg" border=0 alt="Ver modelos de Pontiac"></a>'
leftrightslide[36]='<img src="images/logos/porsche.jpg" border=0 alt="Ver modelos de Porsche"></a>'
leftrightslide[37]='<img src="images/logos/rollsroyce.jpg" border=0 alt="Ver modelos de Rolls-Royce"></a>'
leftrightslide[38]='<img src="images/logos/saab.jpg" border=0 alt="Ver modelos de Saab"></a>'
leftrightslide[39]='<img src="images/logos/saleen.jpg" border=0 alt="Ver modelos de Saleen"></a>'
leftrightslide[40]='<img src="images/logos/saturn.jpg" border=0 alt="Ver modelos de Saturn"></a>'
leftrightslide[41]='<img src="images/logos/scion.jpg" border=0 alt="Ver modelos de Scion"></a>'
leftrightslide[42]='<img src="images/logos/smart.jpg" border=0 alt="Ver modelos de smart"></a>'
leftrightslide[43]='<img src="images/logos/subaru.jpg" border=0 alt="Ver modelos de Subaru"></a>'
leftrightslide[44]='<img src="images/logos/suzuki.jpg" border=0 alt="Ver modelos de Suzuki"></a>'
leftrightslide[45]='<img src="images/logos/tesla.jpg" border=0 alt="Ver modelos de Tesla"></a>'
leftrightslide[46]='<img src="images/logos/toyota.jpg" border=0 alt="Ver modelos de Toyota"></a>'
leftrightslide[47]='<img src="images/logos/volkswagen.jpg" border=0 alt="Ver modelos de Volkswagen"></a>'
leftrightslide[48]='<img src="images/logos/volvo.jpg" border=0 alt="Ver modelos de Volvo"></a>'
//Specify gap between each image (use HTML):
var imagegap="&nbsp;&nbsp;&nbsp;"

//Specify pixels gap between each slideshow rotation (use integer):
var slideshowgap=10


////NO NEED TO EDIT BELOW THIS LINE////////////

var copyspeed=slidespeed
leftrightslide='<nobr>'+leftrightslide.join(imagegap)+'</nobr>'
var iedom=document.all||document.getElementById
if (iedom)
document.write('<span id="temp" style="visibility:hidden;position:absolute;top:-100px;left:-9000px">'+leftrightslide+'</span>')
var actualwidth=''
var cross_slide, ns_slide

function fillup(){
if (iedom){
cross_slide=document.getElementById? document.getElementById("test2") : document.all.test2
cross_slide2=document.getElementById? document.getElementById("test3") : document.all.test3
cross_slide.innerHTML=cross_slide2.innerHTML=leftrightslide
actualwidth=document.all? cross_slide.offsetWidth : document.getElementById("temp").offsetWidth
cross_slide2.style.left=actualwidth+slideshowgap+"px"
}
else if (document.layers){
ns_slide=document.ns_slidemenu.document.ns_slidemenu2
ns_slide2=document.ns_slidemenu.document.ns_slidemenu3
ns_slide.document.write(leftrightslide)
ns_slide.document.close()
actualwidth=ns_slide.document.width
ns_slide2.left=actualwidth+slideshowgap
ns_slide2.document.write(leftrightslide)
ns_slide2.document.close()
}
lefttime=setInterval("slideleft()",30)
}
window.onload=fillup

function slideleft(){
if (iedom){
if (parseInt(cross_slide.style.left)>(actualwidth*(-1)+8))
cross_slide.style.left=parseInt(cross_slide.style.left)-copyspeed+"px"
else
cross_slide.style.left=parseInt(cross_slide2.style.left)+actualwidth+slideshowgap+"px"

if (parseInt(cross_slide2.style.left)>(actualwidth*(-1)+8))
cross_slide2.style.left=parseInt(cross_slide2.style.left)-copyspeed+"px"
else
cross_slide2.style.left=parseInt(cross_slide.style.left)+actualwidth+slideshowgap+"px"

}
else if (document.layers){
if (ns_slide.left>(actualwidth*(-1)+8))
ns_slide.left-=copyspeed
else
ns_slide.left=ns_slide2.left+actualwidth+slideshowgap

if (ns_slide2.left>(actualwidth*(-1)+8))
ns_slide2.left-=copyspeed
else
ns_slide2.left=ns_slide.left+actualwidth+slideshowgap
}
}

if (iedom||document.layers){
with (document){
document.write('<table border="0" cellspacing="0" cellpadding="0"><td>')
if (iedom){
write('<div style="position:relative;width:'+sliderwidth+';height:'+sliderheight+';overflow:hidden">')
write('<div style="position:absolute;width:'+sliderwidth+';height:'+sliderheight+';background-color:'+slidebgcolor+'" onMouseover="copyspeed=0" onMouseout="copyspeed=slidespeed">')
write('<div id="test2" style="position:absolute;left:0px;top:15px"></div>')
write('<div id="test3" style="position:absolute;left:-1000px;top:15px"></div>')
write('</div></div>')
}
else if (document.layers){
write('<ilayer width='+sliderwidth+' height='+sliderheight+' name="ns_slidemenu" bgColor='+slidebgcolor+'>')
write('<layer name="ns_slidemenu2" left=0 top=0 onMouseover="copyspeed=0" onMouseout="copyspeed=slidespeed"></layer>')
write('<layer name="ns_slidemenu3" left=0 top=0 onMouseover="copyspeed=0" onMouseout="copyspeed=slidespeed"></layer>')
write('</ilayer>')
}
document.write('</td></table>')
}
}

