<?php

$gen = "";
if(isset($_GET['gend']) )
$gen = $_GET['gend'];
echo("A-".$gen."-A");

$name = array("Nimal","Mala","Leela","Saman");

$nic = array("12345678V","12347918V","12345688V","12345325V");

$genders = array("Male","Female","Female","Female");
?>

<html>
<head>
    
    <title>Harvest Super</title>
</head>
<body>
    <h1>Employee Details Managment</h1>
    <table border="1">
        <thead><tr><th>Name</th><th>Gender</th><th>Nic</th></tr></thead>
        <tbody>
            <?php
                //evaluate ' ' courth to double ""
                //2. Using . mark String Concadination 
            for($i=0; $i<count($name); $i++){
            if($gen!="" && $gen!=$genders[$i] );
                echo('<tr><td>'.$name[$i].'</td><td>'.$genders[$i].'</td><td>'.$nic[$i].'</td></tr>');
            }
           ?>
        </tbody>
    </table>
</body>
</html>