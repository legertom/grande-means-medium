import { atom, selector } from 'recoil';
const signUpSchema = atom({
  key: 'SignUpSchemaValues',
  default: selector({
    key: 'SignUpSchemaValues/Default',
    get: ({ get }) => {
      return {
        // Event States
        username:'',
        email:'',
        password:''
      };
    },

  }),
});

export default signUpSchema;