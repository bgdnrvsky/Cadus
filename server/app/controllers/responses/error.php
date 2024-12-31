<?php

namespace Cadus\controllers\responses;

function error(string $message, int $code = 500, ?array $additionalData = null): false|string {
    $response = array(
        'status' => 'error',
        'message' => $message,
        'data' => $additionalData
    );

    http_response_code($code);

    return json_encode($response);
}