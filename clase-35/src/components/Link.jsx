/*
    Props - Objeto Props
        => Cuando queremos declarar parámetros para nuestro Componente, se agregan claves al Objeto props

    Con JSX
        -> Si quiero usar valores de JS, necesito indicarlo mediante las lla    
*/
export const Link = ({ href, src, alt, className }) => {
  return (
    <a href={href} target="_blank">
      <img
        src={src}
        className={className ? `logo ${className}` : "logo"}
        alt={alt}
      />
    </a>
  );
};
