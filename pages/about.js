import Layout from '../components/Layout'
import RecentlyPlayedSongsView from '../components/RecentlyPlayedSongsView'
import TwoColumnLayout from '../components/TwoColumnLayout'

const About = () => {
  return (
      <Layout>
        <TwoColumnLayout>
          <RecentlyPlayedSongsView/>
        </TwoColumnLayout>
      </Layout>
  )

}

export default About;
