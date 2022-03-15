<?php


header("Content-type: applcation/json");
header("Access-Control-Allow-Origin: *");

include 'utility/connection.php';

$data = json_decode(file_get_contents("php://input"),true);

if($data!=NULL && count($data)==2 && array_key_exists('param-type',$data) && array_key_exists('param-value',$data)) {
    $filter_param_type = $data['param-type'];
    $filter_param_name = $data['param-value'];
    $sql = "SELECT * FROM product_list where ".$filter_param_type."=\"".$filter_param_name."\"";
    $result = mysqli_query($conn,$sql) or die("Query Evaulution Failed".$sql);

    if(mysqli_num_rows($result)>0){

        $output = mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode($output);
    }
    else{
        echo json_encode(array("message" => "Invalid Request Format"));
    }
}
else{
    echo json_encode(array("message" => "Invalid Request Format"));
}

?>