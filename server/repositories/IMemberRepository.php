<?php

namespace Cadus\repositories;


interface IMemberRepository
{
    public function registerMember(/* */);

    public function memberExists(/* */);

    public function isAdministrator(/* */);
}