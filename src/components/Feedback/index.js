import React from 'react'

const Emoji = emoji => {
  const {name, imageUrl} = emoji
  return (
    <li className="emoji-container">
      <img src={imageUrl} alt={name} />
      <p className="emoji-title">{name}</p>
    </li>
  )
}

const EmojiCard = props => {
  const {resources} = props

  const {emojis} = resources
  console.log(emojis)
  return (
    <div className="container">
      <h1 className="heading">
        How satisfied are you with our customer support performance?
      </h1>
      <ul>
        {emojis.map(each => (
          <Emoji key={each.id} emoji={each} />
        ))}
      </ul>
    </div>
  )
}

export const Feedback = props => {
  const {resources} = props

  return (
    <div className="feedback-app">
      <div className="card">
        <EmojiCard resources={resources} />
      </div>
    </div>
  )
}

export default Feedback
