<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include 'utility/connection.php';

$data = json_decode(file_get_contents("php://input"),true);


if($data!=NULL){
    $get_order = $data['order'];
    $sql = "SELECT * FROM product_list ORDER BY price ".$get_order;
    $result = mysqli_query($conn,$sql) or die("InAppropriate Data");

    if(mysqli_num_rows($result)>0){
        $output = mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode($output);
    }
    else{
        echo json_encode(array('message' => 'No Record Found','status'=> false));
    }
}
else{
    echo json_encode(array('message' => "InAppripriate Format")); 
}
