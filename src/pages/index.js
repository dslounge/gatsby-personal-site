import React from 'react'
import profileImage from '../img/profile.jpg';

const Links = () => {
  return (
    <div class="col-sm-12">
      <ul class="list-unstyled link-list">
        <li>
          <i class="fa fa-envelope" />
          <a href="mailto:rmendiola@alum.mit.edu" target="_blank">
            rmendiola@alum.mit.edu
          </a>
        </li>
        <li>
          <i class="fa fa-twitter" />
          <a href="http://twitter.com/GroundControl" target="_blank">
            @GroundControl
          </a>
        </li>
        <li>
          <i class="fa fa-linkedin" />
          <a href="http://www.linkedin.com/in/rafmendiola" target="_blank">
            in/rmendiola
          </a>
        </li>
      </ul>
    </div>
  )
}

const IndexPage = () => (
  <div>
    <h1>
      Hello, world!
      <br />
      <small>I'm a software developer hanging out in Boston. </small>
    </h1>
    <br />
    <p class="lead">
      I started programming in QBASIC when I was 12, and I went on to get a B.S.
      in Computer Science from MIT. I've written a lot stuff in Scheme, Python,
      PHP, Java, JS, etc. I don't really have a preference - it's all just
      signals and components.
    </p>
    <p class="lead">
      Over the last 2 years I've done a lot of Android work, and front end
      development with AngularJS. I like writing software with a clean,
      predictable architecture so that the next developer doesn't tear their
      hair out.
    </p>
    <p class="lead">
      Currently I'm interested in React Native, UX design, strategies for user
      growth, and building a great team culture. At this stage in my career, I
      want to lead a team of engineers towards making an awesome product. I see
      myself as a half PM/half developer.
    </p>
    <p class="lead">
      そして、日本語をちょっと話せます。MITで日本語を勉強しました。日本文化に興味があって、日本人の友達が多いから、よく日本に行きます。
    </p>
    <img class="img-rounded profile-image" src={profileImage} />
    <Links />
  </div>
)

export default IndexPage
