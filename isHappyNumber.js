"use strict";
export default function isHappyNumber(goal) {
   let itCount = 0;
    goal = goal ** 2;
    for (let i = 0; i < 10; i++) {
        goal = goal.toString().split('');
        let temp = 0;
        for (let j = 0; j < goal.length; j++) {
            temp += goal[j] ** 2;
        }
        goal = temp;
        if (goal === 1) {
            return 'result is ' + goal + ' yes, it is magic number ';
        }
    }
    return 'result is ' + goal + ' it is ordinary number ';
}