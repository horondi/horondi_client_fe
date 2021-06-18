import commentsReducer, { initialState } from '../comments.reducer';

import { setComments, setCommentsLoading, setRate, setUpdatingComment } from '../comments.actions';

describe('comments reducer', () => {
  it('should set comments loading to true', () => {
    const state = {
      ...initialState,
      commentsLoading: true
    };

    expect(commentsReducer(initialState, setCommentsLoading(true))).toEqual(state);
  });

  it('should set updating comment to state', () => {
    const commentId = 'fnr89g4g49g85g80';
    const state = {
      ...initialState,
      updatingComment: commentId
    };

    expect(commentsReducer(initialState, setUpdatingComment(commentId))).toEqual(state);
  });

  it('should set rate to state', () => {
    const payload = {
      rate: 5
    };
    const state = {
      ...initialState,
      rate: payload
    };

    expect(commentsReducer(initialState, setRate(payload))).toEqual(state);
  });

  it('should set comments to state', () => {
    const payload = [
      {
        text: 'nice'
      },
      {
        text: 'good'
      }
    ];
    const state = {
      ...initialState,
      comments: payload
    };

    expect(commentsReducer(initialState, setComments(payload))).toEqual(state);
  });
});
