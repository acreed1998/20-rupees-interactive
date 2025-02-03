export const createOption = ({
  title,
  text,
  cost,
  multi = false,
  limit = 0,
  discount = null,
  src = "",
}) => {
  return {
    title,
    text,
    cost,
    multi,
    limit,
    discount,
    src,
  };
};
