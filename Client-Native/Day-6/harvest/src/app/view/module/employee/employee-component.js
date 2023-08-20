

    window.addEventListener("load",initialize); 
    
    //<--- Controller and Service ----> 

    //(1)-Initializing Functions 

    function initialize(){
        
        genders=getGenders();
        employees=getEmployees();

        // g1 = new Gender(1,"Male"); 
        // g2 = new Gender(2,"Female");

        // genders = [ g1, g2];  

        // e1 = new Employee(1, "Sunil",genders[0],"567898678V"); 
        // e2 = new Employee(2, "Nimal",genders[0],"345568009V"); 
        // e3 = new Employee(3, "Mala",genders[1],"200068678V"); 
        // e4 = new Employee(4, "Nimal",genders[1],"198965478V");

        // //employees = [ e1, e2, e3, e4 ]; 

        // employees = new Array();
        // employees.push(e1);  
        // employees.push(e2); 
        // employees.push(e3); 
        // employees.push(e4); 

        // console.log(employees.length); 
        // console.log(employees);
        // console.log(JSON.stringify(employees));  
        // console.log(JSON.parse(JSON.stringify(employees))); 


        fillCombo(cmbGender, genders);
        fillCombo(cmbSearchGender, genders);


        binders = ["name","gender","nic"]; 
        headers = ["Name","Gender","NIC"]; 
        
        fillTable(tblEmployee, employees, binders, headers); 

        // regexes = { nic:"^[0-9]{9}V$", name:"^[A-Z][a-z]+$" } ; 

        regexes=getRegexes();

        
    //     btnDelete.setAttribute("disabled","disabled");
    //     btnUpdate.setAttribute("disabled","disabled");  

    //    // console.log(regexes.nic); 

    //    setStyle("initial"); 

    loadForm();

    }  


    function enableButtons(add, upd, del){

    if(add) btnAdd.removeAttribute("disabled");
    else btnAdd.setAttribute("disabled","disabled"); 

    if(upd) btnUpdate.removeAttribute("disabled");
    else btnUpdate.setAttribute("disabled","disabled"); 

    if(del) btnDelete.removeAttribute("disabled");
    else btnDelete.setAttribute("disabled","disabled");     

    }
    

    function setStyle(style){

        txtNic.classList.remove("valid"); 
        txtNic.classList.remove("updated");
        txtNic.classList.remove("invalid");
        txtNic.classList.remove("initial");

        txtName.classList.remove("valid"); 
        txtName.classList.remove("updated");
        txtName.classList.remove("invalid");
        txtName.classList.remove("initial");

        cmbGender.classList.remove("valid"); 
        cmbGender.classList.remove("updated");
        cmbGender.classList.remove("invalid");
        cmbGender.classList.remove("initial");

        txtNic.classList.add(style);
        txtName.classList.add(style);
        cmbGender.classList.add(style);

    }


    function loadForm(){

    employee = new Employee(null, null,null,null); 
    oldemployee = null;     

    txtName.value=""; 
    txtNic.value="";
    cmbGender.value=""; 

    setStyle("initial"); 
    clearRows(); 
    enableButtons(true,false,false);

    }


    //(2) Interactive Functions 


    //(2)(a) Binding Functions for Realtime Binding (Collect/Validate/Bind)

    function bindNic(){  
       
        txtNic.classList.remove("valid"); 
        txtNic.classList.remove("updated");
        txtNic.classList.remove("invalid");
        txtNic.classList.remove("initial");

        nic = txtNic.value; 

        if(nic.match(regexes.nic)){
            employee.nic = nic; 

         if(oldemployee!=null && oldemployee.nic!=employee.nic)
            txtNic.classList.add("updated");
         else
            txtNic.classList.add("valid");
        }
        else{ 
            txtNic.classList.add("invalid");            
            employee.nic = null; 
        }        
    }

    function bindName(){  
        
        txtName.classList.remove("valid"); 
        txtName.classList.remove("updated");
        txtName.classList.remove("invalid");
        txtName.classList.remove("initial");

        name = txtName.value; 

        if(name.match(regexes.name)){
            employee.name = name; 

         if(oldemployee!=null && oldemployee.name!=employee.name)
            txtName.classList.add("updated");
         else
            txtName.classList.add("valid");
        }
        else{ 
            txtName.classList.add("invalid");            
            employee.name = null; 
        }       
        
    }


    function bindGender(){  
        
        cmbGender.classList.remove("valid"); 
        cmbGender.classList.remove("updated");
        cmbGender.classList.remove("invalid");
        cmbGender.classList.remove("initial"); 

        gender = cmbGender.value; 

        if(gender!=""){            
            employee.gender = JSON.parse(gender);

            if(oldemployee!=null && oldemployee.gender!=employee.gender)
            cmbGender.classList.add("updated");
            else 
            cmbGender.classList.add("valid");
        }
        else{ 
            cmbGender.classList.add("invalid");
            employee.gender = null; 
        }
        
    }


    function getErrors(){

        errors = ""; 

        if(employee.name==null){  errors = errors+"\nName is Invalid"; } 
        if(employee.gender==null){ errors = errors+"\nGender not Selected"; } 
        if(employee.nic==null){ errors = errors+"\nNIC is Invalid"; } 

        return errors;

    }


    function add(){
       
       errors = getErrors(); 

       if(errors!=""){ window.alert("You have following Errors, \n"+errors);  }
       else{         
            confirm = window.confirm("Are you sure to add this Employee - "+name);        
            if(confirm){
                employee.id = employees.length+1; 
                employees.push(employee); 
                fillTable(tblEmployee, employees, binders, headers); 
                txtName.value=""; 
                txtNic.value=""; 
                cmbGender.value="";
                setStyle("initial"); 
            }         
       }

    }
    
    
   

    function fillForm(row){ 
              
        x = row.getAttribute("obj"); 
        employee = JSON.parse(x);
        oldemployee = JSON.parse(x); 

        clearRows();
        selectRow(employee); 
        
       txtName.value = employee.name;
        cmbGender.value = JSON.stringify(employee.gender); 
        txtNic.value = employee.nic;

        setStyle("valid"); 
        enableButtons(false,true,true);        
    }


    function getUpdates(){

        updates = ""; 

        if(oldemployee!=null){
            if(oldemployee.name != employee.name) updates = updates + "Name updated\n"; 
            if(oldemployee.nic != employee.nic) updates = updates + "NIC updated\n"; 
            if(oldemployee.gender != employee.gender) updates = updates + "Gender updated\n";
        }

        return updates; 

    }

     
    
    function update(){

        errors = getErrors();        

        if(errors!=""){ window.alert("You have following Errors, \n"+errors);  }
        else{        
        
        updates = getUpdates(); 

        if(updates=="") { window.alert("Nothing to Update"); } 
        else {   
        var confirm = window.confirm("Are you sure to save followings\n\n"+updates); 
        if(confirm){
            var i = employees.findIndex( e => e.id == employee.id );
            employees[i] = employee; 
            fillTable(tblEmployee, employees, binders, headers); 
            window.alert("Successfully Updated"); 
            loadForm();             
            selectRow(employee); 
        }
        }

    }
        
    }

    function deletex(){
       // console.log("delete"); 

       var x = window.confirm("Are you sure to delete the Employee\n\n"+oldemployee.name); 
       if(x){ 
        var index = employees.findIndex( e => e.id === employee.id);
        employees.splice(index, 1);
        fillTable(tblEmployee, employees, binders, headers);
        loadForm();
       }

             


    }

    function clearx(){
     //console.log("Clear"); 

    updates = ""; 
    msg = "Are you suer to clare the Form";

    if(oldemployee!=null){
        if(oldemployee.name != employee.name) updates = updates + "Name updated\n"; 
        if(oldemployee.nic != employee.nic) updates = updates + "NIC updated\n"; 
        if(oldemployee.gender != employee.gender) updates = updates + "Gender updated\n";
    }

    if(updates!="") { 
        msg = "You have following Updates, Are you sure to discard them !!\n\n"+updates; 
    } 
    
     var responce = window.confirm(msg); 

     if(responce){ 
        loadForm();  
    }
    }



    function search(){ 

name = txtSearchName.value; 

if(cmbSearchGender.value!="")
gender =JSON.parse(cmbSearchGender.value); 
else
   gender=null;

rows = tblEmployee.children[1].children; 


//console.log("-"+name+"-"+gender); <-- Test-1 

if(name=="" && gender==null){  window.alert("Nothing to be Searched");  }    //<-- Test-2 

//<-- Test-3 

if(name!="" && gender==null){        
     for( r of rows){                    
         if( r.children[0].innerHTML!= name) 
             r.style.display="none"; 
         else 
             r.style.display="";            
     }    
} 


//<-- Test-4 
if(name=="" && gender!=null){        
     for( r of rows){                    
         if( r.children[1].innerHTML != gender.name) 
             r.style.display="none"; 
         else 
             r.style.display="";            
     }    
}    

//<-- Test-5 
if(name!="" && gender!=null){        
     for( r of rows){                    
         if( r.children[0].innerHTML == name  && r.children[1].innerHTML == gender.name ) 
             r.style.display=""; 
         else 
             r.style.display="none";            
     }    
}    






}


function searchclear(){ 
 //console.log("clear search");  

rows = tblEmployee.children[1].children; 

for( r of rows){ r.style.display=""; } 

txtSearchName.value=""; 
cmbSearchGender.value="unselected"; 

}


