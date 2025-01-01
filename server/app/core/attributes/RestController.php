<?php

namespace Cadus\core\attributes;

use Attribute;

#[Attribute(Attribute::TARGET_CLASS)]
class RestController
{
    private string $path;

    public function __construct(string $path) {
        $this->path = $path;
    }

    public function getPath(): string {
        return $this->path;
    }
}