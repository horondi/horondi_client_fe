import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { handleSendMail } from '../chat.sagas';
import { setCommentsLoading, setMessageState, sendEmail } from '../chat.actions';
import { fakeObjToSend, fakeID } from './chat.variables';

describe('sagas test', () => {
  it.skip('send message', () => {
    expectSaga(handleSendMail)
      .provide([[matchers.call.fn(sendEmail), fakeObjToSend]])
      .put(setCommentsLoading(true))
      .put(sendEmail(fakeObjToSend))
      .put(setMessageState(fakeID))
      .put(setCommentsLoading(false))
      .run();
  });
});
