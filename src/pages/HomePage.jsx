import { FormattedDate, FormattedMessage } from 'react-intl';

export const HomePage = () => {
  return (
    <>
      <h1 className="title">
        <FormattedMessage
          id='Home.title'
          defaultMessage='Welcome'
          values={{
            name: 'Víctor Iván López'
          }}
        />
      </h1>
      <p className="subtitle">
        <FormattedDate
          value={Date.now()}
          year="numeric"
          month="long"
          day="numeric"
          weekday= "long"
        />
      </p>
    </>
  )
}