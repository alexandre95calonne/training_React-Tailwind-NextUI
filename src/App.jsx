import { NextUIProvider } from "@nextui-org/react";

import Example from "./assets/screens/Example";

function App() {
  return (
    <>
      <NextUIProvider>
        <p className="text-3xl font-bold underline">Hello word!</p>
        <Example />
      </NextUIProvider>
    </>
  );
}

export default App;
