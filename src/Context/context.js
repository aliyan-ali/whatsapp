// Create a context
import React, { createContext, useContext, useState } from 'react';

const ComponentContext = createContext();

// Provider component
export const ComponentProvider = ({ children }) => {
  const [currentComponent, setCurrentComponent] = useState('sidebar');
  const [showChatBar, setShowChatBar] = useState(false);

  const toggleComponent = (componentName) => {
    setCurrentComponent(componentName);
  };

  return (
    <ComponentContext.Provider value={{ currentComponent, toggleComponent, showChatBar, setShowChatBar }}>
      {children}
    </ComponentContext.Provider>
  );
};

// Custom hooks to use the context
export const useComponent = () => useContext(ComponentContext);