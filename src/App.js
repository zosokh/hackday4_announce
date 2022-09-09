import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
import { API } from 'aws-amplify';
import { listHackday4s } from './graphql/queries';
import { createHackday4 as createItemMutation, deleteHackday4 as deleteItemMutation } from './graphql/mutations';

const initialFormState = { slack_url: '', slack_channel: '', period_day: '' }

const App = ({ signOut, user }) => {
  const [lists, setLists] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchLists();
  }, []);

  const fetchLists = async () => {
    const apiData = await API.graphql({ query: listHackday4s });
    setLists(apiData.data.listHackday4s.items);
  }

  const createItem = async () => {
    if (!formData.slack_url || !formData.slack_channel || !formData.period_day) return;
    const ret = await API.graphql({ query: createItemMutation, variables: { input: formData } });
    const data = {
      id: ret.data.createHackday4.id,
      slack_url: ret.data.createHackday4.slack_url,
      slack_channel: ret.data.createHackday4.slack_channel,
      period_day: ret.data.createHackday4.period_day
    }
    setLists([ ...lists, data ]);
    setFormData(initialFormState);
  }

  const deleteItem = async ({ id }) => {
    const newItemsArray = lists.filter(item => item.id !== id);
    setLists(newItemsArray);
    await API.graphql({ query: deleteItemMutation, variables: { input: { id } }});
  }
  return (
    <div className="App">
      <h1>アナウンス一覧</h1>
      <input
        onChange={e => setFormData({ ...formData, 'slack_url': e.target.value})}
        placeholder="アナウンスしたいURL"
        value={formData.slack_url}
      />
      <input
        onChange={e => setFormData({ ...formData, 'slack_channel': e.target.value})}
        placeholder="投稿チャンネル"
        value={formData.slack_channel}
      />
      <input
        onChange={e => setFormData({ ...formData, 'period_day': e.target.value})}
        placeholder="期日（YYYY-mm-dd）"
        value={formData.period_day}
      />
      <button onClick={createItem}>アナウンスを登録</button>
      <div style={{marginBottom: 30}}>
        {
          lists.map(item => (
            <div key={item.id || item.slack_url}>
              <p>{item.slack_url}</p>
              <p>{item.slack_channel}</p>
              <p>{item.period_day}</p>
              <button onClick={() => deleteItem(item)}>削除</button>
            </div>
          ))
        }
      </div>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default withAuthenticator(App);