# Bookinghub


## O que é?

O Bookighub é um projeto fullstack de ecommerce que atua como uma plataforma de anúncios de locações de estadias temporárias, ou seja, um intermediador entre cliente e proprietário de imóvel para locação. O projeto foca na acessibilidade, dispondo de ferramenta para leitura/usabilidade em Libras, garantindo uma experiência inclusiva.
O projeto possui um modelo de negócio similar ao [Booking](booking.com).

## Screenshots



## Instalação
###  Como funciona?

O bookinghub pode ser configurado para ambiente de desenvolvimento/localmente e ambiente de deploy/online.

#### AWS
Para rodar o projeto na infraestrutura da AWS é necessário várias etapas de configuração e criação de instâncias. 
O projeto conta com uma pipeline automatizadora do versionamento em infraestrutura.
Entretanto, o foco deste tutorial será na instalação local.

#### Localmente 
Para rodar o projeto localmente é necessário a instalação de alguns programas e ferramentas. Vamos separar por partes.

BACKEND
1)Java Web Server
a) Baixe e instale o editor de texto para Java. No exemplo usaremos [InteliJ](www.jetbrains.com/pt-br/idea/download/#section=windows), mas você pode usar outros como Eclipse ou NetBeans. 
b) Baixe e instale o [JDK 17](https://www.jetbrains.com/help/idea/sdk.html#define-sdk) em seu InteliJ.
c) Baixe o arquivo ZIP deste repositório. Extraia o conteúdo do arquivo em uma pasta no local que desejar.
d) Navegue até a pasta e clique com o botão direito no arquivo pom.xml e selecione a opção "Editar com InteliJ"
e) Por padrão, a branch main está configurada para o deploy na infraestrutura da AWS, então será necessário algumas configurações: 
	I - navegue até a pasta src/main/resources, abra o arquivo `application.properties` e verifique se o `spring.profiles.active` está setado para `dev`. Caso não, mude para dev.
	II - abra o arquivo `application-dev.properties`, comente a linha 10 e descomente a linha 11.
	III - na linha 12 mude de `admin` para `root` e na linha 13 coloque a senha que criou em seu MySQL Server + Workbench (veremos a seguir).

2)MySQL 
a) Baixe e instale o [MySQL Installer 8.0.31](dev.mysql.com/downloads/installer) na opção "Developer Default".
b) Após a conclusão, abra o MySQL Workbench conecte-se na instância local com seu usuário root e a senha definida durante a instalação.
c) Na aba de `queries`, crie um banco de dados de nome bookinghub_db. Você pode usar o comando `CREATE DATABASE bookinghub_db;`
d) Navegue até a pasta backend, abra o arquivo seeding.txt, copie todo o conteúdo e cole na query do workbench, execute.

Feito essas etapas, volte para o InteliJ e navegue até a pasta src/main/java/br.com.APIrest.APIrest, clique com o botão direito no arquivo APIrestApplication.java e selecione Run ou pressione o atalho Ctrl + Shift + F10. Pronto, a API já está online e comunicando-se com o banco de dados.

FRONTEND
1)Vite App Server
a) Baixe e instale o editor de texto para JavaScript. No exemplo usaremos [VSCode](code.visualstudio.com/download).
b) Baixe e instale o [NodeJS](nodejs.org/en/). Marque a opção para instalação do Chocolatey.
c) Navegue até a pasta frontend, abra o terminal (Ctrl + ') e execute o comando `npm install --global yarn`, depois `yarn install`.
d) Navegue até a pasta frontend/src/services, abra o arquivo apiHandle.JS e mude os endereços da linha 5 e 7 para localhost:8080

## Suporte

Se você tiver alguma dúvida ou dificuldade técnica com a instalação entre outras ocorrências, você pode entrar em contato através do linkedin dos responsáveis por este projeto.
[Felipe Godoy](www.linkedin.com/in/felipe-godoy-00186812b/

## Autores
[Felipe Godoy](https://github.com/FelipeGodoy96)
[Matheus Emanoel](https://github.com/fehbr800)
[Rodrigo Ferreira](https://github.com/rllimaferreira)
[Victor Luz](https://github.com/vitinop)
[Vinicius Felce](https://github.com/ViniciusFelce)

