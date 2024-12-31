<?php

namespace Cadus\core\attributes;

use Attribute;

#[Attribute(Attribute::TARGET_METHOD)]
class RequestMapping
{
    private string $path;

    private string $httpMethod;

    private ?string $dtoMapperName;

    public function __construct(string $path, string $method, ?string $dtoMapper = null) {
        $this->path = $path;
        $this->httpMethod = strtoupper($method);
        $this->dtoMapperName = $dtoMapper;
    }

    public function getPath(): string {
        return $this->path;
    }

    public function getHttpMethod(): string {
        return $this->httpMethod;
    }

    public function getDtoMapperName(): ?string {
        return $this->dtoMapperName;
    }
}