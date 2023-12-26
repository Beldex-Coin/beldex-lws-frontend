
const HostedMoneroAPIClient = require('@bdxi/beldex-hosted-api')

function NewHydratedContext(initialContext: {} | null) {
    initialContext = initialContext || {}

    const context: any = initialContext != null ? initialContext : {}

    context.hostedMoneroAPIClient = new HostedMoneroAPIClient({
        appUserAgent_product: process.env.APP_NAME,
        appUserAgent_version: process.env.APP_VERSION,
        apiUrl: process.env.SERVER_URL,
        request_conformant_module: require('xhr')
    }, context)

    return context;
}

export default NewHydratedContext;