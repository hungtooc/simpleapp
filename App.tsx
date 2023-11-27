/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Canvas, Fill } from '@shopify/react-native-skia';

function App(): JSX.Element {

  return (
    <Canvas style={{ flex: 1 }}> 
      <Fill color={'red'} />
    </Canvas>
  );
}

export default App;
