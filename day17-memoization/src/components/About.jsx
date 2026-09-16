import React from 'react'

const About = () => {
    console.log("About Rendering")
  return (
    <div>
      <h1>About This Side</h1>
    </div>
  )
}

export default React.memo(About)
