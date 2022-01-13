<!DOCTYPE html>

<html lang="pl" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>Formularz</title>
    <link rel="stylesheet" href="CSS/table.css">
    <script src="Scripts/check.js" type="text/javascript" charset="utf-8" lang="pl"></script>
</head>
<body>
    <?php 
        $file = "odp.json";
        $arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
        //echo json_encode($arr), "\n";
        file_put_contents($file,  json_encode(array($arr,$arr)));
        $file_arr = json_decode(file_get_contents($file), true);
        //echo json_encode($file_arr), "\n";
        array_push($file_arr, $arr);
      //  echo json_encode($file_arr), "\n";
        file_put_contents($file,  json_encode($file_arr));
    ?>
</body>
</html>