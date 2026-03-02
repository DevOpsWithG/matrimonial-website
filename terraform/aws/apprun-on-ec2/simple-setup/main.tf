provider "aws" {
  region = var.region
}

resource "aws_vpc" "my_vpc" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name = "My_VPC"
  }
}

resource "aws_subnet" "my_subnet" {
  vpc_id                          = aws_vpc.my_vpc.id
  cidr_block                      = "10.0.1.0/24"
  map_public_ip_on_launch = true

  tags = {
    Name = "My_Public_Subnet"
  }
}

resource "aws_internet_gateway" "my_igw" {
  vpc_id = aws_vpc.my_vpc.id

  tags = {
    Name = "My_Internet_Gateway"
  }
}

resource "aws_route_table" "my_rt" {
  vpc_id = aws_vpc.my_vpc.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.my_igw.id
  }

  tags = {
    Name = "My_Route_table"
  }
}

resource "aws_route_table_association" "my_rta" {
  route_table_id = aws_route_table.my_rt.id
  subnet_id      = aws_subnet.my_subnet.id
}

resource "aws_security_group" "my_sg" {
  name   = "my_sg"
  vpc_id = aws_vpc.my_vpc.id

  ingress {
    description = "allow-http"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    description = "allow-app"
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    description = "allow-ssh"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    description = "allow-all-outbound"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "tls_private_key" "generated_key" {
  algorithm = "RSA"
}

resource "aws_key_pair" "instance_key" {
  public_key = tls_private_key.generated_key.public_key_openssh
  key_name   = "terraform-generated_key"
}

resource "local_sensitive_file" "private_key" {
  content         = tls_private_key.generated_key.private_key_pem
  filename        = "./${aws_key_pair.instance_key.key_name}.pem"
  file_permission = "0400"
}

resource "aws_instance" "my_instance" {
  instance_type               = "t3.micro"
  ami                         = "ami-03446a3af42c5e74e"
  subnet_id                   = aws_subnet.my_subnet.id
  key_name                    = aws_key_pair.instance_key.id
  associate_public_ip_address = true
  vpc_security_group_ids      = [aws_security_group.my_sg.id]

  root_block_device {
    volume_type = "gp3"
    volume_size = 8
  }

  lifecycle {
    prevent_destroy = false
  }

  user_data = file("./user_data.sh")

  tags = {
    Name = "My_Instance"
  }

}