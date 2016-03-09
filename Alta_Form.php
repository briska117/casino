<?php

echo 'dd';
include("Conexion.php");
$Nombre=$_POST['Nombre'];
echo'ff';
$ApPat=$_POST['ApPat'];
$ApMat=$_POST['ApMat'];
$Edad=$_POST['Edad'];
$Correo=$_POST['Email'];
$Telefono=$_POST['Telefono'];
$Sucursal=$_POST['Sucursal'];

echo $Nombre,"<br>",$ApPat,"<br>",$ApMat,'<br>';
echo $Edad,"<br>";
echo $Correo,"<br>",$Telefono,"<br>",$Sucursal,"<br>";
$query="Call Alta_Registro("."'$Nombre'".","."'$ApPat'".","."'$ApMat'".",".$Edad.","."'$Correo'".",".$Telefono.","."'$Sucursal'".")";
echo $query,'<br>';
if(!$Conex->query($query)){

	echo 'fallo';
}else{

echo 'exito';
}



?>