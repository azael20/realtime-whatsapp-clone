export const generateColor = (userId: string) => {
  // Utiliza una función hash simple para convertir el userId en un número
  let numericUserId = 0;
  for (let i = 0; i < userId.length; i++) {
    numericUserId += userId.charCodeAt(i);
  }

  // Utiliza el número para generar un valor de color
   // Genera colores en el espacio de color HSL
  return `hsl(${numericUserId % 360}, 70%, 30%)`;
};
