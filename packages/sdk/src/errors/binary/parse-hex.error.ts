import { TonConnectError } from 'src/errors/ton-connect.error';

/**
 * Thrown when passed hex is in incorrect format.
 */
export class ParseHexError extends TonConnectError {
    info = 'Passed hex is in incorrect format.';

    constructor(...args: ConstructorParameters<typeof TonConnectError>) {
        super(...args);

        Object.setPrototypeOf(this, ParseHexError.prototype);
    }
}
