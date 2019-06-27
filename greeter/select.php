<?php
foreach ($_REQUEST as $key=>$value) {
  echo "key is $key, value is $value" . "<br />";
}
$gender = $_REQUEST['gender'];

if ($gender == 'male') {
    echo "Hello sir!";
}
elseif ($gender == 'female') {
    echo "Hello ma'am!";
}
else {
    echo "What gender is that?";
}
?>
