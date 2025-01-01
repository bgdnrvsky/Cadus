<?php

namespace Cadus\core;

/**
 * Class ResponseEntity
 *
 * A utility class for standardizing HTTP responses in a web application.
 * This class encapsulates the status, message, HTTP status code, and any additional data
 * to be included in the response, providing a consistent response structure.
 */
class ResponseEntity
{
    /**
     * @var string The status of the response (e.g., "success", "error").
     */
    private string $status;

    /**
     * @var string A message providing details about the response.
     */
    private string $message;

    /**
     * @var int The HTTP status code associated with the response.
     */
    private int $code;

    /**
     * @var array|null Additional data to include in the response (optional).
     */
    private ?array $additionalData;

    /**
     * Constructor.
     *
     * @param string $status The response status (e.g., "success" or "error").
     * @param string $message A message describing the response.
     * @param int $code The HTTP status code for the response.
     * @param array|null $additionalData Optional additional data to include in the response.
     */
    public function __construct(string $status, string $message, int $code, ?array $additionalData = null) {
        $this->status = $status;
        $this->message = $message;
        $this->code = $code;
        $this->additionalData = $additionalData;
    }

    /**
     * Creates a success response.
     *
     * @param string $message A success message.
     * @param array $additionalData Optional additional data to include in the response.
     *
     * @return self A new instance of ResponseEntity representing a success response.
     */
    public static function success(string $message, array $additionalData = []): self {
        return new self("success", $message, 200, $additionalData);
    }

    /**
     * Creates an error response.
     *
     * @param string $message An error message.
     * @param int $code The HTTP status code for the error (default is 500).
     *
     * @return self A new instance of ResponseEntity representing an error response.
     */
    public static function error(string $message, int $code = 500): self {
        return new self("error", $message, $code);
    }

    /**
     * Sends the response to the client.
     *
     * This method sets the HTTP response code and outputs the response as a JSON object.
     *
     * @return void
     */
    public function send(): void {
        http_response_code($this->code);

        echo json_encode($this->toArray());
    }

    /**
     * Converts the response entity to an associative array to be encoded as JSON.
     *
     * @return array An array representation of the response.
     */
    private function toArray(): array {
        return [
            'status' => $this->status,
            'message' => $this->message,
            'additionalData' => $this->additionalData
        ];
    }
}