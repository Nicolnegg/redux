import footerReducer, { toggleContact } from './footerSlice';

describe('footer reducer', () => {
  it('should handle toggleContact', () => {
    const initialState = { showContact: false };
    const nextState = footerReducer(initialState, toggleContact());
    expect(nextState.showContact).toEqual(true);
  });

  it('should handle toggleContact again', () => {
    const initialState = { showContact: true };
    const nextState = footerReducer(initialState, toggleContact());
    expect(nextState.showContact).toEqual(false);
  });
});
