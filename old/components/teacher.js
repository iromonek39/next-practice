import React from 'react'

export default function teacher({id, subject, children}) {
  return (
    <>
      <p>id: {id}</p>
      <p>教科: {subject}</p>
      <div>
        {children}
      </div>
    </>
  )
}

