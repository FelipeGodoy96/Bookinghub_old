# Dockerfile enviando adicionando um repositorio direto do github

# Backend Ecommerce.JAR 
#fala qual imagem vamos usar
FROM openjdk:17.0.2-jdk
#cria a pasta dentro da imagem - no momento de criação da imagem
WORKDIR /app
# adiciono o .jar do meu projeto na imagem do Docker
# ADD ecommerce.jar /ecommerce
ADD https://github.com/DH-Sports-Ecommerce/DH_Ecommerce_Back_End/raw/issue17/target/ecommerce-0.0.1-SNAPSHOT.jar /app/ecommerce.jar
#comando especial para fazer o java rodar meu projeto no momento que o container é criado
# ENTRYPOINT ["java", "-jar", "ecommerce.jar"]
ENTRYPOINT ["java", "-Dspring.profiles.active=docker","-jar", "ecommerce.jar"]