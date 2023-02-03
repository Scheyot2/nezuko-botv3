GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[0;33m'
WHITE='\033[1;37m'
echo ${YELLOW}'Instalando as dependências, aguarde!'
clear
apt-get upgrade
apt-get update
pkg upgrade -y && pkg update -y && pkg install nodejs -y && pkg install nodejs-lts -y && pkg install ffmpeg -y && pkg install wget -y && pkg install git -y
echo ${YELLOW}'As dependências foram instaladas com sucesso!
Iniciando a Nezuko-BOT, aguarde...'
clear
sh start.sh