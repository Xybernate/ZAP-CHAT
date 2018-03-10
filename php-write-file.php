<?php

$myfile = fopen("newfile.json", "w") or die("Unable to open file!");
$txt = "Mateyo Maikabo\n";
fwrite($myfile, $txt);
$txt = "Ngenda Muliwana\n";
fwrite($myfile, $txt);
fclose($myfile);

?>