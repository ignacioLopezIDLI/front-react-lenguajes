export function Contenido1(props) {
  return (
    <div className="mt-4 text-center flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold">{props.titulo}</h2>
      <p className="mt-2">{props.contenido}</p>
    </div>
  );
}
