import React from 'react';
import routes from '@/routes/index';
import { useRoutes } from 'react-router-dom';
import { IconContext } from 'react-icons';

const App: React.FC = () => {
  const element = useRoutes(routes);

  return (
    <IconContext.Provider
      value={{
        className: 'svg-icon',
      }}
    >
      {element}
    </IconContext.Provider>
  );
};

export default App;
