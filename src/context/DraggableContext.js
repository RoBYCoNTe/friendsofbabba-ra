import React, {
  createContext,
  useContext,
  useMemo,
} from 'react';

const DraggableContext = createContext();

const DraggableProvider = ({ children, ...props }) => {
	const memoizedValue = useMemo(() => props, [props]);
	return (
		<DraggableContext.Provider value={memoizedValue}>
			{children}
		</DraggableContext.Provider>
	);
};

const useDraggableContext = () => useContext(DraggableContext);

export { DraggableContext, DraggableProvider, useDraggableContext };
