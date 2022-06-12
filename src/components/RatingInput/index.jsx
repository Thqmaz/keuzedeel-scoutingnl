import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeLow } from '@fortawesome/free-solid-svg-icons'

export const RatingInput = ({ name, question }) => {
  const [ttsMessage, setTtsMessage] = useState("");
  const msg = new SpeechSynthesisUtterance()
  msg.text = ttsMessage
  useEffect(() => {
      window.speechSynthesis.speak(msg)
      setTtsMessage("");
  }, [msg]);

  return (
    <>
      <div className="rating">
        <span className="question"><FontAwesomeIcon className="cursor-pointer" icon={faVolumeLow} onClick={() => setTtsMessage(question)} />&nbsp;{question}</span>
        <div className="stars">
          <input type="radio" name={name} className="mask mask-star-2 bg-warning" />
          <input type="radio" name={name} className="mask mask-star-2 bg-warning" />
          <input type="radio" name={name} className="mask mask-star-2 bg-warning" />
          <input type="radio" name={name} className="mask mask-star-2 bg-warning" />
          <input type="radio" name={name} className="mask mask-star-2 bg-warning" />
        </div>
      </div>
    </>
  )
}
