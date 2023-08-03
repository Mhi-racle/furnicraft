import '@styles/globals.css';
import { children } from 'react';

import Provider from '@components/Provider'
import Nav from '@components/Nav';


export const metadata = {
    title: "Promptopia",
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({ children}) => {
  return (
   <html lang="en">
     <body>
       <div className="main">
         <div className="gradient"/>
       </div>

       <main className="app">
       <Nav/>
       <Provider/>

        {children}
       </main> 
     </body> 
   </html>
  )
}

export default RootLayout;
