import React from "react";

export default function Footer() {
  const banks = [
    {
      name: "Альфа-банк",
      logo: "/banks/alfa.png",
    },
    {
      name: "Беларусбанк",
      logo: "/banks/belb.png",
    },
    {
      name: "Visa",
      logo: "/banks/visa.png",
    },
    {
      name: "Visa",
      logo: "/banks/visa2.png",
    },
    {
      name: "Master",
      logo: "/banks/master.png",
    },
    {
      name: "Master",
      logo: "/banks/id_check.png",
    },
    {
      name: "Belcart",
      logo: "/banks/belcart.png",
    },
    {
      name: "Belcart",
      logo: "/banks/belcart2.png",
    },
  ];
  return (
    <footer className="py-0 lg:py-4 md:py-0">
      <div className="mx-auto px-5 sm:px-20">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-medium text-[#1E1E28]">
            Мы на связи
          </h2>

          <button className="flex items-center bg-[#0069FF] text-white rounded-lg mt-12 md:mt-16 overflow-hidden cursor-pointer">
            <span className="px-6 py-4 text-xl">Сообщение в Whitebird</span>
            <div className="w-13 h-13 flex items-center justify-center">
              <img src="/bird.svg" alt="Message" />
            </div>
          </button>

          <div className="flex justify-around gap-8 md:gap-10 lg:gap-80 mt-24 md:mt-32 text-lg text-[#1E1E28] flex-wrap px-4">
            <a href="#" className="hover:text-[#0069FF] transition-colors">
              Вопросы-ответы
            </a>
            <a href="#" className="hover:text-[#0069FF] transition-colors">
              Новости
            </a>
            <a href="#" className="hover:text-[#0069FF] transition-colors">
              Поддержка
            </a>
          </div>

          <div className="flex border-y-1 border-[#dfdfdf] py-8 gap-8 overflow-x-auto lg:overflow-hidden justify-center w-full my-8">
            {banks.map((bank, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 cursor-pointer flex-shrink-0"
              >
                <img
                  src={bank.logo}
                  alt={bank.name}
                  className="object-contain w-16 h-16"
                />
              </div>
            ))}
          </div>
          <div className="w-full mt-8 overflow-hidden">
            <img
              src="/divider.svg"
              alt=""
              className="w-full"
              aria-hidden="true"
            />
          </div>

          <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-1">
              <div className="text-[#8F9DB1] text-base leading-6">
                <p>
                  ЗАО «Уайт Бёрд», УНП 591029489, Республика Беларусь,220030, г.
                  Минск, ул. Свердлова, д. 11, пом. 328 Свидетельство о
                  государственной регистрации юридического лица № 591029489,
                  выдано Минским городским исполнительным комитетом 23.07.2024
                </p>
                <p className="mt-10">Контактная информация:</p>
                <p className="mt-2">info@whitebird.io</p>
                <p className="mt-16">© 2020–2025 Whitebird</p>
                <div className="mt-8">
                  <img
                    src="/payment-methods.svg"
                    alt="Payment methods"
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="text-[#8F9DB1] text-base leading-6 space-y-6">
                <p>
                  ЗАО "Уайт Бёрд" правопреемник ООО "Уайт Бёрд", резидент Парка
                  высоких технологий, осуществляющий свою деятельность в
                  соответствии с Декретом Президента Республики Беларусь от 21
                  декабря 2017 г. № 8 «О развитии цифровой экономики» и иным
                  законодательством Республики Беларусь.
                </p>
                <p>
                  ЗАО "Уайт Бёрд" полностью соответствует требованиям «Положения
                  о требованиях, которым должны соответствовать отдельные
                  заявители для регистрации их в качестве резидентов Парка
                  высоких технологий», что подтверждено, в том числе,
                  независимыми специалистами ООО «Эрнст энд Янг» (Компания EY).
                </p>
                <p>
                  Посещение интернет-сайта, приобретение и доставка пользователю
                  конкретного товара (работы, услуги) могут быть незаконными на
                  территории страны, где находится пользователь. Если это так,
                  держатель карты не имеет права использовать свою платежную
                  карту для совершения транзакции.
                </p>
                <p>
                  Держатель карточки несёт ответственность за невыполнение
                  законов своей страны при посещении данного Интернет-сайта
                  и/или попытке приобрести товары (работы, услуги), если таковые
                  запрещены законодательством страны, где он находится.
                </p>
                <p>
                  Должностное лицо, ответственное за обеспечение защиты
                  информации, в части защиты персональных данных, специалист по
                  системному администрированию и информационной безопасности -
                  sec@whitebird.io
                </p>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="text-[#8F9DB1] text-base space-y-5">
                <p>Правила обращения с персональными данными</p>
                <p>Политика обработки персональных данных</p>
                <p>Порядок обеспечения конфиденциальности</p>
                <p>Политика оператора в отношении персональных данных</p>
                <p>Общие условия реализации токенов</p>
                <p>Управление конфликтами интересов</p>
                <p>Уведомление о рисках</p>
                <p>Публичная оферта</p>
                <p>Разрешение споров</p>
                <p>Информация о собраниях участников Общества</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
