const parceiros = [
  "parceiro1.jpeg",
  "parceiro2.jpeg",
  "parceiro3.jpeg",
  "parceiro4.jpeg",
  "parceiro5.jpeg",
  "parceiro6.jpeg",
  "parceiro7.jpeg",
  "parceiro8.jpeg",
  "parceiro9.jpeg",
  "parceiro11.jpeg",
];

export const ImageCompany = () => {
  return (
    <>
      {parceiros.map((image, index) => (
        <img
          key={index}
          className="h-24 w-fit dark:invert"
          src={`parceiros/${image}`} // Replace with the correct path to your images
          alt={`Parceiro ${index + 1}`}
          height="20"
          width="auto"
        />
      ))}
    </>
  );
};
