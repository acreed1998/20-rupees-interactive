export const createOption = ({
  title,
  text,
  cost,
  multi = false,
  limit = 0,
  discount = null,
  upgradable = false,
  src = "",
  buttonText,
}) => {
  return {
    title,
    text,
    cost,
    multi,
    selected: 0,
    limit,
    discount,
    src,
    upgradable,
    upgraded: false,
    buttonText,
  };
};
