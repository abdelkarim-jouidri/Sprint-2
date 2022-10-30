<?php
$id = 7;
    echo "<div class='button-${id}'>ok</div>";    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action = "<?php echo $_SERVER['PHP_SELF'] ?>" method="POST">
        <input name="id" id="<?php echo '7'?>" value="0">
        <input  type="submit" name="submit" value="submit">;
        <input type="hidden" name="update_id" value="7">
    </form>
</body>
</html>



