// rules 

const rules = {

   confirmPasswordRule ({ getFieldValue }: any) {
      
      return {
         validator(_: any, value : string) {
            if (!value || getFieldValue('password') === value) {
               return Promise.resolve();
            }
            return Promise.reject(new Error('The two passwords that you entered do not match!!!!'));
         },
      }
   },

   emailValidation(obj: any) {

      return {
         validator(currentField: Object, value: string)  {
            const email = String(value)
               .toLowerCase()
               .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
            
            if (value !== '' && email === null) {
               return Promise.reject(new Error('Invalid email!'))
            } else {
               return Promise.resolve()
            }
         },
      }
   }

};


export default rules;
