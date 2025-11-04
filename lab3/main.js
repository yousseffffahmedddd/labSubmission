
const list=document.getElementById('list');
const input=document.getElementById('input_field');

function AddElements(){
    if(input.value==='')
    {
        alert('enter something');
    }
    else{
        //add
    listItem=document.createElement('li');
    listItem.innerHTML=input.value;
    list.appendChild(listItem);
    //remove
     var span=document.createElement('span') ;
    span.innerHTML='/u00d7';
     list.appendChild(span);


    }
    saveData();
    input.innerHTML="";


    


}

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}
function showData()
{
    list.innerHTML=localStorage.getItem("data");
}
function clearAll(){
    list.innerHTML="";
}


document.getElementById("Add_button_clicked").addEventListener('click',function(e){
if(e.target.tagName=="li"){
    e.target.classList.toogle("checked");

    
}
if(e.target.tagName=="span")
{}



    
});

    

    
showData();