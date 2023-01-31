import { TonConnectError } from 'src/errors/ton-connect.error';

/**
 * Thrown when passed DappMetadata is in incorrect format.
 */
export class DappMetadataError extends TonConnectError {
    info = 'Passed DappMetadata is in incorrect format.';

    constructor(...args: ConstructorParameters<typeof TonConnectError>) {
        super(...args);

        Object.setPrototypeOf(this, DappMetadataError.prototype);
    }
}
