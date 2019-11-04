# Webpack 4

Curso de la version de Webpack 4.

## generar public key para github

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
git add .
git commit -m "firt commit"
git remote add origin git@github.com:hackchan/webpack-4
git push -u origin master

git config --global alias.superlog "log --graph --abbrev-commit --decorate --date=relative --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all"
```

## Comandos Utilizados en el curso

ver la documentacion de [npm](https://docs.npmjs.com/) para ampliar la informacion.

```bash
node -v
npm -v
npm install --save-dev  --save-exact webpack
npm i -D -E webpack
npm i -D -E webpack-cli
npx webpack -v (como el webpack-cli no se instalo de forma global lo ejecutamos con npx)
npx webpack --entry ./src/js/index.js --output ./src/js/bundle.js --mode development
i  => install
-S => --save  (esta por defecto si no se especifica ninguna)
-D => --save-dev
-E => --save-exact
```

## Usage

```python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
