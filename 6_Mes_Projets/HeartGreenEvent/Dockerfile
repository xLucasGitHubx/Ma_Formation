FROM httpd:2.4

# Copie les fichiers du répertoire courant dans le répertoire /usr/local/apache2/htdocs/ du conteneur
COPY ./ /usr/local/apache2/htdocs/

# Décommente les lignes nécessaires dans le fichier de configuration httpd.conf pour activer les modules requis
RUN sed -i \
        -e 's/^#\(LoadModule .*mod_headers.so\)/\1/' \
        -e 's/^#\(LoadModule .*mod_setenvif.so\)/\1/' \
        /usr/local/apache2/conf/httpd.conf

# Ajoute la configuration nécessaire pour spécifier le type MIME des fichiers MP4
RUN echo 'AddType video/mp4 .mp4' >> /usr/local/apache2/conf/httpd.conf

# Ajoute la configuration nécessaire pour prendre en charge les demandes de plage de bytes et désactiver la mise en cache des images
RUN echo '<IfModule mod_headers.c>' >> /usr/local/apache2/conf/httpd.conf \
    && echo '    <FilesMatch "\.(mp4|webm|ogg|jpg|jpeg|png|gif)$">' >> /usr/local/apache2/conf/httpd.conf \
    && echo '        Header set Accept-Ranges "bytes"' >> /usr/local/apache2/conf/httpd.conf \
    && echo '        Header set Cache-Control "no-store, no-cache, must-revalidate, post-check=0, pre-check=0"' >> /usr/local/apache2/conf/httpd.conf \
    && echo '        Header set Pragma "no-cache"' >> /usr/local/apache2/conf/httpd.conf \
    && echo '        Header set Expires "0"' >> /usr/local/apache2/conf/httpd.conf \
    && echo '    </FilesMatch>' >> /usr/local/apache2/conf/httpd.conf \
    && echo '</IfModule>' >> /usr/local/apache2/conf/httpd.conf

# Expose le port 80
EXPOSE 80

