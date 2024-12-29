<?php

namespace Cadus\controllers\responses;

function error($message, $code = 500, $data = null): false|string {
    $response = array(
        'status' => 'error',
        'message' => $message,
        'data' => $data
    );

    http_response_code($code);

    return json_encode($response);
}