function show()
{
       mobile=new Array(' 1. Iphone'," 2. Celkon"," 3. Sony"," 4. Samsung");
       tv=new Array(' 1.Samsung'," 2. SONY"," 3. MI TV"," 4. One Plus");
       laptop=new Array(' 1. Lenovo'," 2. Dell"," 3.Sony"," 4.HP");
       if(document.getElementById("showroom").selectedIndex == "1") 
       {
           
          div=document.getElementById("content");
          if(document.getElementById("con0"))
          document.getElementById("con0").remove();
          if(document.getElementById("con1"))
          document.getElementById("con1").remove();
          if(document.getElementById("con2"))
          document.getElementById("con2").remove();
          if(document.getElementById("con3"))
          document.getElementById("con3").remove();
          i=0;
          mobile.forEach(element => {
          var a=document.createElement('p');
          a.id="con"+i;
          a.innerHTML="Mobile "+element;
          div.appendChild(a);
          i++;
        });
       }
       else if(document.getElementById("showroom").selectedIndex == "2")
       {

          div=document.getElementById("content");
          if(document.getElementById("con0"))
          document.getElementById("con0").remove();
          if(document.getElementById("con1"))
          document.getElementById("con1").remove();
          if(document.getElementById("con2"))
          document.getElementById("con2").remove();
          if(document.getElementById("con3"))
          document.getElementById("con3").remove();
          i=0;
        tv.forEach(element => {
          var a=document.createElement('p');
          a.id="con"+i;
          a.innerHTML="TV "+element;
          div.appendChild(a);
          i++;
        });
       }
       else if(document.getElementById("showroom").selectedIndex == "3")
       {
           div=document.getElementById("content");
           if(document.getElementById("con0"))
          document.getElementById("con0").remove();
          if(document.getElementById("con1"))
          document.getElementById("con1").remove();
          if(document.getElementById("con2"))
          document.getElementById("con2").remove();
          if(document.getElementById("con3"))
          document.getElementById("con3").remove();
          i=0;
        laptop.forEach(element => {
          var a=document.createElement('p');
          a.id="con"+i;
          a.innerHTML="Laptop "+element;
          div.appendChild(a);
          i++;
        });

   
     
   }
   else if(document.getElementById("showroom").selectedIndex == "0")
       {
           div=document.getElementById("content");
           if(document.getElementById("con0"))
           document.getElementById("con0").remove();
           if(document.getElementById("con1"))
          document.getElementById("con1").remove();
           if(document.getElementById("con3"))
          document.getElementById("con3").remove();
          if(document.getElementById("con2"))
          document.getElementById("con2").remove();
          if(document.getElementById("con2"))
          document.getElementById("con2").remove();
        
       }
}