/** @jsxImportSource @emotion/react */
import Layout from '../components/Layout'
import Authorization from '../components/Authorization'

import { useSelector } from 'react-redux'
import UserProfile from '../components/UserProfile'
import Recommendations from '../components/Recommendations'
import UserCurrentPlaylist from '../components/UserCurrentPlaylist'


const Home = () => {
  const { isAuthed } = useSelector(state => state.auth)
  return (
    <div>
      <Authorization />
      { isAuthed === true &&
        <>
          <Layout>
            <UserProfile />
            <Recommendations />
            <UserCurrentPlaylist />
          </Layout>
        </>
      }
    </div>
  );
}

export default Home;
