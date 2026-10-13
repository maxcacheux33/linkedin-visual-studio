# ATELIER / IMPACT V3.3 — Direction artistique contextuelle

## Nouveautés
- Trois propositions de direction artistique selon les mots du titre et de la rubrique, entièrement dans le navigateur, sans API ni frais.
- Chaque proposition configure une composition, un univers, une texture et une couleur d’accent. Le choix reste manuel.
- Collage : bloc gauche illustré avec motifs et typographie lorsqu’aucune photo autorisée n’est disponible.
- Diptyque : colonne gauche enrichie d’une rubrique lorsqu’aucune photo n’est disponible.
- Les fonctions V3.2, 15 compositions, export image/carrousel/vidéo, paramètres Make et Cloudflare sont conservés.

## Utilisation
1. Ouvrir Studio image.
2. Entrer le titre et la rubrique (ou ouvrir un lien prérempli Make).
3. Cliquer « Proposer 3 directions » et sélectionner celle souhaitée.
4. Vérifier les faits, droits de l’image et rendu, puis exporter.

## Déploiement Cloudflare
Déployer le dossier avec Wrangler ou une intégration Git pour activer `functions/api/image.js`. Un simple glisser-déposer statique n’active pas nécessairement les Functions.

## Limites
La suggestion utilise des règles lexicales, et non une IA distante. Elle n’analyse pas le contenu visuel des images. Le navigateur et le proxy doivent être testés sur le domaine cible.
