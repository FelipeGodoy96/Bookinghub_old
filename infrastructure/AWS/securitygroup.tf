#criando um SG e liberando a entrada via SSH(22) só para quem estiver
#dentro da VPC e  deixando as maquinas sairem para a internet
resource "aws_security_group" "sg_acesso_ssh_local" {
  #descrição do que estamos fazendo
  description = "sg - security group acesso ssh somente VPC"
  #vinculando nosso SG a uma VPC
  vpc_id = aws_vpc.vpc.id
  
  #aqui está sendo passando a permissão de entrada para porta 22
  #mas só para quem estiver cidr da VPC
  ingress {
    
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = [var.bloco_ip_destino_local]

  }
  #permissão de saida da maquina, para a internet, pois se não
  #seria impossivel instalar algo nela ou dar apt-get update
  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = [var.bloco_ip_destino_publico]
    
  }
  tags = {
    "Name" = "${var.usuario}-sg-ssh-local"
  }
}


#liberando SSH(22) para a internet, mas poderia ser para o IP da sua empresa
#pois nossa VM de gerenciamento, tem que ser acessivel de fora da VPC
resource "aws_security_group" "sg_acesso_ssh_publico" {
  description = "nsg acesso ssh publico"
  vpc_id = aws_vpc.vpc.id
 
  ingress {
    description      = "SSH-mngt"
    from_port        = 22
    to_port          = 22
    protocol         = "tcp"
    cidr_blocks      = [var.bloco_ip_destino_publico]
  }
  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = [var.bloco_ip_destino_publico]
  }
  tags = {
    "Name" = "${var.usuario}-sg-ssh-publico"
  }
}

#SG de permitindo o acesso a porta 80 para toda a internet, 
#pois quem for acessar nosso front, estara na internet
resource "aws_security_group" "sg_acesso_web_publico" {
  description = "sg acesso web publico"
  vpc_id = aws_vpc.vpc.id
  #liberando a entrada pela porta 80 - HTTP
  ingress {
    description      = "HTTP"
    from_port        = 80
    to_port          = 80
    protocol         = "tcp"
    cidr_blocks      = [var.bloco_ip_destino_publico]
  }
  tags = {
    "Name" = "${var.usuario}-sg-web-publico"
  }
}

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