<?php
session_start();
?>
<!DOCTYPE html>
<html>
    <body>
        <?php
        
 $_SESSION['fname'] = $_POST['firstname'];
$_SESSION['lname'] = $_POST['lastname'];
echo "Last name is " . $_SESSION['lname'];
?>
        <p><a href="session.php"><button>Go to next page...</button></a></p>
        </body>
</html>