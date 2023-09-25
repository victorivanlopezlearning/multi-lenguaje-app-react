import { useEffect, useState } from 'react';
import { LangContext } from './';
import { IntlProvider } from 'react-intl';
import messagesInEnglish from '../lang/en-US.json';
import messagesInSpanish from '../lang/es-MX.json';

export const LangProvider = ({ children }) => {

  const localeStorage = localStorage.getItem('lang') ?? 'en-US';

  const [messages, setMessages] = useState(messagesInEnglish);
  const [locale, setLocale] = useState(() => localeStorage);

  useEffect(() => {
    const newMessages = (locale === 'en-US') ? messagesInEnglish : messagesInSpanish;
    setMessages(newMessages);
    localStorage.setItem('lang', locale);
  }, [locale])

  const onChangeLocale = (locale) => {
    setLocale(locale);
  }

  return (
    <LangContext.Provider
      value={{
        onChangeLocale
      }}
    >
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </LangContext.Provider>
  )
}