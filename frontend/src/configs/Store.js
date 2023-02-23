import React from 'react';
import { createStore } from 'state-pool';

export const store = createStore();

const Store = {
    Mode : true,
    VerifyMode : true,
    Connected : false,
    WalletModalShow : false,
    PropertiesTabActiveNum : 1,
    VerifyInfo : {
        step : 0,
        place : [],
        tPlace : 0,
        address : "",
        rInfo : [1, 1, 1, 1],
        gPlace : [],
        
    }
}

store.setState(Store);