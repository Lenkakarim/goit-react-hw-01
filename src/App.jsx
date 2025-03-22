import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";

import Profile from "./components/profile/profile";
import userData from "./userData.json"

import FriendList from "./components/FriendList/FriendList"
import friends from "./friends.json";

import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};

export default App;

