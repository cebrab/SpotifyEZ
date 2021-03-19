import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from '../store/store'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
    <style global jsx>{`
    html,
    body,
    body > div:first-child,
    div#__next,
    div#__next > div {
      height: 100%;
      background: #034143;
      background: -webkit-linear-gradient(top left, #034143, #B64A2F);
      background: -moz-linear-gradient(top left, #034143, #B64A2F);
      background: linear-gradient(to bottom right, #034143, #B64A2F);
    };
    }
  `}</style>
      <Component {...pageProps} />
    </Provider>
  )
}

const makestore = () => store
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp)
