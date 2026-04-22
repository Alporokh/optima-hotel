import { useState, useEffect } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="size-full bg-white flex flex-col">
      {/* Slide Container */}
      <div className="flex-1 overflow-hidden">
        {currentSlide === 0 && <Slide1 />}
        {currentSlide === 1 && <Slide2 />}
        {currentSlide === 2 && <Slide3 />}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between px-12 py-6 border-t border-gray-200">
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
          className="px-6 py-2 text-gray-600 hover:text-gray-900 transition-colors disabled:opacity-30"
          disabled={currentSlide === 0}
        >
          ← Назад
        </button>

        <div className="flex gap-2">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? 'bg-gray-900 w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
          className="px-6 py-2 text-gray-600 hover:text-gray-900 transition-colors disabled:opacity-30"
          disabled={currentSlide === 2}
        >
          Далі →
        </button>
      </div>
    </div>
  );
}

function Slide1() {
  return (
    <div className="h-full p-12 overflow-auto">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <ImageWithFallback
            src="/src/imports/image.png"
            alt="Optima Hotels Logo"
            className="h-16 object-contain"
          />
        </div>

        <div className="grid grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h1 className="text-5xl font-light mb-6 text-gray-900">
              Готель в<br />
              М. КАМ'ЯНЕЦЬ-ПОДІЛЬСЬКИЙ
            </h1>
            <p className="text-xl text-gray-500 mb-8">Україна 2026</p>

            <div className="mb-6 text-gray-700 leading-relaxed">
              <p>Готель засновано у 2008, в мережі Оптіма Хотелс з літа 2012.</p>
              <p className="mt-4">Знаходиться за адресою вулиця Старобульварна, 2</p>
            </div>

            <a
              href="https://www.google.com/maps/search/вулиця+Старобульварна,+2+Кам'янець-Подільський"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>📍</span>
              Переглянути на Google Maps
            </a>

            {/* Photos */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <ImageWithFallback
                src="/src/imports/photo_2026-04-22_19-13-04.jpg"
                alt="Hotel exterior"
                className="w-full h-40 object-cover rounded"
              />
              <ImageWithFallback
                src="/src/imports/photo_2026-04-22_19-13-23.jpg"
                alt="Hotel view"
                className="w-full h-40 object-cover rounded"
              />
              <ImageWithFallback
                src="/src/imports/photo_2026-04-22_19-13-46.jpg"
                alt="Hotel interior"
                className="w-full h-40 object-cover rounded"
              />
              <ImageWithFallback
                src="/src/imports/photo_2026-04-22_19-14-00.jpg"
                alt="Hotel room"
                className="w-full h-40 object-cover rounded"
              />
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-light mb-6 text-gray-900">Переваги готелю</h2>

              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Один з найкращих 4* отелів Поділля і Центральної України</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Унікальний готельний комплекс в центрі Старого міста поряд з центральною площею та Ратушею</span>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-light mb-4 text-gray-900">Рейтинг готелю:</h3>
                <div className="space-y-2 text-gray-700">
                  <p>• Оцінка Booking.com <span className="font-medium">9,1 з 10</span></p>
                  <p>• Оцінка Agoda <span className="font-medium">9,2 з 10</span></p>
                  <p>• Рейтинг Google Maps <span className="font-medium">4,5 з 5</span></p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Готель знаходиться поруч з історичними пам'ятками XI-XIX сторіччя.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide2() {
  return (
    <div className="h-full p-12 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h1 className="text-4xl font-light mb-8 text-gray-900">Діючий Готельний Бізнес</h1>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Пропонуються до продажі корпоративні права ТОВ (100%), яке володіє всім майном
                готельного комплексу і монолітом, залитим під другу чергу готелю. ТОВ має
                довгострокове право оренди земельної ділянки, що належить до НІАЗ «Кам'янець»,
                з можливістю добудови другої черги готелю.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-lg">Площа нерухомості <span className="font-medium">2,474 кв. м.</span></p>
                <p className="text-lg mt-2">Площа земельної ділянки <span className="font-medium">2,547 кв. м.</span></p>
              </div>

              <div>
                <h3 className="text-xl font-light mb-4 text-gray-900">В готелі є повністю обладнані:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>38 номерів шести категорій</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Ресторан</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Літній майданчик з видом на центральну площу і Ратушу</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Кав'ярня</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>SPA-центр</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Унікальні підвальні приміщення XVI-XVIII сторіччя</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Винний погреб</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Дитяча кімната</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Паркінг</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-lg h-full">
              <h2 className="text-3xl font-light mb-6 text-gray-900">Перспективи Розвитку Готелю</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Можливість збільшити площу до <span className="font-medium">7000 кв. м.</span> і
                номерний фонд до <span className="font-medium">100-120 номерів</span>, добудувати повноцінний СПА.
              </p>

              {/* Photos */}
              <div className="grid grid-cols-2 gap-4">
                <ImageWithFallback
                  src="/src/imports/photo_2026-04-22_19-14-08.jpg"
                  alt="Hotel facility"
                  className="w-full h-48 object-cover rounded"
                />
                <ImageWithFallback
                  src="/src/imports/photo_2026-04-22_19-12-42.jpg"
                  alt="Hotel amenity"
                  className="w-full h-48 object-cover rounded"
                />
                <ImageWithFallback
                  src="/src/imports/photo_2026-04-22_17-22-01.jpg"
                  alt="Hotel space"
                  className="w-full h-48 object-cover rounded col-span-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide3() {
  return (
    <div className="h-full p-12 flex items-center justify-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-light mb-16 text-gray-900">Контакти</h1>

        {/* Social Media */}
        <div className="mb-16">
          <h2 className="text-2xl font-light mb-8 text-gray-700">Готель в соціальних мережах</h2>
          <div className="flex gap-6 justify-center">
            <a
              href="https://www.instagram.com/optima.collection.kp?igsh=MTJnYjEydHMwMWxudQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all"
            >
              <span className="text-2xl">📷</span>
              <span className="text-lg">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/share/1HMRdtEdCi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              <span className="text-2xl">f</span>
              <span className="text-lg">Facebook</span>
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-50 p-12 rounded-lg">
          <div className="space-y-6">
            <div>
              <p className="text-gray-600 mb-2">Телефон</p>
              <a
                href="tel:+380672235099"
                className="text-3xl font-light text-gray-900 hover:text-blue-600 transition-colors"
              >
                +380 67 223 5099
              </a>
            </div>
            <div>
              <p className="text-gray-600 mb-2">Email</p>
              <a
                href="mailto:sybirtsev@uaconsult.com.ua"
                className="text-2xl font-light text-gray-900 hover:text-blue-600 transition-colors"
              >
                sybirtsev@uaconsult.com.ua
              </a>
            </div>
          </div>
        </div>

        {/* Hotel Photo */}
        <div className="mt-12">
          <ImageWithFallback
            src="/src/imports/photo_2026-04-22_19-03-15.jpg"
            alt="Hotel view"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}