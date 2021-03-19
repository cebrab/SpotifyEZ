/** @jsxImportSource @emotion/react */
import Layout from '../components/Layout'
import Authorization from '../components/Authorization'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import UserProfile from '../components/UserProfile'
import Recommendations from '../components/Recommendations'
import UserCurrentPlaylist from '../components/UserCurrentPlaylist'
import RecentlyPlayedSongsView from '../components/RecentlyPlayedSongsView'

import TwoColumnLayout from '../components/TwoColumnLayout'
import Cookies from 'universal-cookie'
import { setAcessToken, setExpiresIn, setIsAuthed } from '../store/actions/authAction'

const Home = () => {

  const dispatch = useDispatch()
  const cookies = new Cookies
  const { isAuthed } = useSelector(state => state.auth)

  useEffect(() => {
    if (cookies.get('IS_AUTHED') === 'true') {
      dispatch(setAcessToken(cookies.get('ACESS_TOKEN')))
      dispatch(setIsAuthed(true))
    }
  }, [])

  return (

    <div>
      <Authorization />
      { isAuthed === true &&
        <>
          <Layout>
            <TwoColumnLayout>
              <UserProfile />
              <RecentlyPlayedSongsView />
            </TwoColumnLayout>
          </Layout>
        </>
      }
    </div>
  )
}

export default Home;
