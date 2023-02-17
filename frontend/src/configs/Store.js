import React from 'react';
import { createStore } from 'state-pool';

export const store = createStore();

const Store = {
    Mode : true,
    VerifyMode : true,
    Connected : false
}

store.setState(Store);