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
          flex: 1,
          margin: `3rem`,
          maxWidth: `0 auto`,
          padding: `0 1rem 1rem`,
          boxShadow: `none`,
        }}
      >
        <header style={{ textAlign: `center` }}>
          {/* <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h1 style={{ display: `inline` }}>I. Create. Healthy</h1>
          </Link> */}
          <ul
            style={{
              listStyle: `none`,
              float: `right`,
            }}
          >
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/blog">Blog</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>
        </header>

        {children}
      </div>
      <div
        style={{
          backgroundColor: `#e1d2bd`,
          padding: `2rem 0 2rem 0`,
          textAlign: `center`,
          display: `flex`,
          flexDirection: `column`,
        }}
      >
        <a
          style={{ boxShadow: `none` }}
          href="https://www.youtube.com/channel/UCkxTcSlabiZqQuX7h5EzdHg"
          target="_blank"
        >
          <img style={{ width: `20px` }} src="../youtube.png"></img>
        </a>
        <a
          style={{ boxShadow: `none` }}
          href="http://www.pinterest.com/icreatehealty"
          target="_blank"
        >
          <img style={{ width: `20px` }} src="../pintrest.png" />
        </a>
        <small>
          Made by <a href="https://saraalkhamri.com/"> Revive Labs </a>
          copyright ©2020, All Rights Reserved
        </small>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`
