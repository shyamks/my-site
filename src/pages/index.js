import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import styled from 'styled-components'
import githubIcon from '../images/github-icon.png'
import twitterIcon from '../images/twitter-icon.jpg'

const ImageLayout = styled.div `
  height: 150px;
  width: 150px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  overflow: hidden;
  border-radius: 50%;
  margin: auto;
  margin-bottom: 30px;
`

const MediaLayout = styled.div `
  text-align: center;
  width: 100%;
`

const MediaButton = styled.div `
  height: 35px;
  width: 35px;
  overflow: hidden;
  border-radius: 50%;
  margin: 0;
  display: inline-block;
`

const IndexPage = () => (
  <Layout>
    <ImageLayout>
      <Image/>
    </ImageLayout>
    <p>I'm Shyam. I <a href="https://www.linkedin.com/in/meghashyam-kodmad-b7559510b/">work</a> as a Software Engineer at <a href="http://www.liftoffllc.com">
        Liftoff LLC</a>, mostly React and Angular2+. I'm also into <a href="https://www.arsenal.com">football</a>(soccer for some people)</p>
    <MediaLayout>
      <MediaButton>
        <a href="https://github.com/shyamks" target="_blank">
          <img src={githubIcon} alt="Github"/>
        </a>
      </MediaButton>
      <MediaButton>
        <a href="https://twitter.com/shyamkodmad" target="_blank">
          <img
            src={twitterIcon}
            alt="Twitter"/>
        </a>
      </MediaButton>
    </MediaLayout>
  </Layout>
)

export default IndexPage
