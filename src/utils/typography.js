import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    a: {
      color: `#514d4e`,
      fontFamily: `Roboto, sans-serif`,
      boxShadow: `0 1px 0 0 #e2ac84`,
    },
    "h1, h2, h3": {
      fontFamily: `Roboto, sans-serif`,
      color: `#e2ac84`,
    },
    p: {
      color: `#514d4e`,
      fontFamily: `Roboto, sans-serif`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
