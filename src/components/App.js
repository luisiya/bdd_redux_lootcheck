import React from "react";
import Wallet from "./Wallet";
import Loot from "./Loot";

const App = () => {
    return (
        <div>
            <h2><span>☘</span> LOOT CHECK </h2>
            <hr/>
            <Wallet/>
            <hr/>
            <Loot/>
            <div className="coinLink"><span>Powered by  <a href="https://www.coindesk.com/price"> CoinDesk</a></span></div>
        </div>
    )

};

export default App;