# ATELIER / IMPACT — V3.5

Évolution de la V3.4 : calques libres texte et rectangles au-dessus des compositions existantes.

## Nouveautés
- Ajouter des calques texte ou forme ; les sélectionner et les déplacer à la souris dans l’aperçu.
- Changer texte, couleur, taille et largeur ; réorganiser, verrouiller, supprimer.
- Calques conservés dans le JSON du projet et dans les sauvegardes locales.
- Rendu des calques dans les exports image et carrousel PDF.
- Les calques sont globaux à la composition, pas spécifiques à chaque page.

## Limites
- Pas encore de calques photo indépendants, ni poignées de redimensionnement sur le canvas.
- Le titre original peut toujours être déplacé avec son outil dédié : désactivez « Déplacer le titre » pour sélectionner les nouveaux calques.
- Les fichiers images locaux ne sont pas intégrés au JSON.
- Le studio vidéo reste inchangé et n'affiche pas les calques.
- Le déploiement Cloudflare avec Functions requiert Wrangler ou Git, et non le simple glisser-déposer de ZIP.

## Tester
1. Ouvrir Studio image, ajouter un texte puis une forme.
2. Déplacer chaque calque dans le canvas, vérifier verrouillage et ordre.
3. Exporter un PNG et sauvegarder/importer le JSON.
4. Tester un carrousel PDF et le chargement d'un lien Make existant.

Déployez d'abord sur un projet Cloudflare Pages de test.
