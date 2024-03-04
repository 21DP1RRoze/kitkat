import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityComponent() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "src/Build/loginwebgl.loader.js",
        dataUrl: "src/Build/loginwebgl.data",
        frameworkUrl: "src/Build/loginwebgl.framework.js",
        codeUrl: "src/Build/loginwebgl.wasm",

    });

    return <Unity unityProvider={unityProvider} style={{ width: 550, height: 460 } } />;
}



export default UnityComponent;