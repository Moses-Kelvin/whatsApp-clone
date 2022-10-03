import React from "react";

import classes from '../../styles/Main.module.css';

import Header from "../chats/Header";

import SearchChats from '../chats/Search';

const Main = () => {
  return (
    <main className={classes.main}>
          <section className={classes.section1}>
            <Header />
            <SearchChats />
          </section>
    </main>
  )
};

export default Main;