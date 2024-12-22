import {Component} from 'react'
import './index.css'

const Emoji = props => {
  const {emoji, onclick} = props
  const {name, imageUrl} = emoji
  return (
    <li className="emoji-container">
      <button type="button" onClick={onclick} className="button">
        <img className="emoji" src={imageUrl} alt={name} />
      </button>
      <p className="emoji-title">{name}</p>
    </li>
  )
}

const Thankyou = props => {
  const {imageUrl} = props

  return (
    <div className="thank-you">
      <img className="heart" src={imageUrl} alt="love emoji" />
      <h1 className="heading">Thank You!</h1>
      <p className="paragraph">
        We will use your feedback to improve our customer support
      </p>
    </div>
  )
}

const EmojiCard = props => {
  const {onclick, resources} = props

  const {emojis} = resources
  console.log(emojis)
  return (
    <div className="container">
      <h1 className="heading">
        How satisfied are you with our customer support performance?
      </h1>
      <ul className="emojis-container">
        {emojis.map(each => (
          <Emoji onclick={onclick} key={each.id} emoji={each} />
        ))}
      </ul>
    </div>
  )
}

class Feedback extends Component {
  state = {
    currentPage: 1,
  }

  onClickEmoji = () => {
    this.setState({
      currentPage: 2,
    })
  }

  render() {
    const {resources} = this.props
    const {currentPage} = this.state
    const {loveEmojiUrl} = resources

    return (
      <div className="feedback-app">
        <div className="card">
          {currentPage === 1 ? (
            <EmojiCard onclick={this.onClickEmoji} resources={resources} />
          ) : (
            <Thankyou imageUrl={loveEmojiUrl} />
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
