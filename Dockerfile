# Usa imagem oficial do Nginx
FROM nginx:alpine

# Remove a configuração padrão
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos do seu site para o diretório do Nginx
COPY . /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]
