require('dotenv').config();
console.log("process.env.APP_VERSIONL:", process.env.APP_VERSION)
import NewHydratedContext from './IndexContextBrowser';
const coreBridgeInstance = require('@bdxi/beldex-app-bridge')

export class Wallet {
    context: any;
    static Login: any;
    constructor(options?: any, context?: any) {
        let self: any = this;
        self.options = options;
        self.context = context;
    }
    async Login() {
        let self = this

        //        let a = coreBridgeInstance.seed_and_keys_from_mnemonic(
        //     "hire muppet erected fully wayside until giving enigma boxes upbeat ignore yoga piano sickness umpire initiate wanted vegan nuns legion mammal luggage border damp boxes",
        //    1
        //   )
        // let b = await coreBridgeInstance({})
        // let a = b.newly_created_wallet('en-GB', 1)
        // console.log("a:aaaaasasasasasasasas",a)
        const coreBridgeInstance = await require('@bdxi/beldex-app-bridge')({})
        const netType: any = (process.env.NETTYPE);
        const config = {
            nettype: parseInt(netType), // critical setting 0 - MAINNET, 2 - STAGENET
            apiUrl: process.env.SERVER_URL,
            version: process.env.APP_VERSION,
            name: process.env.APP_NAME
        }
        const context = NewHydratedContext(config)
        console.log("context.hostedMoneroAPIClient:", context.hostedMoneroAPIClient.LogIn(
            "A1SoB5Yyh9w9JjqJC8VeEuNoRfepFe6q9e7XReTX5WrKHLbFiQhS6w1amdHZ83xyNrM9V71SJ8QWSBF2Xbq9ywWPBVFbcuu",
            "2ad7ad29be7f9090d767ee2ea0fc85e885eb99d3be6c35f9692cd8f2f827c90b",
            false,
            // "da73d59421325631a84810cb55754a8256172117b511e4dde18f7caa1d1c4061",
            // "274a91b5ca82fff10f4c21df06be6a96042b1e1ebd7cdcf9009b98098dd4e80e",
            function (err: any, data: any) {
                console.log("dar:", data)
            }))
        // self = context;
        // self.context.hostedMoneroAPIClient.AddressInfo_returningRequestHandle(
        //     "A1SoB5Yyh9w9JjqJC8VeEuNoRfepFe6q9e7XReTX5WrKHLbFiQhS6w1amdHZ83xyNrM9V71SJ8QWSBF2Xbq9ywWPBVFbcuu",
        //     "2ad7ad29be7f9090d767ee2ea0fc85e885eb99d3be6c35f9692cd8f2f827c90b",
        //     "da73d59421325631a84810cb55754a8256172117b511e4dde18f7caa1d1c4061",
        //     "274a91b5ca82fff10f4c21df06be6a96042b1e1ebd7cdcf9009b98098dd4e80e",
        //     function (
        //         err: any,
        //         total_received: any,
        //         locked_balance: any,
        //         total_sent: any,
        //         spent_outputs: any,
        //         account_scanned_tx_height: any,
        //         account_scanned_block_height: any,
        //         account_scan_start_height: any,
        //         transaction_height: any,
        //         blockchain_height: any,
        //         ratesBySymbol: any
        //     ) {
        //         console.log("nowfil:", err,
        //             total_received,
        //             locked_balance,
        //             total_sent,
        //             spent_outputs,
        //             account_scanned_tx_height,
        //             account_scanned_block_height,
        //             account_scan_start_height,
        //             transaction_height,
        //             blockchain_height,
        //             ratesBySymbol)
        //     })

    }
}