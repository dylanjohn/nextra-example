import Link from 'next/link';
import ThemeSwitch from './themeSwitch';

export default function Footer(props) {
 
   return (
	<>
    <footer className="my-12">
        <hr/>
        <div className="flex justify-between items-center">
            <div>2023 © Nextra.</div>
            <div><ThemeSwitch /></div>
        </div>
       
    </footer>
  
	</>
   );
}
