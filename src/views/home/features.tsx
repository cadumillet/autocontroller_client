import { RocketIcon, SecurityIcon, TechnologyIcon } from "@/assets/icons";

const features = [
  {
    name: "Controle",
    description:
      "Com soluções avançadas, oferecemos controle efetivo da sua frota, proporcionando suporte à logística e gerenciamento de riscos.",
    href: "#",
    icon: RocketIcon,
  },
  {
    name: "Tecnologia",
    description:
      "Utilizando as melhores tecnologias do mercado, asseguramos tranquilidade e segurança no monitoramento de sua frota, com comunicação de dados confiáveis de localização.",
    href: "#",
    icon: TechnologyIcon,
  },
  {
    name: "Segurança",
    description:
      "Oferecemos produtos e serviços que proporcionam a segurança de seus colaboradores e patrimônio.",
    href: "#",
    icon: SecurityIcon,
  },
];

export function Features() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Sua frota em boas mãos
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Gerencie suas operações com toda segurança e tranquilidade
            utilizando um rastreamento inteligente.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
