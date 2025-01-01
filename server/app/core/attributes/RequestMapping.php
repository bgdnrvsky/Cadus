<?php

namespace Cadus\core\attributes;

use Attribute;

/**
 * Class RequestMapping
 *
 * A custom attribute used to annotate methods within a controller class.
 * It defines the HTTP method, path, and optional DTO mapper associated with the method,
 * allowing the routing system to map incoming requests to the appropriate handler.
 *
 * @Attribute(Attribute::TARGET_METHOD)
 */
#[Attribute(Attribute::TARGET_METHOD)]
class RequestMapping
{
    /**
     * @var string The relative path for the route (e.g., `/list`).
     */
    private string $path;

    /**
     * @var string The HTTP method for the route (e.g., `GET`, `POST`).
     */
    private string $httpMethod;

    /**
     * @var string|null The fully qualified name of a DTO mapper class (optional).
     */
    private ?string $dtoMapperName;

    /**
     * Constructor.
     *
     * @param string $path The route's relative path.
     * @param string $method The HTTP method (e.g., `GET`, `POST`).
     * @param string|null $dtoMapper Optional DTO mapper class name for transforming request data.
     */
    public function __construct(string $path, string $method, ?string $dtoMapper = null) {
        $this->path = $path;
        $this->httpMethod = strtoupper($method);
        $this->dtoMapperName = $dtoMapper;
    }

    /**
     * Gets the route's relative path.
     *
     * @return string The path associated with the route.
     */
    public function getPath(): string {
        return $this->path;
    }

    /**
     * Gets the HTTP method associated with the route.
     *
     * @return string The HTTP method (e.g., `GET`, `POST`).
     */
    public function getHttpMethod(): string {
        return $this->httpMethod;
    }

    /**
     * Gets the name of the DTO mapper class.
     *
     * @return string|null The name of the DTO mapper class, or `null` if none is set.
     */
    public function getDtoMapperName(): ?string {
        return $this->dtoMapperName;
    }
}