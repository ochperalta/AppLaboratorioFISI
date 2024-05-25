import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

export default function Soporte() {
  function CardList() {
    const cardElements = [];
    for (let index = 0; index < 10; index++) {
      cardElements.push(<Card className="max-w-[400px] min-w-[250px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">Laboratorio 1</p>
            <p className="text-small text-default-500">Antiguo Pabellón</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Mensajes nuevos, 2</p>
          <p>Equipos: 20</p>
          <p>Aplicaciones: 15</p>
        </CardBody>
        <Divider />
      </Card>)
    }

    return cardElements
  }
  return (
    <>
      <section className='flex flex-wrap gap-4 p-6'>
        <CardList></CardList>
      </section>
    </>
  )
}

