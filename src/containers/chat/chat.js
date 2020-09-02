import React, { useState } from 'react';
import ForumIcon from '@material-ui/icons/Forum';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { useSelector } from 'react-redux';

import { config, Transition } from 'react-spring/renderprops';
import { useStyles } from './chat.style';
import MailForm from './mail-form';

export const Chat = () => {
  const [iconsVisible, setIconsVisible] = useState(false);
  const [mailFormVisible, setMailFormVisible] = useState(false);
  const { language, themeMode } = useSelector((state) => ({
    language: state.Language.language,
    themeMode: state.Theme.lightMode
  }));
  const style = useStyles({ themeMode, iconsVisible, mailFormVisible });

  return (
    <div>
      {iconsVisible && (
        <div className={style.iconsMessengers}>
          <div>
            <MessengerCustomerChat
              pageId={process.env.FACEBOOK_PAGE_ID}
              appId={process.env.FACEBOOK_APP_ID}
            />
          </div>

          <div
            className={mailFormVisible ? style.msgIconActive : style.msgIcon}
          >
            <MailOutlineIcon
              className={style.icon}
              onClick={() => setMailFormVisible(!mailFormVisible)}
            />
          </div>
          <div>
            <Transition
              initial={null}
              items={mailFormVisible}
              from={{ opacity: 0, height: 0 }}
              enter={{ opacity: 1, height: 0 }}
              leave={{ opacity: 0, height: 0 }}
              config={config.gentle}
            >
              {(item) =>
                item &&
                ((style) => (
                  <div style={style}>
                    <MailForm
                      themeMode={themeMode}
                      iconsVisible
                      language={language}
                      setIconsVisible={setIconsVisible}
                      setMailFormVisible={setMailFormVisible}
                    />
                  </div>
                ))
              }
            </Transition>
          </div>
        </div>
      )}
      <div
        onClick={() => setIconsVisible(!iconsVisible)}
        className={style.chatIcon}
      >
        <ForumIcon className={style.icon} style={{ fontSize: 40 }} />
      </div>
    </div>
  );
};