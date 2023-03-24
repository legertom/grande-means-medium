import { atom, selector } from 'recoil';
const loginSchema = atom({
  key: 'LoginSchemaValues',
  default: selector({
    key: 'LoginSchemaValues/Default',
    get: ({ get }) => {
      return {
        // Event States
        email:'',
        password:''
      };
    },

  }),
});

export default loginSchema;