import React from "react";

export default function MediaPage() {
  return (
    <main>
      <div className="bg-[#0069FF] pb-8">
        <div className="px-0 py-6 text-6xl font-semibold text-center text-white bg-[#0069FF] max-sm:px-0 max-sm:py-4 max-sm:text-4xl">
          Новости
        </div>
        <div className="flex justify-center p-0 mx-auto my-0 bg-[#2B82FF] rounded-lg  w-[458px] max-sm:flex-wrap max-sm:h-auto max-sm:w-[90%]">
          <div className="px-6 pt-1.5 pb-2 text-lg font-semibold text-white cursor-pointer max-sm:flex-auto max-sm:px-4 max-sm:py-2">
            Все
          </div>
          <div className="px-6 pt-1.5 pb-2 text-lg font-semibold text-white cursor-pointer max-sm:flex-auto max-sm:px-4 max-sm:py-2">
            СМИ о нас
          </div>
          <div className="px-6 pt-1.5 pb-2 text-lg font-semibold text-white cursor-pointer max-sm:flex-auto max-sm:px-4 max-sm:py-2">
            События
          </div>
          <div className="px-6 pt-1.5 pb-2 text-lg font-semibold text-white cursor-pointer max-sm:flex-auto max-sm:px-4 max-sm:py-2">
            Акции
          </div>
        </div>
      </div>

      <div className="grid gap-20 p-24 bg-white grid-cols-[repeat(3,1fr)] max-md:gap-10 max-md:p-10 max-md:grid-cols-[repeat(2,1fr)] max-sm:gap-8 max-sm:p-4 max-sm:grid-cols-[1fr]">
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/dmedia.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="D media"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Медиаслияние года: WhiteBird стала совладельцем футбольного клуба
              DMedia (Минск)
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              04 April 2025
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/alarm.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Alarm"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Уважаемые клиенты!
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              24 March 2025
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/1year.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="1 Year"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Карте Crypto исполнился год!
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              14 March 2025
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/wb-swoo.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="WB Swoo"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              WhiteBird запустил манибэк в токенах
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              03 March 2025
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/eggs.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Eggs"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Эксперт WhiteBird Илья Сивопляс про инфляцию, рынок облигаций и
              яичную лихорадку
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              13 February 2025
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/sivoplyas.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Siviplyas"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              А что на рынке? Комментирует эксперт WhiteBird Илья Сивопляс
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              03 February 2025
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/crypto2025.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Crypto2025"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Еще раз коротко о карте Crypto
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              31 January 2025
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/cards2.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Cards2"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              WhiteBird расширил линейку банковских карт, доступных для
              проведения операций обмена
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              28 January 2025
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/start2.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="START 2.0"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              WhiteBird возвращает специальные условия на первую сделку на
              платформе
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              22 January 2025
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/sobranie.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Sobranie"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Уважаемые клиенты!
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              17 January 2025
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/pvt25.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="PVT 25"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Официальное разъяснение Парка высоких технологий
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              16 January 2025
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/moshenniki.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Moshenniki"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              ВНИМАНИЕ! Очередная мошенническая схема с криптовалютой!
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              15 January 2025
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/cards.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Cards"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              С какими платежными картами мы работаем
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              09 January 2025
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/sobranie.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Sobranie"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Уважаемые клиенты!
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              08 January 2025
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/115.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="115"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Владельцам российских банковских карт
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              07 January 2025
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/sobranie.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Sobranie"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Уважаемые клиенты!
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              31 December 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/alfa-const.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="ALFA Const"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Сниженные комиссии для операций с картами Альфа Банк (Беларусь) на
              WhiteBird становятся постоянными
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              30 December 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/zakon2025.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Zakon2025"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Крипта, заработанная на крипте в 2025 году, как и ранее, без
              налогов и деклараций
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              27 December 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/conf-russia.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Conf russia"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Как дела у соседей? Как россиянам получить доступ к легальным
              криптосервисам
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              17 December 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/usdt-trc20.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="USDT TRC 20"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Беспрецедентная акция на WhiteBird: комиссия 1,5% на покупку USDT
              (TRC-20)
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              15 December 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/kids-sport.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Kids sport"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              WhiteBird поддерживает детский спорт
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              06 December 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/sotrudnik2024-03.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Sotrudnik2024 03"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Интервью с победителями. Часть 2
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              04 December 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/belarusbank-belcart.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Belarusbank belcart"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              WhiteBird начала принимать карты Белкарт — результат
              сотрудничества с Беларусбанком
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              03 December 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/carta-rus.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Carta rus"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              WhiteBird начала работать с картами российских банков
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              03 December 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/project2024.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Project2024"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Интервью с победителями. Часть 1
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              02 December 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/cryptovibe-december.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Cryptovibe december"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Акция Crypto Вайб продлится до конца года
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              01 December 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/4-goda.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="4 goda"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              WhiteBird отметила четыре года со дня основания
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              29 November 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/market.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Market"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              WhiteBird объявила о запуске криптобиржи
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              28 November 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/kept.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Kept"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              WhiteBird успешно прошла аудит независимой аудиторской
              организацией Kept на соответствие требованиям ПВТ
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              25 November 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/menagers-tel.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Menagers tel"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Внимание! Изменились номера персональных менеджеров
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              21 November 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/50000clients.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="50000clients"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              На WhiteBird зарегистрирован 50-тысячный пользователь!
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              15 November 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/1500cart.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="1500cart"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Более 1,5 тысяч клиентов WhiteBird выпустили карту Crypto в первый
              месяц Crypto Вайба
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              12 November 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/bankit.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Bankit"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Директор WhiteBird Максим Шабанов совместно с коллегами по рынку
              обсудили новые возможности и перспективы сферы обращения токенов
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              24 October 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/24oktyabrya.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="24oktyabrya"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Степан Лапшинов выступит на конференции «Ярмарка финансирования
              2024»
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              15 October 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/vibe-instruction.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Vibe instruction"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Как стать участником акции «Crypto Вайб»: пошаговая инструкция
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              11 October 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/crypto-vibe.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Crypto Vibe"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Исторически низкие комиссии для владельцев карты Crypto с акцией
              Crypto Вайб
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              07 October 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/premium.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Premium"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Присоединяйся к сервису WhiteBird Premium
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              04 October 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/belkart2.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Belkart2"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Карту БЕЛКАРТ-ПРЕМИУМ Альфа Банка (Беларусь) можно выпустить прямо
              на WhiteBird
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              27 September 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/big-money.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Big Money"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Скидка 15% на операции от 10 000 долларов США: �� WhiteBird
              стартует акция Big Money!
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              26 September 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/start-continue.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Start continue"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Акция Start продлена до 01 января 2025 года
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              20 September 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/fake.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Fake"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Осторожно, подделка!
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              19 September 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/ukaz.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Ukaz"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Подписан Указ Президента Республики Беларусь № 367 &quot;Об
              обращении цифровых знаков (токенов) &quot;
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              18 September 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/fns.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="FNS"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Владельцам карты Crypto - резидентам РФ - на заметку!
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              13 September 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/wb-news1.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="WB News1"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Состоялось размещение долговых токенов WhiteBird (USD) с
              доходностью 8% годовых
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              10 September 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/wb-news-10-09.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="WB News 10 09"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              USDT в сети TON теперь доступен на WhiteBird
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              09 September 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/commutity.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Commutity"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              В 10 раз больше новых клиентов!
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              29 August 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/vopros-nedeli-komissia.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Vopros nedeli komissia"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Как рассчитать комиссию при покупке/продаже крипты?
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              14 August 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/ton.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Ton"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Toncoin (TON) стал доступен на WhiteBird
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              13 August 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/profit2-0.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Profit2 0"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Партнерская программа WhiteBird Profit стала еще привлекательнее
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              01 August 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/druzja.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Druzja"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              29-31 июля – дни низких комиссий для друзей WhiteBird
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              28 July 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/otkaz-5-oshibok.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Otkaz 5 oshibok"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Топ-5 типичных ошибок, которые приводят к отмене заявки
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              25 July 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/vebinar.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Vebinar"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              25 июля WhiteBird проведет вебинар «Крипта и налоги»
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              24 July 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/jara.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Jara"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Жара! Комиссии WhiteBird тают и снижаются
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              19 July 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/verificaziya.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Verificaziya"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Как пройти верификацию быстро?
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              08 July 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/persmanager.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Persmanager"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              С клиентами WhiteBird будут работать персональные менеджеры
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              05 July 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/nacionalniy-bank.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Nacionalniy bank"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Криптоплатформа Whitebird включена в реестр поставщиков платежных
              услуг Национального Банка Республики Беларусь
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              27 June 2024
            </div>
          </div>
        </div>
        <div className="w-[518px] max-sm:w-full">
          <img
            src="/news/grodno-energo.jpg"
            className="object-cover w-full rounded-xl h-[259px]"
            alt="Grodno energo"
          />
          <div className="pt-5">
            <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
              Эксперт Whitebird Иван Рымацкий познакомил молодых энергетиков с
              миром криптовалюты и блокчейн
            </div>
            <div className="text-xl text-slate-400 max-sm:text-base">
              21 June 2024
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
