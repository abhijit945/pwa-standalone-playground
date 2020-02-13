import "./index.css";
import * as serviceWorker from "./main/worker/serviceWorker";

alert("Loaded service worker");

serviceWorker.register();
