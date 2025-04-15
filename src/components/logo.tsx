import { cn } from '../lib/utils'



export const Logo = ({ className }: { className?: string }) => {
    return (
      <>
        <img src="/kimagestazul.png"  className="dark:hidden  w-20"/>
        <img src="/kimagestbranco.png"  className="hidden dark:block w-20"/>
      </>
    );
  };


