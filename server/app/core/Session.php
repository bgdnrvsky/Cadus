<?php

namespace Cadus\core;

abstract class Session
{
    private static string $AUTH_KEY = 'authenticated_member';

    public static function save(string $key, $value) {
        $_SESSION[$key] = $value;

        return $value;
    }

    public static function read(string $key): mixed {
        return $_SESSION[$key];
    }

    public static function has(string $key): bool {
        return isset($_SESSION[$key]);
    }

    public static function isAuthenticated(): bool {
        return self::has(self::$AUTH_KEY);
    }

    public static function authenticatedMember(): mixed {
        return self::read(self::$AUTH_KEY);
    }

    public static function setAuthenticatedMember($member): mixed {
        return self::save(self::$AUTH_KEY, $member);
    }

    public static function start(): void {
        session_start();
    }

    public static function destroy(): void {
        unset($_SESSION[self::$AUTH_KEY]);
        session_unset();
        session_destroy();
    }
}