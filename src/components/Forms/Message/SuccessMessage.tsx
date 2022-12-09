import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import Message from './Message'

interface SuccessMessageProps {
  closePopup?: () => void
}

function SuccessMessage(props: SuccessMessageProps) {
  return (
    <Message
      type="success"
      icon={faCircleCheck}
      title="Заявка отправлена!"
      text="Мы скоро свяжемся с Вами!"
      {...props}
    />
  )
}

SuccessMessage.defaultProps = {
  closePopup: undefined,
}

export default SuccessMessage
