import React from 'react'
import AuthForm from '../components/Auth/AuthForm'
import EmptyLayout from '../layouts/EmptyLayout'

interface IAuth {

}

export default function AuthPage (props: IAuth) {

   return (
      <EmptyLayout>
         <AuthForm/>
      </EmptyLayout>
   )
}