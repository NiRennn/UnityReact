import { useEffect, useRef } from "react";

export default function UnityFrame() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleMessage = (event:MessageEvent) => {
      if (event.source !== iframeRef.current?.contentWindow) return;

      const data = event.data;

      if (data?.source !== "unity") return;

      switch (data.type) {
        case "FOOD_PICKED":
          console.log("[Unity -> React] Еда съедена:", data.payload?.score);
          break;

        case "GAME_OVER":
          console.log("[Unity -> React] Игра окончена. Финальный счёт:", data.payload?.score);
          break;

        default:
          console.log("[Unity -> React] Неизвестное событие:", data);
          break;
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        ref={iframeRef}
        src="/unity/index.html"
        title="Unity Game"
        style={{ width: "100%", height: "100%", border: 0 }}
        allow="fullscreen; autoplay; gamepad"
        allowFullScreen
      />
    </div>
  );
}