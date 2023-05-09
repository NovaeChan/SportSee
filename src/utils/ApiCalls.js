import axios from 'axios';
import { useEffect, useState } from 'react';

import {USER_DATA} from '../mocks/userData.js';
import {USER_ACTIVITY_DATA} from '../mocks/userActivityData.js'

async function getData(mock, userId, dataType){
    if(mock){
        switch(dataType){
            case "activity":
                return USER_ACTIVITY_DATA.find((user) => user.id === parseInt(userId));
            case "session":
                break;
            case "performance":
                break;
            default :
                return USER_DATA.find((user) => user.id === parseInt(userId));
        }
    }
}

export { getData }