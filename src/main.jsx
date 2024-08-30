import { createRoot } from "react-dom/client"
import App from "./App.jsx";
import "./index.css";

// 'createRoot'로 root를 생성하고, 'render' 메서드를 호출하여 'App.jsx' 컴포넌트를 렌더링한다.
const root = createRoot(document.getElementById("root"));
root.render(<App />);