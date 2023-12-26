
const HostedMoneroAPIClient = require('@bdxi/beldex-hosted-api')

function NewHydratedContext(initialContext: {} | null) {
    initialContext = initialContext || {}

    const context: any = initialContext != null ? initialContext : {}

    context.hostedMoneroAPIClient = new HostedMoneroAPIClient({
        appUserAgent_product: " MyBeldex",
        appUserAgent_version: "1.0.0",
        apiUrl: "api.beldex.dev/",
        request_conformant_module: require('xhr')
    }, context)

    return context;
}

export default NewHydratedContext;