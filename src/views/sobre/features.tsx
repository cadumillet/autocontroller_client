import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Evite gastos com sinistros e multas.",
    description:
      "Utilize as gravações das câmeras para investigar incidentes e violações, proporcionando uma gestão eficaz de eventos adversos.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Avalie o comportamento de direção de sua frota.",
    description:
      "Examine minuciosamente a maneira como os veículos estão sendo conduzidos para fornecer orientações aprimoradas aos condutores, visando a melhoria contínua.",
    icon: LockClosedIcon,
  },
  {
    name: "Controle seu custo com combustível.",
    description:
      "Utilize soluções de roteirização, cercas eletrônicas e controle de direção.",
    icon: ServerIcon,
  },
];

export const Features = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Auto Controller Rastreamento e Tecnologia
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Eficiência na gestão de sua frota
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Personalizamos nossos produtos e serviços de acordo com a
                necessidade de cada cliente.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              src="https://img.freepik.com/fotos-gratis/jovem-mecanico-de-carro-preto-usando-computador-com-seu-gerente-na-oficina-mecanica_637285-4243.jpg?w=1060&t=st=1703856686~exp=1703857286~hmac=abbb3e81fe87a130e13b6e19679eb445d66eae8be4469103896e4d3ffa2c8a5c"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
