# ATELIER / IMPACT — Creative Studio V2 (progressive)

## Contenu
- `index.html` : studio original conservé, plus nouvelle navigation, sauvegarde locale, historique annuler/rétablir, export/import JSON, plan de carrousel et storyboard vidéo.
- `functions/api/image.js` : proxy Cloudflare Pages original conservé.

## Déploiement
Déployer **le contenu de ce dossier** sur Cloudflare Pages, de préférence dans un projet de préproduction distinct. Le point d’entrée est `index.html` à la racine et le dossier `functions/` doit rester à la racine. Aucune compilation ni clé API requise.

## Compatibilité Make
Les paramètres existants `title`, `source`, `category`, `image`, `sourceUrl`, `subtitle`, `theme`, `layout`, `edition`, `signature` restent pris en charge. Les URL Make existantes n'ont pas besoin d'être modifiées.

## Fonctions livrées
- Prévisualisation et export PNG carré de l'application originale
- 5 palettes et 3 compositions originales
- Navigation Image / Carrousel (plan) / Vidéo (storyboard)
- Sauvegarde locale des champs, export/import projet JSON, annuler/rétablir (champs)
- Exports JSON du plan de carrousel et du storyboard

## Limites transparentes
- Pas d'export PDF carrousel ni MP4 vidéo : les onglets correspondants sont des espaces de préproduction.
- Pas d'analyse automatique d'images ni de reconnaissance de texte dans les bannières.
- Le sélecteur de mode typographique est indicatif ; pour retirer une photo déjà chargée, effacer l'URL et recharger.
- Les images locales importées ne sont pas sérialisées dans le projet JSON.
- Historique sur les champs, pas sur les images importées.
- Pas de connexion IA payante, de publication automatique LinkedIn ou de stockage cloud.
- Contrôler les droits des photographies et les faits avant publication.

## Étapes suivantes
1. Refonte modulaire du moteur canvas pour formats 4:5 / 9:16 et mise en page adaptative.
2. Mode graphique réellement automatique pour bannières institutionnelles, avec détection assistée.
3. Éditeur multi-pages et export PDF.
4. Timeline vidéo et moteur de rendu vidéo testé.

## Test rapide
Ouvrir `index.html` dans un navigateur (le proxy distant ne fonctionne qu'une fois déployé sur Cloudflare), saisir un titre, exporter PNG, sauvegarder/restaurer, tester JSON et les onglets. Tester une URL de Make avec paramètres encodés.
