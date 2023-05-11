// import axios from 'axios';
// import { useEffect, useState } from 'react';

import {USER_DATA} from '../mocks/userData.js';
import {USER_ACTIVITY_DATA} from '../mocks/userActivityData.js'
import {USER_PERFORMANCE_DATA} from '../mocks/userPerformanceData.js'
import { USER_AVG_SESSION_DATA } from '../mocks/userAverageSessionData.js';

async function getData(mock, userId, dataType){
    if(mock){
        switch(dataType){
            case "activity":
                return USER_ACTIVITY_DATA.find((user) => user.userId === parseInt(userId));
            case "session":
                break;
            case "performance":
                return USER_PERFORMANCE_DATA.find((user) => user.userId === parseInt(userId));
            case "average":
                return USER_AVG_SESSION_DATA.find((user) => user.userId === parseInt(userId));
            default :
                return USER_DATA.find((user) => user.id === parseInt(userId));
        }
    }
}

export { getData }