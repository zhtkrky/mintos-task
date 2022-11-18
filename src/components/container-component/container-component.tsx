import "./container-component.css";

// Styled container component with some basic styling.
const Container = ({ children }: { children: React.ReactNode }) => {
  return <section className="container">{children}</section>;
};
export default Container;
