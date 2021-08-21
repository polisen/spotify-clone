import { useEffect } from "react";

export default function useKeypress(keyCode: number, action: Function) {
  useEffect(() => {
    function onKeyup(e: any) {
      if (e.keyCode === keyCode) action();
    }
    function onKeyDown(e: any) {
      if (e.keyCode === keyCode) e.preventDefault();
    }
    window.addEventListener("keyup", onKeyup);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keyup", onKeyup);
  }, []);
}
