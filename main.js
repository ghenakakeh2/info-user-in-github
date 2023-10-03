//main vairbels

let theinput=document.querySelector('.getRepose input');
let getbutten=document.querySelector('.getRepose .get-butten');
let reposeData=document.querySelector('.showData');

getbutten.onclick=function(){
    getRepose();
};

//get repose function 
function getRepose(){

   if(theinput.value == ""){
    reposeData.innerHTML="<span> Plase Inter The Github UserName</span>"
   }

   else{
      fetch(`https://api.github.com/users/${theinput.value}/repos`)
      
      
      
      .then((response)=>response.json())
      
      .then((data)=>{
      //emty the continer

        reposeData.innerHTML=" ";
        //loop on data
        data.forEach(repo => {
         let maindivision=document.createElement("div")
      
         let reponame=document.createTextNode(repo.name);
        
         maindivision.appendChild(reponame);
         
         let theurl=document.createElement("a");
         let urlname=document.createTextNode("visit");
         theurl.appendChild(urlname)
         theurl.href=`https://github.com/${theinput.value}/${repo.name}`;
         theurl.setAttribute('target','_blank');       
         maindivision.appendChild(theurl);

          let staresspan=document.createElement('span');
         let starcontent=document.createTextNode(`stares:${repo.stargazers_count}`);
         staresspan.appendChild(starcontent);
         maindivision.appendChild(staresspan);

         maindivision.className='repo-box'







        reposeData.appendChild(maindivision)

            
          if(theinput.value===repo.name){
                  console.log("ok")
          }
        
    
        });

      })


      
   }

}


