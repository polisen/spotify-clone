import { useEffect } from 'react';

export default function useKeypress(code: string, action: Function) {
  useEffect(() => {
    function onKeyup(e:KeyboardEvent) {
      if (e.code === code) action();
    }
    function onKeyDown(e: any) {
      if (e.code === code) e.preventDefault();
    }
    window.addEventListener('keyup', onKeyup);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keyup', onKeyup);
  }, [code, action]);
}
