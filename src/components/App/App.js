import './App.css';
import Profile from '../Profile';
import { name, tag, location, avatar, stats } from "../../data/user.json";
import statisticalData from '../../data/statistical-data.json';
import Statistics from '../Statistics';
import friends from '../../data/friends.json';
import FriendsList from '../FriendList';
import transactions from '../../data/transactions.json'
import TransactionHistory from '../TransactionHistory'

function App() {
  return (
    <div className='App'>
      <Profile name={name} tag={tag} location={location} avatar={avatar} stats={stats} />
      <Statistics title={'Upload stats'} stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
