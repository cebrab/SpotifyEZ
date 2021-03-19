import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAcessToken, setExpiresIn, setIsAuthed } from '../store/actions/authAction'
import { getAuthorizeHref, getHashParams, removeHashParamsFromUrl } from '../auth/Auth'
import Cookies from 'universal-cookie'

const Authorization = () => {
  const cookies = new Cookies
  const dispatch = useDispatch()
  const { accessToken, isAuthed } = useSelector(state => state.auth)
  //console.log('Access Token === ', accessToken)
  console.log('isAuthed === ', isAuthed)

  useEffect(() => {
    const params = getHashParams()
    const accessToken = params.access_token
    const expiresIn = params.expires_in

    console.log('COOOOOOOOKIE', document.cookie)

    if (accessToken) {

      document.cookie = accessToken
      // console.log('COOOOOOOOKIE', document.cookie)

      cookies.set('ACESS_TOKEN', accessToken, { path: '/' })
      cookies.set('IS_AUTHED', true, { path: '/' })
      // console.log('COOOOOOOOOOKIE', cookies.get('ACESS_TOKEN'))
      // console.log('AUUUUUUUUUUTH', cookies.get('IS_AUTHED'))
      if (document.cookie !== undefined) {
        dispatch(setAcessToken(document.cookie))
      } else {
        dispatch(setAcessToken(accessToken))
      }
      //dispatch(setExpiresIn(expiresIn))
      dispatch(setIsAuthed(true))
      window.location = getAuthorizeHref()
    }
    removeHashParamsFromUrl()
  }, [])

  return (
    <div>
      {/* { isAuthed === false && */}


      { isAuthed === true &&
        <h6>Acess Token :{accessToken}</h6>
      }

    </div>
  )
}

export default Authorization
