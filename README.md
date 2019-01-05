# API RESTFUL de playlists
### Tecnologias:
* MySQL
* Java
* Spring Boot
* Spring Data Jpa
* Spring Security

### Para executar a API:

1. Baixe todas depedência do arquivo pom.xml
2. Configure o arquivo **application.properties** com as configurações do seu banco de dados.
3. Execute o sistema .

### Endpoints REST:

**Buscar:**
>GET:  /playlists

>GET:  /playlists/id/musicas

**parâmetro page, default = 0;
parâmetro size, default = 5;**(opcionais)

**Exemplo = /playlists?size=0&size=5**

**Buscar por id:**
>GET:  /playlists/id

>GET:  /playlists/id/musicas/idMusica


**Cadastro :**
>POST: /playlists

    {  
            "nome": "playlist teste",
            "descricao": "playlist teste"
        } 
        
>POST: /playlists/id/musicas

    {  
            "titulo": "musica teste",
            "banda": "banda teste",
            "nota": 10
        } 
        

**Edição:**
>PUT: /playlists/id

>PUT: /playlists/id/musicas/idMusica

**Exemplo do body no endpoint de POST**

**Remoção:**
>DELETE: /playlists/id

>DELETE: /playlists/id/musicas/idMusica









        
