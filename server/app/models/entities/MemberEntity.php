<?php

namespace Cadus\models\entities;

class MemberEntity
{
    private int $id;
    private string $login;
    private string $password;
    private string $dateCreated;

    public function __construct(int $id, string $login, string $password, string $dateCreated) {
        $this->id = $id;
        $this->login = $login;
        $this->password = $password;
        $this->dateCreated = $dateCreated;
    }

    public function getId(): string
    {
        return $this->id;
    }

    public function getLogin(): string
    {
        return $this->login;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    public function getDateCreated(): string
    {
        return $this->dateCreated;
    }
}