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
            style={{ width: `25rem` }}
            src="../I.CreateHealthy.png"
            alt="I.Create.Healthy"
          />
        </Link>
      </div>
      <h1>Our Story</h1>
      <p>
        Such wow. Very React. is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p>
        Such wow. Very React. is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.{" "}
      </p>
      {/* <img style={{ width: `22rem` }} src={aboutImage} alt="about" /> */}
    </Layout>
  )
}
