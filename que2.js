function showNotification(){
  let elem=document.getElementById('notify');
let elemNew=document.createElement('div');
elemNew.setAttribute("class", "alert alert-success");
let nodeText=document.createTextNode('Andrew liked your picture.');
elemNew.appendChild(nodeText);
elem.appendChild(elemNew);
};
setTimeout(()=>{
  showNotification();
},3000);

function showPopup(){
  
let elem=document.getElementById('popup');
let elemNew=document.createElement('div');
elemNew.setAttribute("class", "modal");
elemNew.setAttribute("id", "myModal");
elem.appendChild(elemNew);

elemNew2=document.createElement('div');
elemNew2.setAttribute('class','modal-dialog');
elemNew2.setAttribute('id','myid');
document.getElementById('myModal').appendChild(elemNew2);

elemNew3=document.createElement('div');
elemNew3.setAttribute('class','modal-content');
elemNew3.setAttribute('id','myid2');
document.getElementById('myid').appendChild(elemNew3);

let elemNew5=document.createElement('div');
elemNew5.setAttribute("class", "modal-body");
elemNew5.setAttribute("id", "myid3");
let nodeText2=document.createTextNode('user email');
elemNew5.appendChild(nodeText2);
document.getElementById('myid2').appendChild(elemNew5);

elemNew4=document.createElement('input');
elemNew4.setAttribute('type','text');
elemNew4.setAttribute('name','email');
elemNew4.setAttribute('placeholder','write your email id');
document.getElementById('myid3').appendChild(elemNew4);
}
setTimeout(()=>{
  showPopup();
},4000);

  // let elem1=document.getElementById('popup');
  // let eleMain=document.createElement('div');
  // eleMain.setAttribute('id','myModal')
  // eleMain.setAttribute('class','modal');
  // elemNew2=eleMain.createElement('div').setAttribute('class','modal-dialog');
  // eleMain.appendChild(elemNew2);
  // elem.appendChild(eleMain);
// elemNew3=elemNew2.createElement('div').setAttribute('class','modal-content');
// elemNew2.appendChild(elemNew3);
// elem1.appendChild(eleMain);
