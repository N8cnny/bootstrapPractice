<?php
$str = $_POST['data'];

function palindrome ($str) {
    $length = strlen($str);
    $pivot = ceil($length/2);
    $mod = $length%2;
    if($mod == 0){
        $first = substr($str, 0, $pivot);
        $last = substr($str, $pivot, $length);
        $rev_first = strrev($first);

        if($rev_first == $last){
            return true;
        }
        else {
            return false;
        }
    }
    else {
        $first = substr($str, 0, $pivot-1);
        $last = substr($str, $pivot, $length);
        $rev_first = strrev($first);

        if($rev_first == $last){
            return true;
        }
        else {
            return false;
        }
    }
}

$result = palindrome($input);

if ($result) {
    exit("yah mother fucker");
}
else {

    exit("damn");
}

