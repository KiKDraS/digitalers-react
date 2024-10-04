import "./Button.css";

/*
    Props === Objeto Props
        -> props.text
        -> Si es un objeto, se puede destructurar
            -> const { text } = props;
            -> ({text}) =>
*/

export const Button = ({
  text,
  variant = "primary",
  handleClick = () => {},
}) => {
  //   const { text } = props;
  return (
    <button className={`button roboto-thin ${variant}`} onClick={handleClick}>
      {text}
    </button>
  );
};

/*
    variant
        -> "primary" - azul/blanco
        -> "secondary" - blanco/azul
        -> "white" - blanco/negro
*/
