import { atom, selector } from 'recoil';

const modalState = atom({
  default: {
    loginModal: false,
  },
  key: 'modalState',
});

const modalStateSelector = namespace =>
  selector({
    key: namespace,
    get: ({ get }) => get(modalState)[namespace],
    set: ({ get, set }, isOpen) => {
      set(modalState, {
        ...get(modalState),
        [namespace]: isOpen,
      });
    },
  });

export const loginModal = modalStateSelector('loginModal');
