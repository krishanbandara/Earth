

   function getEmployees(){

        g1 = new Gender(1,"Male"); 
        g2 = new Gender(2,"Female");

        genders = [ g1, g2];
      

        e1 = new Employee(1, "Sunil",genders[0],"567898678V"); 
        e2 = new Employee(2, "Nimal",genders[0],"345568009V"); 
        e3 = new Employee(3, "Mala",genders[1],"200068678V"); 
        e4 = new Employee(4, "Nimal",genders[1],"198965478V");

        employees = new Array();
        employees.push(e1);  
        employees.push(e2); 
        employees.push(e3); 
        employees.push(e4); 

        return employees;

   }

   