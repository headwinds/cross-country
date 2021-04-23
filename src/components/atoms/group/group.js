const Group = props => {
  const { children } = props;
  return <g {...props}>{children}</g>;
};

export default Group;
