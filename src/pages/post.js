import Image from 'next/image';

export function Postblog(props) {
  return (
    <div className="text-center flex flex-col items-center justify-center h-full">
      <h2 className="mb-4">{props.titulo}</h2>
      <Image src={props.img} alt="Node.js" width={200} height={200} />
      <p className="mt-4">{props.contenido}</p>
    </div>
  );
}
