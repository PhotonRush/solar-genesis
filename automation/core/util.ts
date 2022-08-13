import { mkdirSync } from 'fs';

export function ensure(location: string): void {
    mkdirSync(location, {
        recursive: true,
    });
}
