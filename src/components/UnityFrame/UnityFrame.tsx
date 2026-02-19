
export default function UnityFrame() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="/unity/index.html"
        title="Unity Game"
        style={{ width: "100%", height: "100%", border: 0 }}
        allow="fullscreen; autoplay; gamepad"
        allowFullScreen
      />
    </div>
  );
}
