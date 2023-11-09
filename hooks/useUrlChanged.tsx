import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export function useUrlChanged() {
  const router = useRouter();
  const [change, setChange] = useState(false);
  useEffect(() => {
    const startHandler = () => {
      setChange((prev) => !prev);
    };

    const completeHandler = () => {
      console.log("Router change completed");
      setChange((prev) => (true ? false : true));
    };

    router.events.on("routeChangeStart", startHandler);

    router.events.on("routeChangeComplete", completeHandler);

    return () => {
      router.events.off("routeChangeStart", startHandler);
      router.events.off("routeChangeComplete", completeHandler);
    };
  }, []);

  // 👇 You can put a progress bar or something here
  return [change];
}
