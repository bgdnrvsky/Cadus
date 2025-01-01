<?php

namespace Cadus\core;

class ResponseEntity
{
    private string $status;

    private string $message;

    private int $code;

    private ?array $additionalData;

    public function __construct(string $status, string $message, int $code, ?array $additionalData = null) {
        $this->status = $status;
        $this->message = $message;
        $this->code = $code;
        $this->additionalData = $additionalData;
    }

    public static function success(string $message, array $additionalData = []): self {
        return new self("success", $message, 200, $additionalData);
    }

    public static function error(string $message, int $code = 401): self {
        return new self("error", $message, $code);
    }

    public function send(): void {
        http_response_code($this->code);

        echo json_encode($this->toArray());
    }

    private function toArray(): array {
        return [
            'status' => $this->status,
            'message' => $this->message,
            'additionalData' => $this->additionalData
        ];
    }
}