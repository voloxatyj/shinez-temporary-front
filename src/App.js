import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { getData } from './utils/getData';
import { columns } from './utils/columns';

function App() {
  const [articles, setArticles] = useState([]);

  async function getArticles() {
    const { data } = await getData();
    setArticles(data);
  }

  useEffect(() => {
    getArticles();
  });
  return (
    <>
      <Table dataSource={articles} columns={columns} />
    </>
  );
}

export default App;
