import { FC } from 'react';

const DarkLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '5px' }}>
      <h3>Dark</h3>
      {children}
    </div>
  );
};

export default DarkLayout;
