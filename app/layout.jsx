import '@styles/globals.css';
import { children } from 'react';

import Provider from '@components/Provider'

export const metadata = {
    title: "Furnicraft",
    description: 'Design your own space'
}

const RootLayout = ({ children}) => {
  return (
   <html lang="en">
     <body>
       <div className="main">
         <div className="gradient"/>
       </div>

       <main className="app">
    


        {children}
       </main> 
     </body> 
   </html>
  )
}

export default RootLayout;
