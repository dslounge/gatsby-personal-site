import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content:
            'MIT CS grad, experienced FE dev. Focusing on mobile, React Native, UX design, user growth, and building a great team culture.',
        },
        { name: 'keywords', content: 'sample, something' },
        // <!--Twitter -->
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@groundcontrol' },
        {
          name: 'twitter:title',
          content: 'Rafael Mendiola - Software Developer',
        },
        {
          name: 'twitter:description',
          content:
            'MIT CS grad, experienced FE dev. Focusing on mobile, React Native, UX design, user growth, and building a great team culture.',
        },
        { name: 'twitter:image', content: 'http://www.raf.fm/img/profile.jpg' },

        // <!-- Facebook -->
        { name: 'og:url', content: 'http://www.raf.fm' },
        { name: 'og:title', content: 'Rafael Mendiola - Software Developer' },
        {
          name: 'og:description',
          content:
            'MIT CS grad, experienced FE dev. Focusing on mobile, React Native, UX design, user growth, and building a great team culture.',
        },
        { name: 'og:image', content: 'http://www.raf.fm/img/profile.jpg' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
