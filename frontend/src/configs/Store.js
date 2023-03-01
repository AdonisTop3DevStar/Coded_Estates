import React from 'react';
import { createStore } from 'state-pool';

export const store = createStore();

const Store = {
    Mode : "BUY",
    VerifyMode : true,
    Connected : false,
    WalletModalShow : false,
    PropertiesTabActiveNum : 1,
    DetailType : "",
    Header : "RENT"
}

const keys  = Object.keys(Store);

keys.map((key) => {
    store.setState(key, Store[key]);
})
