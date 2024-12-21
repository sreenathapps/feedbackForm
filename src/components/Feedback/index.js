import React from 'react'

const Emoji = (emoji) => (
    <div className='emoji-container'>
        <img src={emoji.imageUrl} alt={emoji.name} />
        <p className='emoji-title'>{emoji.name}</p>
    </div>
)


const EmojiCard = (emojis) => (
    <div className='container'>
        <h1 className='heading'>
            How satisfied are you with our customer support
            performance? 
        </h1>
        {emojis.map(
            each => (<Emoji emoji={each} />)
        )}
    </div>
)


export const Feedback = (props) => {
    const {emojis} = props

  return (
    <div className="feedback-app">
        <div className='card'>
            <EmojiCard emojis = {emojis} />
        </div>
    </div>
  )
}
