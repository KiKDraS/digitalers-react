import "./Perfil.css";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

/*
    Componente === Función (o una Clase)
        -> Se encarga de armar una parte del HTML para nuestra Web
        -> Sólo pueden devolver un único elemento
*/

export const Perfil = () => {
  return (
    <section className="perfil">
      <img
        src="https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_1280.png"
        alt="profile"
        className="perfil-picture"
      />
      <div>
        <h3 className="perfil-name roboto-bold">Pepe</h3>
        <span className="perfil-job roboto-regular">Front-end developer</span>
      </div>
      <ul className="perfil-contact-data-list">
        <li className="perfil-contact-data-element">
          <IoIosMail /> <span>ejemplo@mail.com</span>
        </li>
        <li className="perfil-contact-data-element">
          <FaPhoneAlt />
          <span>+54 9 11-1234-5678</span>
        </li>
      </ul>
      <p className="perfil-description roboto-regular">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque ut
        dolorum, amet ex, explicabo accusamus, eum quo doloribus delectus soluta
        sunt necessitatibus harum minus nemo consequuntur animi rerum?
        Perferendis, consectetur?
      </p>
    </section>
  );
};
