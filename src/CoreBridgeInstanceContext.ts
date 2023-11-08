import React from 'react';

interface CoreBridgeInstanceContextScheme {
    beldex_utils: any;
    set_Utils_data: any;
}

export const CoreBridgeInstanceContext = React.createContext<CoreBridgeInstanceContextScheme>({} as CoreBridgeInstanceContextScheme)