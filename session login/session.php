<?php
session_start();
?>
<!doctype HTML>
<html>
    <body>
    <?php
        echo "First name is " . $_SESSION['fname'];
        ?>
    <p>If you see a first name, way to go! You know how to use sessions! If you don't, you logged out successfully!</p>
        <a href="logout.php"><button>Log out</button></a>
    </body>
</html>