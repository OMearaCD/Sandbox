<?php
// headers
header('Content-type: text/csv');
header('Content-Disposition: attachment; filename="carComparison.csv"');
 
// create a file pointer
$file = fopen('php://output', 'w'); //*
 
// array
$list = array(
array('-', 'car type', 'horsepower', 'engine', 'wheelbase', 'condition'),
    array('Car 1', $_POST['carType'], $_POST['horsepower'], $_POST['engine'], $_POST['wheelbase'], $_POST['condition']),
    array('Car 2', $_POST['carType2'], $_POST['horsepower2'], $_POST['engine2'], $_POST['wheelbase2'], $_POST['condition2'])
);
 
// output each row
foreach ($list as $row)  //*
{
fputcsv($file, $row);  //*
}
 
exit();  //*

?>