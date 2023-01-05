# Backend
## docker

### docker-compose
definido docker em environment na linha `12`
```
    environment:
      SPRING_PROFILES_ACTIVE: docker
```

### application.properties
- definido docker na linha `5`, assim ele passara a utilizar o arquivo de configuracao `application-docker.properties`
```
spring.profiles.active=docker
```

### application-docker.properties
- usando o nome do servico `mysql_db` como foi definido no `docker-compose-mysql.yml` ao invez do ip da instancia (Ip publico ou localhost). 
```
spring.datasource.url=jdbc:mysql://mysql_db:3306/ecommerce? ...
```

# Infra
## Terraform

### variables.tf - editado:
```
 variable "usuario" {
     default = "confucioDevOps"
}
```

### securitygroup.tf - adicionado:
```

#SG de permitindo o acesso a porta 80 para toda a internet, 
#pois quem for acessar nosso front, estara na internet
resource "aws_security_group" "sg_acesso_tomcat_publico" {
  description = "sg acesso tomcat publico"
  vpc_id = aws_vpc.vpc.id
  #liberando a entrada pela porta 80 - HTTP
  ingress {
    description      = "Tomcat"
    from_port        = 8080
    to_port          = 8080
    protocol         = "tcp"
    cidr_blocks      = [var.bloco_ip_destino_publico]
  }
  tags = {
    "Name" = "${var.usuario}-sg-tomcat-publico"
  }
}

#SG de permitindo o acesso a porta 80 para toda a internet, 
#pois quem for acessar nosso front, estara na internet
resource "aws_security_group" "sg_acesso_mysql_publico" {
  description = "sg acesso mysql publico"
  vpc_id = aws_vpc.vpc.id
  #liberando a entrada pela porta 80 - HTTP
  ingress {
    description      = "MySQL"
    from_port        = 3306
    to_port          = 3306
    protocol         = "tcp"
    cidr_blocks      = [var.bloco_ip_destino_publico]
  }
  tags = {
    "Name" = "${var.usuario}-sg-mysql-publico"
  }
}

resource "aws_security_group" "sg_acesso_portainer_publico" {
  description = "sg acesso portainer publico"
  vpc_id = aws_vpc.vpc.id
  #liberando a entrada pela porta 80 - HTTP
  ingress {
    description      = "Portainer 8000"
    from_port        = 8000
    to_port          = 8000
    protocol         = "tcp"
    cidr_blocks      = [var.bloco_ip_destino_publico]
  }
  ingress {
    description      = "Portainer 9443"
    from_port        = 9443
    to_port          = 9443
    protocol         = "tcp"
    cidr_blocks      = [var.bloco_ip_destino_publico]
  }
  tags = {
    "Name" = "${var.usuario}-sg-portainer-publico"
  }
}
```

### ec2.tf - editado:
editado a `linha 25`, para adicionar as regras criadas no arquivo `securitygroup.tf`
```  
vpc_security_group_ids = ["${aws_security_group.sg_acesso_ssh_local.id}","${aws_security_group.sg_acesso_web_publico.id}","${aws_security_group.sg_acesso_tomcat_publico.id}","${aws_security_group.sg_acesso_mysql_publico.id}","${aws_security_group.sg_acesso_portainer_publico.id}" ]
```

## Ansible
- destrinchado o playbook em mais arquivos,
`playbook.yaml`, `backdocker.yaml` e adicionado a aplicacao `portainer.yaml` !

### Inventory
- Trocado o hostname (backend/frontend)
> alterar os `ip das instancias`

### playbook.yaml
- instala todas as dependencias e sobe o container `mysql` no `backend`
> alterar o diretorio padrao nas linhas : `67, 79, 90 e 96`
> alterar o repositorio na linha `77`

### backdocker.yaml
- Sobe o container da aplicacao java no `backend`
>  alterar o nome da pasta na linha 8, para a que esta sendo usada no `playbook` linha 79
```
/home/ubuntu/"nomedodestino"
```

### Portainer.yaml
- Instala o Portainer em todas as instancias, para que possa gerenciar os containers pelo navegador (um docker-desktop para web)
> Para acessar, digitar `http:// ip da instancia :9443`

# Comandos do Terraform, - utilizados na sua Maquina

1 - Iniciar o terraform na pasta
```
terraform init
```

2 - Gerar a chave ssh
```
$ ssh-keygen
```
```
Generating public/private rsa key pair.
Enter file in which to save the key (~/.ssh/id_rsa): terraform-aws
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in terraform-aws
Your public key has been saved in terraform-aws.pub
The key fingerprint is:
SHA256: ...
The key's randomart image is:
+---[RSA 3072]----+
|    .     ...+BB*|
|   o .     . oEoB|
|  o .     . ...B=|
|   . .   + o .+ +|
|    o . S B +.. o|
|   . o = o o = ..|
|    = + +   o o  |
|   . = .     .   |
|    .            |
+----[SHA256]-----+
```

4 - Definir chave apenas como leitura
```
chmod 400 terraform-aws # ou o nome da sua chave
```

3 - Criar um plano de execucao, visualizar oque sera criado, ou modificado caso haja algo em execucao
```
 terraform plan
```

4 - Aplicar as modificacoes, no servico cloud selecionado [AWS]
```
terraform apply
```
 

# Comandos do Ansible, utilizados na maquina de gerenciamento
1 - Copiar a pasta ansible na maquina de gerenciamento, (pode usar o vscode, conectado por ssh)

2 - entrar na pasta ansible
```
cd ansible/
```
3 - Copiar a chave para a maquina de gerenciamento

4 - Definir chave apenas como leitura
```
chmod 400 terraform-aws # ou o nome da sua chave
```

5 - instala as dependencias e e subir o mysql
```
 ansible-playbook playbook.yaml -i inventory
```

6 - conectar o container do mysql no workbench pelo ip `ip_da_instancia:3306` , e criar as tabelas e adicionar os dados

7 - subir o container do backend depois de o container do mysql estar online :
```  
ansible-playbook backdocker.yaml -i inventory 
```

8 - Instalar o Portainer em todas as instancias
```
ansible-playbook portainer.yaml -i inventory 
```

