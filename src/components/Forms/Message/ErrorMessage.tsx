import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

import Message from './Message'

interface ErrorMessageProps {
  closePopup?: () => void
}

function ErrorMessage(props: ErrorMessageProps) {
  return <Message type="error" text="Попробуйте ещё раз или позвоните нам!" icon={faTriangleExclamation} {...props} />
}

ErrorMessage.defaultProps = {
  closePopup: undefined,
}

export default ErrorMessage
