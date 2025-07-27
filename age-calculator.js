const birthday1=document.getElementById("birthday");
const btn1=document.getElementById("btn");
const result1=document.getElementById("result");
var age=null;
function calculateAge()
{
    const info=birthday1.value
    const birthdayDate = new Date(info);
    const presentyear = new Date();
    if(presentyear.getFullYear()>birthdayDate.getFullYear())
    {
        age=presentyear.getFullYear()-birthdayDate.getFullYear();//25
        if(presentyear.getMonth()+1<birthdayDate.getMonth())
        {
            age=age-1;
        }
    }
    else{
        age=0;
    }
    document.getElementById("result").innerHTML=`Your age is ${age} years old`;
}