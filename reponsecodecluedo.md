
1- Utiliser /tmp/ comme "secure directory" est une très mauvaise chose à faire, parce que ce n'est pas sécurisé, mais aussi parce qu'il ne faut pas stocker de choses importantes dans /tmp/.

2- md5 ne devrait plus être utilisé pour de la cryptographie de sécurité parce que des vulnérabilités ont été découvertes.

3- DES est aussi fortement déconseillé à cause de sa lenteur d'exécution et de son espace de clés trop petit permettant une attaque systématique en un temps raisonnable.



