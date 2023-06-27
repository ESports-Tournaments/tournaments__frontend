## Установка и запуск

1. Убедитесь, что у вас установлены Node.js и npm.

2. Клонируйте репозиторий на свой компьютер

```bash
git clone git@github.com:ESports-Tournaments/tournaments__frontend.git
```

Статья [Работа с git через консоль](https://htmlacademy.ru/blog/git/git-console)

3. Перейдите в папку проекта

```bash
cd tournaments__frontend
```

4. Установите зависимости командой

```bash
npm i
```

5. Запустите проект в режиме разработки командой

```bash
npm run dev
```

## Скрипты

### `dev`

Запускает проект в режиме разработки с помощью Vite.

### `build`

Собирает проект для production-режима. Сначала выполняется компиляция TypeScript (`tsc`), затем сборка проекта с помощью Vite.

### `preview`

Показывает предпросмотр production-версии проекта, сгенерированной командой `npm run build`.

### `analyze`

Собирает проект для production-режима с активированным анализом бандла.

### `lint`

Выполняет проверку кода проекта с помощью ESLint.

### `lint:fix`

Выполняет проверку и исправление ошибок кода проекта с помощью ESLint.

## Настройка ESLint и Prettier

Для линтинга кода в проекте используются конфигурации ESLint и Prettier. Для настройки автоматического применения исправлений при сохранении файла в вашей IDE выполните следующие инструкции:

1. VSCode:

ESLint:

1. В файле `settings.json` (File > Preferences > Settings) добавьте следующую строку:

```
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
}
```

2. Готово! Теперь при сохранении файла в VSCode, ESLint будет автоматически применять исправления.

Prettier:

1. В файле `settings.json` (File > Preferences > Settings) добавьте следующие строки:

```
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
},
"[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
},
"[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
},
"[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
}
```

2. Готово! Теперь при сохранении файла в VSCode, Prettier будет автоматически форматировать его согласно настройкам.

3. WebStorm:

ESLint:

1. В разделе Languages & Frameworks > JavaScript > Code Quality Tools > ESLint в настройках IDE отметьте галочку "Auto-fix on Save".
2. Готово! Теперь при сохранении файла в WebStorm, ESLint будет автоматически применять исправления.

Prettier:

1. В разделе Languages & Frameworks > JavaScript > Prettier в настройках IDE отметьте галочку "Run on save for files".
2. Готово! Теперь при сохранении файла в WebStorm, Prettier будет автоматически форматировать его согласно настройкам.

## Использование других пакетных менеджеров

Если вы предпочитаете использовать другие пакетные менеджеры, например Yarn или PNPM, вы можете выполнить следующие шаги:

### Yarn

1. Установите Yarn на свой компьютер, используя инструкции, приведенные в [официальной документации](https://yarnpkg.com/getting-started/install).
2. Клонируйте репозиторий на свой компьютер.
3. Перейдите в папку проекта.
4. Установите зависимости командой `yarn install`.
5. Запустите проект командой `yarn dev`.

Все скрипты остаются такими же, как и для NPM.

### PNPM

1. Установите PNPM на свой компьютер, используя инструкции, приведенные в [официальной документации](https://pnpm.io/installation).
2. Клонируйте репозиторий на свой компьютер.
3. Перейдите в папку проекта.
4. Установите зависимости командой `pnpm install`.
5. Запустите проект командой `pnpm run dev`.

Все скрипты остаются такими же, как и для NPM.

Независимо от выбранного пакетного менеджера, вы можете использовать все перечисленные скрипты без изменений.
