<?php

namespace Cadus\core\attributes;

use Attribute;

/**
 * Class RestController
 *
 * A custom attribute used to annotate controller classes.
 * It specifies a base route path for all endpoints defined within the annotated class.
 *
 * This attribute is meant to be used with a routing system, like the `Router` class,
 * to organize and register routes programmatically.
 *
 * @Attribute(Attribute::TARGET_CLASS)
 */
#[Attribute(Attribute::TARGET_CLASS)]
class RestController
{
    /**
     * @var string The base route path for the controller.
     */
    private string $path;

    /**
     * Constructor.
     *
     * @param string $path The base path to associate with the controller (e.g., `/api/resource`).
     */
    public function __construct(string $path) {
        $this->path = $path;
    }

    /**
     * Gets the base path associated with the controller.
     *
     * @return string The base route path.
     */
    public function getPath(): string {
        return $this->path;
    }
}