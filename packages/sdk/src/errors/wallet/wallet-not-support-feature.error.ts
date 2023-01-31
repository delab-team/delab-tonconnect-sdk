import { TonConnectError } from 'src/errors/ton-connect.error';

/**
 * Thrown when wallet doesn't support requested feature method.
 */
export class WalletNotSupportFeatureError extends TonConnectError {
    info = "Wallet doesn't support requested feature method.";

    constructor(...args: ConstructorParameters<typeof TonConnectError>) {
        super(...args);

        Object.setPrototypeOf(this, WalletNotSupportFeatureError.prototype);
    }
}
