import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Postblog } from './post';
import { Contenido1 } from './contenido1';
import { Formulario } from './formulario';
  

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <h1 style={{ fontSize: '2rem', marginBottom: '4rem' }}>Blog Tecnologico</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex justify-center items-center">
          <Postblog 
            titulo="Junta De NodeJS-Santiago"
            img="/node.png"
            contenido="Progamando con amigos y aprendiendo Node"
          />
        </div>
        <div className="flex justify-center items-center">
          <Postblog 
            titulo="Junta De React-Santiago"
            img="/react.png"
            contenido="Mi primer APP en react"
          />
        </div>
        <div className="flex justify-center items-center">
          <Postblog 
            titulo="Mongo DB"
            img="/mongo.png"
            contenido="Base de datos - Para trabajar en Back-end"
          />
        </div>
        <div className="flex justify-center items-center">
          <Postblog 
            titulo="Javascript 2023"
            img="/js.png"
            contenido="Lenguajer con mayor demanda laboral"
          />
        </div>
        <div className="flex justify-center items-center">
          <Contenido1 
            titulo="Introducción a GraphQL 2023"
            contenido="GraphQL es un lenguaje de consulta de datos que proporciona a los clientes la capacidad de solicitar solo la información que necesitan. A diferencia de REST, donde las APIs tienen puntos finales específicos, GraphQL permite a los clientes definir la forma exacta de los datos que desean. Aprende cómo construir una API GraphQL y cómo optimizar las consultas para mejorar el rendimiento."
          />
        </div>
        <div className="flex justify-center items-center">
          <Contenido1 
            titulo="Aprendiendo Desarrollo Web"
            contenido="Si estás interesado en el desarrollo web, este es el momento perfecto para aprender. A través de una variedad de recursos en línea, puedes explorar lenguajes de programación como HTML, CSS y JavaScript. También puedes aprender sobre frameworks populares como React, Angular y Vue. No importa si eres un principiante o un desarrollador experimentado, siempre hay algo nuevo que aprender en el mundo del desarrollo web."
          />
        </div>
          <Formulario></Formulario>
      </div>
    </main>
  );
}
