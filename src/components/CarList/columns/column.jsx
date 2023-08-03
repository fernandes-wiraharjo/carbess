import './column.css';

export const LeftColumn = ({ children }) => (
  <div className="column__left">{children}</div>
);

export const RightColumn = ({ children }) => (
  <div className="column__right">{children}</div>
);
