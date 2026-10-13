# ATELIER / IMPACT — Creative Studio V3.2

Version basée sur la V3.1 : 15 compositions (3 historiques et 12 nouvelles), typographie réglable, alignement, textures, accents, exploration aléatoire. Studios image/carrousel/vidéo conservés.

## Installation

Déployer le dossier sur Cloudflare Pages via Git ou Wrangler afin de conserver `functions/api/image.js`. Le dépôt ZIP direct de Cloudflare Pages ne garantit pas le déploiement de cette fonction.

## Compatibilité

Paramètres Make préservés : `title`, `source`, `category`, `image`, `sourceUrl`. Projets JSON V3 compatibles. Aucun appel payant ajouté.

## Limites

Les 12 nouveaux styles utilisent un canvas carré 1200 × 1200. La sélection intelligente des bannières par OCR, l'export MP4, la médiathèque persistante et les formats portrait/paysage ne sont pas implémentés. Contrôler les droits des images. Tester les exports dans Chrome/Edge après déploiement.
