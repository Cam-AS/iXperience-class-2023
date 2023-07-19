import './App.css';

import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const url = 'https://jsonplaceholder.typicode.com/';

  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    // fetch Library

    const res = await fetch(url + 'posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/text',
      },
    });

    const data = await res.json();
    setPosts(data);
  }

  return (
    <div className="text-center">
      <button className="btn btn-primary mt-3" onClick={fetchPosts}>
        Fetch Posts
      </button>

      <div>
        {posts.map((x) => {
          return <div key={x.id}>{x.title}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
