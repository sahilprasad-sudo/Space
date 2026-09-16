import React from 'react'

const Home =() => {
    console.log("Home Rendering")
  return (
    <div>
      <h1>Home This Side1</h1>
    </div>
  )
}

export default React.memo(Home,(prevProps,nextProps)=>{
    return prevProps.users.id === nextProps.users.id;
})
