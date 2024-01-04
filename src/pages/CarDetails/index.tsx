import { useState, useEffect } from "react";

import Container from "../../components/Container";

import { FaWhatsapp } from "react-icons/fa";

import { useNavigate, useParams } from "react-router-dom";

import { CarProps } from "../Home";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

import { Swiper, SwiperSlide } from "swiper/react";

interface CarDetailsProps extends CarProps {
  whatsapp: string;
  owner: string;
  created: string;
  description: string;
  model: string;
}

function CarDetails() {
  const [car, setCar] = useState<CarDetailsProps>();

  const [sliderPerView, setSliderPerView] = useState<number>(2);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function loadCar() {
      if (!id) return;

      const docRef = doc(db, "cars", id);

      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() === undefined) {
          navigate("/");
        }

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
  }, [id, navigate]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSliderPerView(1);
      } else {
        setSliderPerView(2);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      {car && (
        <Swiper
          slidesPerView={sliderPerView}
          pagination={{ clickable: true }}
          navigation
        >
          {car?.images.map((image) => (
            <SwiperSlide key={image.name}>
              <img
                src={image.url}
                className="w-full h-96 object-cover"
                alt={image.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

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
            href={`http://api.whatsapp.com/send?phone=${car?.whatsapp}&text=Gostaria de falar sobre o anuncio do carro ${car?.name}.`}
            target="_blank"
          >
            Conversar com vendedor <FaWhatsapp size={26} color="#fff" />
          </a>
        </main>
      )}
    </Container>
  );
}

export default CarDetails;
