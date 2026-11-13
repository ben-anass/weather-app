# Tests manuels

| Test           | Action                             | Résultat attendu                    | OK  |
| -------------- | ---------------------------------- | ----------------------------------- | --- |
| Champ vide     | Cliquer sur Rechercher sans écrire | Message « Entrez un nom de ville. » | ✅  |
| Ville valide   | Rechercher « Taza »                | Météo actuelle et 5 jours affichés  | ✅  |
| Ville inconnue | Rechercher « hhhhhh »              | Message « Ville introuvable. »      | ✅  |
| Réessayer      | Débloquer, cliquer sur Réessayer   | Résultats affichés                  | ✅  |
