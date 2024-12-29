
const BASE_URI: string = "http://localhost:8080";

export function resolveEndpoint(endpoint: string): string {
    return BASE_URI + (endpoint.startsWith("/") ? endpoint : "/" + endpoint);
}