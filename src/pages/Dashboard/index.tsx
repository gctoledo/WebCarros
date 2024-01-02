import { useContext, useEffect, useState } from "react";

import Container from "../../components/Container";
import DashboardHeader from "../../components/DashboardHeader";

import { FiTrash2 } from "react-icons/fi";

import {
  collection,
  getDocs,
  query,
  where,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db, storage } from "../../services/firebaseConnection";
import { ref, deleteObject } from "firebase/storage";

import { AuthContext } from "../../contexts/AuthContext";

import { CarProps } from "../Home";

function Dashboard() {
  const [cars, setCars] = useState<CarProps[]>([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.uid) {
      return;
    }

    function loadCars() {
      const carsRef = collection(db, "cars");
      const queryRef = query(carsRef, where("uid", "==", user?.uid));

      getDocs(queryRef).then((snapshot) => {
        const listCars = [] as CarProps[];

        snapshot.forEach((doc) => {
          listCars.push({
            id: doc.id,
            city: doc.data().city,
            year: doc.data().year,
            km: doc.data().km,
            name: doc.data().name,
            price: doc.data().price,
            uid: doc.data().uid,
            images: doc.data().images,
          });
        });

        setCars(listCars);
      });
    }

    loadCars();
  }, [user]);

  const handleDeleteCar = async (car: CarProps) => {
    const itemCar = car;

    const docRef = doc(db, "cars", itemCar.id);
    await deleteDoc(docRef);

    itemCar.images.map(async (image) => {
      const imagePath = `images/${image.uid}/${image.name}`;
      const imageRef = ref(storage, imagePath);

      try {
        await deleteObject(imageRef);
        setCars(cars.filter((car) => car.id !== itemCar.id));
      } catch {
        console.log("ERRO AO EXCLUIR A IMAGEM");
      }
    });
  };

  return (
    <Container>
      <DashboardHeader />

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <section className="w-full bg-white rounded-lg relative" key={car.id}>
            <button
              className="absolute bg-white w-14 h-14 rounded-full flex items-center justify-center right-2 top-2 drop-shadow"
              onClick={() => handleDeleteCar(car)}
            >
              <FiTrash2 size={26} color="#000" />
            </button>
            <img
              src={car.images[0].url}
              alt={car.name}
              className="w-full rounded-lg mb-2 max-h-72"
            />

            <p className="font-bold mt-1 px-2 mb-2">{car.name}</p>

            <div className="flex flex-col px-2">
              <span className="text-zinc-700">
                Ano {car.year} | {car.km}km
              </span>

              <strong className="text-black font-bold mt-4">
                R$ {car.price}
              </strong>
            </div>

            <div className="w-full h-px bg-slate-200 my-2"></div>

            <div className="px-2 pb-2">
              <span className="text-black">{car.city}</span>
            </div>
          </section>
        ))}
      </main>
    </Container>
  );
}

export default Dashboard;
