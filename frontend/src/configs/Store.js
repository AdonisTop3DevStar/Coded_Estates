import React from 'react';
import { createStore } from 'state-pool';

export const store = createStore();

const Store = {
    Mode : true,
    VerifyMode : true
}

store.setState(Store);