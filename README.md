# FORMA BUILD — концептуальный сайт строительной компании

Демонстрационный проект для портфолио: корпоративный сайт компании по строительству частных домов.
**Компания, объекты, цены и контакты вымышлены, изображения созданы ИИ.**

Стек: HTML5, CSS3, JavaScript ES6+ (без фреймворков), Vite.

## Запуск

```bash
npm install
npm run dev       # разработка, http://localhost:5173
npm run build     # production-сборка в dist/
npm run preview   # проверка сборки
```
Нужен Node.js 18+ (рекомендуется 20, см. `.nvmrc`).

## Публикация на GitHub

```bash
git init
git add .
git commit -m "Initial commit: FORMA BUILD concept site"
git branch -M main
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```
Для автодеплоя на GitHub Pages: **Settings → Pages → Source: GitHub Actions**. Workflow `.github/workflows/deploy.yml` соберёт и опубликует сайт при каждом push в `main`. Сборка использует `base: './'`, поэтому сайт работает и в подпапке `/<repo>/`.

После публикации замените `example.com` в `public/robots.txt` и `public/sitemap.xml` на реальный адрес и добавьте абсолютный `og:image` в `index.html`.

## Что реализовано

- 12 секций по ТЗ + «Материалы» (вкладки) и «Подборка архитектурных решений» (полноэкранный просмотр).
- Проекты: фильтр по типу, карточки, галерея в модальном окне (стрелки, Esc, фокус-ловушка).
- Калькулятор с анимацией суммы и кнопкой «Передать расчёт в заявку»; кнопки услуг подставляют тип задачи в форму.
- Форма с валидацией, состоянием загрузки и честным деморежимом.
- Анимации: появление Hero по строкам, ступенчатое появление блоков, раскрытие изображений, параллакс Hero, шапка скрывается при прокрутке вниз, линия этапов, плавные hover-состояния. Учтён `prefers-reduced-motion`.
- Закреплённая кнопка «Обсудить проект» на мобильных, кнопка «Наверх», прогресс прокрутки, подсветка текущего раздела.
- Две видео-полосы (запускаются только в зоне видимости), видео проекта Courtyard первым слайдом галереи, `srcset` для всех фото (телефоны грузят лёгкие версии).
- Политика конфиденциальности (демо-текст в `<dialog>`), страница 404, favicon (ico/svg/apple-touch), web manifest, Open Graph.
- Адаптивность проверена автоматически на 20 размерах экрана (320–2560 px, включая ландшафт телефонов): без горизонтального переполнения, наложений и обрезанного текста.

## Структура

```
index.html
public/images/     изображения по папкам: hero, about, projects, services, process, quality, details, budget, faq, og (WebP; `name.webp` и `name-m.webp` для мобильных)
public/video/      видео (mp4 + webm + постеры)
public/            иконки, robots.txt, sitemap.xml, 404.html
src/main.js        точка входа
src/styles/        variables, base, layout, components, responsive
src/scripts/       navigation, projects, gallery, materials, calculator, form, policy, animations, utils
screenshots/       скриншоты для портфолио
.github/workflows/ деплой на GitHub Pages
```

## Ограничения деморежима

- Форма по умолчанию **не отправляет** данные и показывает честное сообщение о демо-версии. Чтобы заявки приходили, скопируйте `.env.example` в `.env` и укажите `VITE_FORM_ENDPOINT` (например, Formspree). Тогда форма отправляет JSON POST-запросом и показывает результат.
- Калькулятор — условный, не коммерческая смета.
- Телефон, email, адрес и текст политики конфиденциальности вымышлены. Замените их в `index.html` перед реальным запуском.
- Lighthouse не измерялся в среде разработки. Цели: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 90+.
- Шрифт Manrope загружается с Google Fonts. Для полной автономности можно подключить локальные файлы.

## Медиа
Все изображения и видео сгенерированы ИИ и оптимизированы (WebP, H.264/VP9 без звука). Оригиналы в полном размере в репозиторий не входят.
# Forma-Build
