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
      <h1>The Journey…</h1>
      <p>
        Nobody said it would be easy but it is worth it! I wanted to curate a
        community of what I like to call new growth. Over the years we have
        gotten further and further away from the nature of things. Everything
        from medication to swipe left, swipe right ends in someone’s instant
        gratification. New growth requires a new way of understanding, a new way
        of doing things given through the guidance of our ancestral roots. g{" "}
        <br></br> I created I Create Healthy as a cliff notes of sorts for women
        like me. I had so many questions but I just wanted quick answers from
        someone I could trust. Kinda of like that wise ol woman that always has
        a natural cure for everything and you just trusted her because she was
        never wrong. That’s the type of vibes I am kicking out. I am here to
        help. I am the nerd that does all the research and you’re the jock that
        I let copy my notes! Lol. Our body and the fucti I want you to
        understand that it is all a struggle. Fguay possible. re out who is for
        your and those sare the ohnes that wsnt you to win. Everyone else….they
        want to see you fail in the nicest way.
      </p>
      {/* <p>
        Such wow. Very React. is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.{" "}
      </p> */}
      {/* <img style={{ width: `22rem` }} src={aboutImage} alt="about" /> */}
    </Layout>
  )
}
