<?php 
$Server='localhost';
$UserDB='root';
$PasswordDB='qazwsx123$';
$NameDB='Casino';

$Conex=new mysqli($Server,$UserDB,$PasswordDB,$NameDB) or die ("error al conectar".mysql_error());

if ($Conex->connect_errno) {
    echo "Fallo al conectar a MySQL: (" . $Conex->connect_errno . ") " . $Conex->connect_error;
}
			

?>

