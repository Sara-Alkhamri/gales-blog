import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
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
        <div
          style={{
            display: `flex`,
            flexDirection: `row`,
            margin: `3rem auto`,
            maxWidth: `100%`,
            padding: `0 1rem`,
            backgroundColor: `#fff0e3`,
          }}
        >
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/f/mlelvvla"
            method="POST"
          >
            <label>
              Name
              <input type="text" name="name" id="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" id="email" />
            </label>
            {/* <label>
            Subject
            <input type="text" name="subject" id="subject" />
          </label> */}
            <label>
              Message
              <textarea name="message" id="message" rows="5" />
            </label>
            {status === "SUCCESS" ? (
              <p>Thanks! Your message has been sent</p>
            ) : (
              <button>Submit</button>
            )}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
        </div>
      </Layout>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
