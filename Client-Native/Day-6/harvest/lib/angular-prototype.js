

    //(3) Framwork Functions 

    
    function clearRows(){

    rows = tblEmployee.children[1].childNodes;
    rows.forEach( r => { r.classList.remove("selected"); }  ); 

    }
    
    
    function selectRow(emp){ 
        rows = tblEmployee.children[1].childNodes;
            rows.forEach( r => { 
                if(JSON.parse(r.getAttribute("obj")).id == emp.id)  
                    r.classList.add("selected"); 
            });  

    }

    function fillCombo(combo, data){ 

        data.forEach(   d => {             
            txt = document.createTextNode( d.name ); 
            opt = document.createElement("option");    
            opt.setAttribute("value",JSON.stringify(d));     
            opt.appendChild(txt); 
            combo.appendChild(opt); 
           }    );

    }

    
    function fillTable(table, data, binders, headers){ 

        table.children[0].innerHTML=""; 

        headrow = document.createElement("tr");

        headers.forEach( h => { 
            thText = document.createTextNode( h );
            th = document.createElement("th"); 
            th.appendChild(thText);
            headrow.appendChild(th);
        } ); 

        table.children[0].appendChild(headrow); 

        table.children[1].innerHTML=""; 

       
        data.forEach(   e => {  
        
        row = document.createElement("tr"); 
        row.setAttribute("obj",JSON.stringify(e)); 
            

        for (i in binders) {
            if(i==1)
            tdtext = document.createTextNode( e[binders[i]].name );
            else
            tdtext = document.createTextNode( e[binders[i]] );
            td = document.createElement("td"); 
            td.appendChild(tdtext);
            row.appendChild(td);
        }

        //row.addEventListener("click", fillForm); 

        row.addEventListener("click", function(){  fillForm(this);  } );

        table.children[1].appendChild(row);       

        }    );

    }

 