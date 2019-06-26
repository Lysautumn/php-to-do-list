<?php

    $to_do_items = [];

    // database connection
    $connection_string = "host=localhost port=5432 dbname=php_to_do";
    $connection = pg_connect($connection_string);

    // db query string
    $query_string = "SELECT * FROM to_do;";

    // setting db response to a variable
    $result = pg_query($connection, $query_string);

    // loop through rows returned from db, push into array
    while($row = pg_fetch_array($result)) {
        $new_to_do = ["id" => $row['id'], "task" => $row['task'], "completed" => $row['completed']];

        array_push($to_do_items, $new_to_do);
    }

    // headers
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    // response: code and array
    http_response_code(200);
    echo json_encode($to_do_items);


?>