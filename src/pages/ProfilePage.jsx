import { FormattedMessage } from 'react-intl';

export const ProfilePage = () => {
  return (
    <h1 className="title">
      <FormattedMessage
        id='Profile.title'
        defaultMessage='Profile'
      />
    </h1>
  )
}