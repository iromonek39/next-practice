import React from 'react'

export default function teacher(props) {
  return (
    <>
      {props.teacherArr.map((item, index) => (
        <React.Fragment key={item.id}>
          <p>{index}---</p>
          <p>id: {item.id}</p>
          <p>教科: {item.subject}</p>
        </ React.Fragment>
      ))}
    </>
  )
}

