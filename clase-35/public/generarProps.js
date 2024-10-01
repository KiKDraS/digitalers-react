const propsUsadas = {
  href: "https://vitejs.dev",
  src: "/vite.svg",
  alt: "Vite logo",
};

const propsDeclaradas = {
  href: undefined,
  img: undefined,
  alt: undefined,
};

function generarProps(propsUsadas) {
  return {
    ...propsDeclaradas,
    ...propsUsadas,
  };
}

const propsGeneradas = generarProps(propsUsadas);
console.log(propsGeneradas);
