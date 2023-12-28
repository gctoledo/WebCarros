import { FiUpload } from "react-icons/fi";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../../components/Input";

import Container from "../../../components/Container";
import DashboardHeader from "../../../components/DashboardHeader";

const schema = z.object({
  name: z.string().min(1, "O campo nome é obrigatório!"),
  model: z.string().min(1, "O modelo é obrigatório!"),
  year: z.string().min(1, "O ano do carro é obrigatório!"),
  km: z.string().min(1, "O KM do carro é obrigatório!"),
  price: z.string().min(1, "O preço do carro é obrigatório!"),
  city: z.string().min(1, "O campo cidade é obrigatório!"),
  whatsapp: z
    .string()
    .min(1, "O telefone é obrigatório")
    .refine((value) => /^(\d{10,12})$/.test(value), {
      message: "Número de telefone inválido!",
    }),
  description: z.string().min(1, "A descrição é obrigatória"),
});

type FormData = z.infer<typeof schema>;

function New() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Container>
      <DashboardHeader />

      <div className="w-ful bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2">
        <button className="border-2 w-48 rounded-lg flex items-center justify-center cursor-pointer border-gray-600 h-32 md:w-48">
          <div className="absolute cursor-pointer">
            <FiUpload size={30} color="#000" />
          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              className="opacity-0 cursor-pointer"
            />
          </div>
        </button>
      </div>

      <div className="w-ful bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2 mt-2">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <p className="mb-2 font-medium">Nome do carro</p>
            <Input
              type="text"
              register={register}
              name="name"
              error={errors.name?.message}
              placeholder="Ex: Argo Fiat 1.0"
            />
          </div>
          <div className="mb-3">
            <p className="mb-2 font-medium">Modelo do carro</p>
            <Input
              type="text"
              register={register}
              name="model"
              error={errors.model?.message}
              placeholder="Ex: 1.0 Flex Plus Manual"
            />
          </div>

          <div className="flex w-full mb-3 flex-row items-center gap-4">
            <div className="w-full">
              <p className="mb-2 font-medium">Ano do carro</p>
              <Input
                type="text"
                register={register}
                name="year"
                error={errors.year?.message}
                placeholder="Ex: 2018/2018"
              />
            </div>

            <div className="w-full">
              <p className="mb-2 font-medium">KM rodados</p>
              <Input
                type="text"
                register={register}
                name="km"
                error={errors.km?.message}
                placeholder="Ex: 23.900"
              />
            </div>
          </div>

          <div className="flex w-full mb-3 flex-row items-center gap-4">
            <div className="w-full">
              <p className="mb-2 font-medium">Telefone para contato</p>
              <Input
                type="text"
                register={register}
                name="whatsapp"
                error={errors.whatsapp?.message}
                placeholder="Ex: (11) 11111-1111"
              />
            </div>

            <div className="w-full">
              <p className="mb-2 font-medium">Cidade</p>
              <Input
                type="text"
                register={register}
                name="city"
                error={errors.city?.message}
                placeholder="Ex: São Paulo - SP"
              />
            </div>
          </div>

          <div className="mb-3">
            <p className="mb-2 font-medium">Preço</p>
            <Input
              type="text"
              register={register}
              name="price"
              error={errors.price?.message}
              placeholder="Ex: 69.900"
            />
          </div>

          <div className="mb-3">
            <p className="mb-2 font-medium">Descrição</p>
            <textarea
              className="border-2 w-full rounded-md h-24 px-2"
              {...register("description")}
              name="description"
              id="description"
              placeholder="Digite a descrição completa sobre o carro"
            />
            {errors.description && (
              <p className="mb-1 text-red-500">{errors.description.message}</p>
            )}
          </div>

          <button
            className="rounded-md bg-zinc-900 text-white font-medium w-full h-10"
            type="submit"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </Container>
  );
}

export default New;
