// import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

// import { rhythm, scale } from "../utils/typography"

// class Layout extends React.Component {
//   render() {
//     const { location, title, children } = this.props
//     const rootPath = `${__PATH_PREFIX__}/`
//     const blogPath = `${__PATH_PREFIX__}/blog/`
//     const aboutPath = `${__PATH_PREFIX__}/about/`
//     let header

//     if (
//       location.pathname === rootPath ||
//       location.pathname === blogPath ||
//       location.pathname === aboutPath
//     ) {
//       header = (
//         <h1
//           style={{
//             ...scale(1.5),
//             marginBottom: rhythm(1.5),
//             marginTop: 0,
//           }}
//         >
//           <Link
//             style={{
//               boxShadow: `none`,
//               textDecoration: `none`,
//               color: `inherit`,
//             }}
//             to={location.pathname === blogPath ? `/blog/` : `/`}
//           >
//             {title}
//           </Link>
//         </h1>
//       )
//     } else {
//       header = (
//         <h3
//           style={{
//             fontFamily: `Montserrat, sans-serif`,
//             marginTop: 0,
//           }}
//         >
//           <Link
//             style={{
//               boxShadow: `none`,
//               textDecoration: `none`,
//               color: `inherit`,
//             }}
//             to={`/blog/`}
//           >
//             {title}
//           </Link>
//           <Link
//             style={{
//               boxShadow: `none`,
//               textDecoration: `none`,
//               color: `inherit`,
//             }}
//           >
//             to={location.pathname === aboutPath ? `/about/` : `/`}>{title}
//           </Link>
//         </h3>
//       )
//     }
//     return (
//       <Wrapper>
//         <div
//           style={{
//             marginLeft: `auto`,
//             marginRight: `auto`,
//             maxWidth: rhythm(24),
//             padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
//           }}
//         >
//           <header>{header}</header>
//           <main>{children}</main>
//         </div>
//         <Footer>
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </Footer>
//       </Wrapper>
//     )
//   }
// }

// const Footer = styled.footer`
//   text-align: center;
//   margin: 24px;
// `

// export default Layout

import React from "react"

import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <Wrapper>
      <div
        style={{
          margin: `3rem auto`,
          maxWidth: `0 auto`,
          padding: `0 1rem`,
        }}
      >
        <header style={{ marginTop: `1.5rem` }}>
          {/* <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h1 style={{ display: `inline` }}>I. Create. Healthy</h1>
          </Link> */}
          <ul
            style={{
              listStyle: `none`,
              float: `right`,
              boxShadow: `none`,
            }}
          >
            <ListLink to="/blog">Blog</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>
        </header>

        {children}
      </div>
      <div>
        <footer style={{ bottom: 0, textAlign: `center` }}>
          <small>
            Made by <a href="https://saraalkhamri.com/"> Revive Labs </a>
            copyright ©2020, All Rights Reserved
          </small>
        </footer>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
`
