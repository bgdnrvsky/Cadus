<?php

namespace Cadus\controllers\responses;


function success($message, $additionalData = null): false|string {
    $response = array(
        'status' => 'success',
        'message' => $message,
        'data' => $additionalData
    );

    http_response_code(200);

    return json_encode($response);
}