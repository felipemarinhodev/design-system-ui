import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, Card } from '../.'

const App = () => {
  return (
    <Card>
      <h1>Example of this!</h1>
      <Button />
    </Card>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
