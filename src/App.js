import React, { Component } from 'react';
import ApolloClient from 'apollo-boost'
import './App.css';
import {Courses} from './courses'
import {ApolloProvider} from 'react-apollo';


const client = new ApolloClient({
    uri: "https://vm8mjvrnv3.lp.gql.zone/graphql"
});

const App = () => (
    <ApolloProvider client={client}>
        <div>
            <Courses/>
        </div>
    </ApolloProvider>
);

export default App;
