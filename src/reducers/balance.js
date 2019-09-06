import * as constants from "../actions/constants";
import { read_cookie, bake_cookie } from "sfcookies";

const BALANCE_COOKIE = "BALANCE_COOKIE";

const balance = (state = 0, action) => {
  let balance;
  console.log(action.type)
    switch (action.type) {
      case constants.SET_BALANCE:
          balance =  action.balance;
          break;
      case constants.DEPOSIT:
          console.log(action.deposit)
          if(action.deposit !== undefined){
              balance = state + action.deposit;
          }
          else{
              balance = state;
          }

          break;
      case constants.WITHDRAW:
          if(action.withdraw !== undefined){
              balance = state - action.withdraw;
          }
          else{
              balance = state;
          }
          break;
      default:
          balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state;
  }

  bake_cookie(BALANCE_COOKIE, balance);
  return balance;
};

export default balance;
