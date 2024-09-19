
function asosiyY(){ 
    var div = document.createElement('div'); 
    var ftr = document.getElementById('ftr'); 
    var btn1 = document.createElement('btn1'); 
    var btn2 = document.createElement('btn2'); 
    var btn3 = document.createElement('btn3'); 
    var btn4 = document.createElement('btn4'); 
 
 
 
 
 
    btn1.innerText=" Alimnazarov Muhammadjon"; 
     
    btn2.innerText="Mannonov Amirxon"; 
     
    btn3.innerText="Parmonov Hojimurod"; 
     
    btn4.innerText="Irisqulov Tolibjon"; 
 
    div.style.width="100%"; 
    div.style.height="5vh"; 
    div.style.backgroundColor="red"; 
    div.style.marginTop="5px"; 
 
    btn1.style.width="25%"; 
    btn1.style.height="5vh"; 
    btn1.style.backgroundColor="gold"; 
    btn1.style.position="absolute"; 
    btn1.style.borderRadius="15px"; 
    btn1.style.display="flex" 
    btn1.style.justifyContent="center"; 
    btn1.style.alignItems="center"; 
    btn1.style.color="white"
 
 
     
    btn2.style.width="25%"; 
    btn2.style.height="5vh"; 
    btn2.style.backgroundColor="blue"; 
    btn2.style.position="absolute"; 
    btn2.style.borderRadius="15px"; 
    btn2.style.left="25%"; 
    btn2.style.display="flex" 
    btn2.style.justifyContent="center"; 
    btn2.style.alignItems="center"; 
        btn2.style.color="white"
     
 
     
    btn3.style.width="25%"; 
    btn3.style.height="5vh"; 
    btn3.style.backgroundColor="green"; 
    btn3.style.position="absolute"; 
    btn3.style.borderRadius="15px"; 
    btn3.style.left="50%"; 
    btn3.style.display="flex" 
    btn3.style.justifyContent="center"; 
    btn3.style.alignItems="center"; 
        btn3.style.color="white"
 
 
 
     
    btn4.style.width="25%"; 
    btn4.style.height="5vh"; 
    btn4.style.backgroundColor="yellow"; 
    btn4.style.position="absolute"; 
    btn4.style.borderRadius="15px"; 
    btn4.style.left="75%"; 
    btn4.style.display="flex" 
    btn4.style.justifyContent="center"; 
    btn4.style.alignItems="center"; 
     btn4.style.color="white"
 
 
 
     
    div.appendChild(btn4); 
    div.appendChild(btn3); 
    div.appendChild(btn2); 
    div.appendChild(btn1); 
 
    console.log(div); 
    ftr.appendChild(div); 
} 
 
 
function asosiy1(){ 
    var div =document.createElement('div'); 
    var ftm = document.getElementById('ftm'); 
    var ftm1 = document.createElement('frm1') 
    var ftm2 = document.createElement('ftm2') 
    var ftm3 =document.createElement('ftm3')
 
    ftm1.innerText="Alimnazarov Muhammadjon" 
     
    ftm2.innerText="Mannonov Amirxon" 

    ftm3.innerText="Irisqulov Tolibjon"


 
     
    div.style.width="93%"; 
    div.style.height="5vh"; 
 
 
         
    ftm1.style.width="30%"; 
    ftm1.style.height="2vh"; 
    ftm1.style.backgroundColor="chocolate"; 
    ftm1.style.fontSize="20px" 
    ftm1.style.marginTop="5vh" 
 
    ftm2.style.width="90%"; 
    ftm2.style.height="5vh"; 
    ftm2.style.backgroundColor="green"; 
    ftm2.style.fontSize="20px" 
 
    ftm3.style.width="30%"; 
    ftm3.style.height="5vh"; 
    ftm3.style.backgroundColor="yellow"; 
    ftm3.style.fontSize="20px" 
 

 
    div.appendChild(ftm1) 
    div.appendChild(ftm2) 
    div.appendChild(ftm3)

 
    console.log(div); 
    ftm.appendChild(div); 
}