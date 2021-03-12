/** @jsxImportSource @emotion/react */
import Layout from '../components/Layout';
import Authorization from '../components/Authorization'
import UserProfile from '../components/UserProfile'
import Recommendation from '../components/Recommendation'

import store from '../redux/store'
import { Provider } from 'react-redux';
import { css } from '@emotion/react';

import { useSelector } from 'react-redux'
import { getAuth } from '../redux/selectors'

const Home = () => {

  return (
    <Provider store={store}>
      <Layout>
        <Authorization />
      </Layout>
    </Provider>
  );
}

export default Home