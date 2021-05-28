const count = (int) => {
  if (int.contains('-')) {
    return int.toString().length - 1;
  }
  return int.toString().length;
};
