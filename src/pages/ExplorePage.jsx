import { FormattedMessage } from 'react-intl';

export const ExplorePage = () => {
  return (
    <h1 className="title">
      <FormattedMessage
        id='Explore.title'
        defaultMessage='Explore'
      />
    </h1>
  )
}