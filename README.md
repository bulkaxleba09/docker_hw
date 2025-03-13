## My Amazing Docker Homework

📌 О проекте

Этот проект представляет собой бэкэнд сервиса системы тестирования, упакованный в Docker-контейнер. В данном проекте все запросы можно протестировать через Swagger.  Данный README поможет вам развернуть его на вашей машине шаг за шагом.

📂 1. Создание папки и клонирование репозитория

Сначала создайте новую папку (название на английском), куда будет склонирован проект, и перейдите в нее:

```sh
mkdir docker_project && cd docker_project
```

Теперь клонируйте репозиторий:

```sh
git clone https://github.com/bulkaxleba09/docker_hw .
```

🛠 2. Установка Node.js и npm

Обновляем пакетный менеджер:

```sh
sudo apt update
```

Устанавливаем Node.js:

```sh
sudo apt install nodejs -y
```

Проверяем, что Node.js установлен:

```sh
node -v
```

Устанавливаем npm (Node Package Manager):

```sh
sudo apt install npm -y
```

Проверяем, что npm установлен:

```sh
npm -v
```

🐳 3. Установка Docker

Устанавливаем Docker:

```sh
sudo apt install docker -y
```

Устанавливаем дополнительные компоненты Docker:

```sh
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
```

Проверяем, что Docker установлен и работает:

```sh
sudo docker run hello-world
```

Если Docker установлен правильно, вы увидите сообщение от hello-world контейнера.

📦 4. Установка Docker Compose

```sh
sudo apt install docker-compose -y
```

🚀 5. Запуск проекта

Перейдите в папку с клонированным репозиторием (если вы еще не там) и выполните:

```sh
docker compose up --build
```

Эта команда создаст и запустит контейнеры с вашим приложением.

🌍 6. Проверка работы

После успешного запуска контейнера, откройте в браузере:

```sh
http://localhost:3001/dstu
```

Теперь ваше приложение должно быть доступно. 🎉

# P.S. Я победила докер и смогла поставить его на мак 🎉🎉🎉🎉🎉🎉🎉🎉 (и неважно, сколько часов и попыток это заняло....)
