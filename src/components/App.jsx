import user from './user/user.json';
import UserName from './user/UserName.jsx';
import Statistics from './stats/Statistics';
import data from './stats/data.json';
import FriendList from './friends/FriendList';
import friends from './friends/friends.json';
import TransactionsHistory from './transactions/TransactionsHistory';
import transactions from './transactions/transactions.json';

export const App = () => {
  return (
    <div className="profile">
      <UserName user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionsHistory items={transactions} />
    </div>
  );
};
