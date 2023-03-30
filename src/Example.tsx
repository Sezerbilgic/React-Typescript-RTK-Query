import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { queryApi, useGetDataQuery } from './services/apiQuery';
import { baseQueryApi } from './services/exampleBaseQuery';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import store from './store/config';
import { useDeleteDataMutation } from './services/crud';

function Example() {
  const { post } = useGetDataQuery("Query", {
    selectFromResult: ({ data }) => ({
      post: data?.find((post) => post.id === "3")
    })
  });

  const { data, error, isLoading } = useGetDataQuery("Query");
console.log(data, post);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Example;
