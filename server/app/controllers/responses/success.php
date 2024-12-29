<?php

namespace Cadus\controllers\responses;


function success($message, $data = null): false|string {
    $response = array(
        'status' => 'success',
        'message' => $message,
        'data' => $data
    );

    http_response_code(200);

    return json_encode($response);
}