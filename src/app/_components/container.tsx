type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  console.log(children);
  return <div className="container mx-auto">{children}</div>;
};

export default Container;
