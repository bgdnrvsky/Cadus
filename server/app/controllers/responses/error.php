<?php

namespace Cadus\controllers\responses;

function error($message, $code = 500, $additionalData = null): false|string {
    $response = array(
        'status' => 'error',
        'message' => $message,
        'data' => $additionalData
    );

    http_response_code($code);

    return json_encode($response);
}