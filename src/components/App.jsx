import user from './user.json';
import Statistics from './Statistics';
import data from './data.json';
import FriendList from './FriendList';
import friends from './friends.json';
import TransactionsHistory from './TransactionsHistory';
import transactions from './transactions.json';

export const App = () => {
  return (
    <div className="profile">
      <div className="description">
        <img src={user.avatar} alt="User avatar" className="avatar" />
        <p className="name">{user.username}</p>
        <p className="tag">@{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label" id="label_1">
            Followers
          </span>
          <span className="quantity">{user.stats.followers}</span>
        </li>
        <li>
          <span className="label" id="label_2">
            Views
          </span>
          <span className="quantity">{user.stats.views}</span>
        </li>
        <li>
          <span className="label" id="label_3">
            {' '}
            Likes
          </span>
          <span className="quantity">{user.stats.likes}</span>
        </li>
      </ul>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionsHistory items={transactions} />
    </div>
  );
};
