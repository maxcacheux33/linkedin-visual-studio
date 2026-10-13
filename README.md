# ATELIER / IMPACT — Creative Studio V3

## Contenu
- `index.html` : application autonome, sans build et sans dépendances JavaScript externes.
- `functions/api/image.js` : relais Cloudflare Pages restreint aux images Cedefop (HTTPS, formats et tailles filtrés).

## Fonctions
- Nouvelle interface en trois espaces indépendants : Image, Carrousel, Vidéo.
- Studio image : 5 univers graphiques, 3 compositions, couverture graphique sans photographie, export PNG 1080/1200/1600, image importée, cadrage, source et crédits.
- Carrousel : ajout, duplication, suppression, déplacement et édition de pages, export PNG de chaque page et PDF multipage.
- Vidéo : trois scènes éditables, durées 2–12 s, animation graphique, prévisualisation et export WebM sans audio si `MediaRecorder` est disponible. Pas de MP4, d'audio ni de génération de vidéo IA.
- Sauvegarde locale, export/import de projet JSON, annuler/rétablir des changements.
- Compatibilité des paramètres Make : `title`, `source`, `category`, `image`, `sourceUrl`, `subtitle`, `theme`, `layout`, `edition`, `signature`, `credit`.

## Déploiement
**Conseillé : déployer d'abord sur un projet Cloudflare Pages de test.**

Si vous utilisez l'import manuel ZIP dans le tableau de bord Cloudflare, les fichiers statiques sont déployés mais le répertoire `functions/` n'est pas compilé. Pour disposer du relais `/api/image` et charger les images Cedefop, utiliser Git intégration ou Wrangler :

```bash
npx wrangler pages deploy . --project-name=NOM_DU_PROJET
```

Cette commande s'exécute dans le dossier contenant `index.html` et `functions/` après authentification Cloudflare. Sur un projet Pages déjà relié à Git, privilégier son workflow Git.

Le studio reste utilisable sans le relais en mode graphique ou avec des images importées localement.

## Confidentialité et droits
- Aucun identifiant LinkedIn ni clé Gemini n'est nécessaire.
- Les sauvegardes sont locales au navigateur. Le projet JSON ne contient pas les octets d'une photo importée localement.
- Les URL d'images Cedefop ne signifient pas que leur réutilisation est autorisée. Vérifier les droits.
- Pas de publication automatique sur LinkedIn.

## Limites connues
- L'export WebM dépend du navigateur et peut ne pas être pris en charge sur tous les appareils.
- L'export PDF est généré localement à partir de pages JPEG incorporées.
- Les vidéos sont carrées, sans piste sonore ni MP4.
- Les polices Google sont facultatives et nécessitent une connexion pour être chargées.
- L'aperçu graphique nécessite un navigateur moderne compatible Canvas.
- Syntaxe JS contrôlée ; test navigateur automatisé non réalisable dans l'environnement de génération.
