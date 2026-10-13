# ATELIER / IMPACT V3.6 — Éditeur de calques photo

Évolution du projet V3.5 : calques photographiques indépendants, glisser-déposer, redimensionnement des calques image et forme, duplication, ordre des calques, verrouillage, et exports sans contours de sélection.

## Déploiement
Utiliser Cloudflare Pages avec les fichiers à la racine (`index.html`, `functions/api/image.js`). Le déploiement ZIP direct ne prend pas en charge la fonction Pages `functions/` : utiliser Wrangler ou Git pour la conserver.

## Utilisation
Dans Studio image → Calques libres, choisir **+ Photo**, puis importer un JPEG, PNG ou WebP autorisé (4 Mo maximum). Sélectionner un calque, le glisser ; déplacer sa poignée orange en bas à droite pour le redimensionner. **Dupliquer** crée une copie indépendante.

## Limitations
Les images sont stockées en data URL dans le JSON : les fichiers peuvent devenir volumineux et dépasser les limites du localStorage. Pour un travail important, privilégier l'export JSON. Les calques restent communs aux pages du carrousel. Le montage vidéo complet et MP4 ne sont pas implémentés. Les images distantes nécessitent le proxy Cloudflare.
