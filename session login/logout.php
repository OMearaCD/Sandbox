<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
session_unset(); 
session_destroy(); 
?>
<p>You've been logged out! <a href="form.html">Click here</a> to log back in, or <a href="session.php">click here</a> to make sure you logged out.</p>
</body>
</html>
