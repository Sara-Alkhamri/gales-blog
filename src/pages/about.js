import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function About() {
  return (
    <Layout>
      <div
        style={{
          display: `block`,
          textAlign: `center`,
        }}
      >
        <Link to="/" style={{ boxShadow: `none` }}>
          <img
            style={{ width: `30rem` }}
            src="../I.CreateHealthy.png"
            alt="I.Create.Healthy"
          />
        </Link>
      </div>
      <h1>The Journey…</h1>
      <div
        style={{
          display: `flex`,
          flexWrap: `wrap`,
        }}
      >
        <p>
          This journey started in 2016 when I had the Ah Ha moment that you can
          heal yourself naturally. I started taking small steps researching into
          how this is. In doing my research, and being the test dummy, I have
          come to learn quite a few things which has inspired my new passion of
          becoming the healthiest version of oneself inside and out….even if
          sometimes we stumble along the way. It’s about balance right!? This is
          a space for “like minds” to come together and chat. For people like me
          who are passionate about our bodies, our minds, and our souls.
        </p>
        <img
          style={{ margin: `1rem`, width: `28rem` }}
          src="../about.jpg"
          alt="about image"
        />
        <p style={{ width: `500px`, marginLeft: `4rem` }}>
          My passion has become holistic health and wellness and I am here to
          help educate, encourage and help promote the best life that YOU can
          offer to yourself! I hope this website inspires you to create, nurture
          and to think. Welcome.
        </p>
      </div>

      {/* <img style={{ width: `22rem` }} src={aboutImage} alt="about" /> */}
    </Layout>
  )
}
