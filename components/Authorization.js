import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAcessToken, setExpiresIn, setIsAuthed } from '../store/actions/authAction'
import { getAuthorizeHref, getHashParams, removeHashParamsFromUrl } from '../auth/Auth'

const Authorization = () => {

  const dispatch = useDispatch()
  const { accessToken, isAuthed } = useSelector(state => state.auth)
  //console.log('Access Token === ', accessToken)
  console.log('isAuthed === ', isAuthed)

  useEffect(() => {
    const params = getHashParams()
    const accessToken = params.access_token
    const expiresIn = params.expires_in

    if (accessToken) {
      dispatch(setAcessToken(accessToken))
      dispatch(setExpiresIn(expiresIn))
      dispatch(setIsAuthed(true))
    }
    removeHashParamsFromUrl()
  }, [])

  return (
    <div>
      {/* { isAuthed === false && */}
        <button
          onClick={() => {
            window.location = getAuthorizeHref()
          }}>
          Authentication
        </button>
      {/* } */}
      { isAuthed === true &&
        <h6>Acess Token :{accessToken}</h6>
      }

    </div>
  )
}

export default Authorization
