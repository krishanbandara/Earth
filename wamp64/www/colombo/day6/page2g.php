<?php

$gen="";

if(isset($_GET['gend']))
$gen=$_GET['gend'];


$nam="";

if(isset($_GET['name']))
$nam=$_GET['name'];

//echo("A-".$gen."-A");

$names = array("Nimal","Sunil","Mala","Bimal");
$nic= array("142536475V","546354673V","453647587V","867564756V");
$genders=array("Male","Male","Female","Male");

?>

<html>
<head>
  <title>Harvest Super</title>
</head>
<body>
<h1>Employee Details Management</h1>
<table border="1>">
<thead><tr><th>Name</th><th>Gender</th><th>Nic</th></tr></thead>
<tbody>

<?php

for($i=0;$i<count($names);$i++){
if($gen!="" && $gen!=$genders[$i] || $nam!="" && $nam!=$names[$i])  
continue;  
echo ('<tr><td>'.$names[$i].'</td><td>'.$genders[$i].'</td><td>'.$nic[$i].'</td></tr>');

}


// for($i=0;$i<count($names);$i++){
// if($nam!="" && $nam!=$names[$i])  
// continue;  
// echo ('<tr><td>'.$names[$i].'</td><td>'.$genders[$i].'</td><td>'.$nic[$i].'</td></tr>');

// }

?>

</tbody>


</table>


</body>

</html>