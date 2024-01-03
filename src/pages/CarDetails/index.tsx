/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";

import Container from "../../components/Container";

import { FaWhatsapp } from "react-icons/fa";

import { useParams } from "react-router-dom";

import { CarProps } from "../Home";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

interface CarDetailsProps extends CarProps {
  whatsapp: string;
  owner: string;
  created: string;
  description: string;
  model: string;
}

function CarDetails() {
  const [car, setCar] = useState<CarDetailsProps>();

  const { id } = useParams();

  useEffect(() => {
    async function loadCar() {
      if (!id) return;

      const docRef = doc(db, "cars", id);

      getDoc(docRef).then((snapshot) => {
        setCar({
          id: snapshot.id,
          name: snapshot.data()?.name,
          year: snapshot.data()?.year,
          description: snapshot.data()?.description,
          model: snapshot.data()?.model,
          city: snapshot.data()?.city,
          created: snapshot.data()?.created,
          km: snapshot.data()?.km,
          price: snapshot.data()?.price,
          owner: snapshot.data()?.owner,
          uid: snapshot.data()?.uid,
          images: snapshot.data()?.images,
          whatsapp: snapshot.data()?.whatsapp,
        });
      });
    }

    loadCar();
  }, [id]);

  return (
    <Container>
      <h1>Detalhes do carro</h1>

      {car && (
        <main className="w-full bg-white rounded-lg p-6 my-4">
          <div className="flex flex-col sm:flex-row mb-4 items-center justify-between">
            <h1 className="font-bold text-3xl text-black">{car?.name}</h1>
            <h1 className="font-bold text-3xl text-black">{car?.price}</h1>
          </div>

          <p>{car?.model}</p>

          <div className="flex w-full gap-6 my-4">
            <div className="flex flex-col gap-4">
              <div>
                <p>Cidade</p>
                <strong>{car?.city}</strong>
              </div>
              <div>
                <p>Ano</p>
                <strong>{car?.year}</strong>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <p>KM</p>
                <strong>{car?.km}</strong>
              </div>
            </div>
          </div>

          <strong>Descrição:</strong>
          <p className="mb-4">{car?.description}</p>

          <strong>Telefone / Whatsapp</strong>
          <p>{car?.whatsapp}</p>

          <a
            className="bg-green-500 w-full text-white flex items-center justify-center gap-2 my-6 h-11 text-xl rounded-lg font-medium cursor-pointer"
            href="$"
          >
            Conversar com vendedor <FaWhatsapp size={26} color="#fff" />
          </a>
        </main>
      )}
    </Container>
  );
}

export default CarDetails;
