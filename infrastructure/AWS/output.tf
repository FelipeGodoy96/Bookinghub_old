#output é tipo sysout.print.ln ou 
#console.log ele vai mostrar algo no terminal
output "ec2_docker_ip_publico" {
    #descrição sabermos o que vai ser impresso no terminal
    description = "IP publico ec2 docker"
    #o que vai ser impresso, estou pedindo o IP publico da instancia
    #que vai ser criar com o nome de ec2_kubernetes no lugar do * 
    #vai entrar o do contador
    value = aws_instance.ec2_docker.*.public_ip
}
output "ec2_docker_ip_privado" {
    description = "IP privado ec2 docker"
    #pedindo para ser impresso o IP privado das maquinas do front
    value = aws_instance.ec2_docker.*.private_ip
}

output "ec2_gerenciamento_ip_publico" {
    description = "IP publico ec2 gerenciamento"
    #pedindo para ser impresso o IP publico da maquina de gerenciamento
    value = aws_instance.ec2_gerenciamento.*.public_ip
}

