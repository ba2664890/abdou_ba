# Guide de Déploiement Vercel via GitHub

## 📋 Prérequis

- Un compte GitHub (gratuit)
- Un compte Vercel (gratuit)
- Votre projet WebAgency prêt

## 🚀 Étape 1 : Créer un Dépôt GitHub

### 1.1 Créer le dépôt sur GitHub

1. Aller sur [github.com](https://github.com)
2. Se connecter à votre compte
3. Cliquer sur le bouton **"+"** en haut à droite
4. Sélectionner **"New repository"**

### 1.2 Configurer le dépôt

- **Repository name** : `webagency` (ou le nom de votre choix)
- **Description** : "Site web professionnel WebAgency avec design premium"
- **Visibilité** : 
  - ✅ **Public** (recommandé pour Vercel gratuit)
  - ⚠️ Private (nécessite plan Vercel payant)
- **Initialize repository** : 
  - ❌ Ne PAS cocher "Add a README file"
  - ❌ Ne PAS ajouter .gitignore
  - ❌ Ne PAS choisir de licence
- Cliquer sur **"Create repository"**

### 1.3 Pousser votre code sur GitHub

Ouvrir un terminal et exécuter :

```bash
# Naviguer vers votre projet
cd /home/cardan/Music/abdouba_devoir1

# Initialiser Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - WebAgency site premium"

# Ajouter le dépôt distant (remplacer VOTRE-USERNAME)
git remote add origin https://github.com/VOTRE-USERNAME/webagency.git

# Renommer la branche en main
git branch -M main

# Pousser le code
git push -u origin main
```

**Note** : Remplacez `VOTRE-USERNAME` par votre nom d'utilisateur GitHub

### 1.4 Vérifier sur GitHub

- Retourner sur GitHub
- Actualiser la page de votre dépôt
- Vous devriez voir tous vos fichiers (index.html, css/, js/, etc.)

## 🌐 Étape 2 : Connecter GitHub à Vercel

### 2.1 Créer un compte Vercel

1. Aller sur [vercel.com](https://vercel.com)
2. Cliquer sur **"Sign Up"**
3. Choisir **"Continue with GitHub"**
4. Autoriser Vercel à accéder à votre compte GitHub
5. Compléter votre profil si demandé

### 2.2 Importer le projet depuis GitHub

1. Sur le dashboard Vercel, cliquer sur **"Add New..."**
2. Sélectionner **"Project"**
3. Vous verrez la liste de vos dépôts GitHub
4. Trouver **"webagency"** dans la liste
5. Cliquer sur **"Import"** à côté du nom du dépôt

## ⚙️ Étape 3 : Configurer le Projet

### 3.1 Configuration du projet

Vercel détectera automatiquement que c'est un site statique.

**Configure Project** :
- **Project Name** : `webagency` (ou personnalisez)
- **Framework Preset** : Sélectionner **"Other"** ou laisser vide
- **Root Directory** : `./` (laisser par défaut)
- **Build Command** : Laisser vide (pas de build nécessaire)
- **Output Directory** : Laisser vide
- **Install Command** : Laisser vide

### 3.2 Variables d'environnement (optionnel)

Pour ce projet, aucune variable d'environnement n'est nécessaire.

### 3.3 Déployer

1. Vérifier que tout est correct
2. Cliquer sur **"Deploy"**
3. Attendre que le déploiement se termine (30-60 secondes)

## ✅ Étape 4 : Vérifier le Déploiement

### 4.1 Accéder au site

Une fois le déploiement terminé :

1. Vercel affichera **"Congratulations!"**
2. Vous verrez l'URL de votre site : `https://webagency-xxx.vercel.app`
3. Cliquer sur **"Visit"** pour voir votre site en ligne

### 4.2 Tester le site

Vérifier que :
- ✅ La page d'accueil s'affiche correctement
- ✅ La navigation fonctionne (Accueil, Présentation, Contact)
- ✅ Le formulaire de contact fonctionne
- ✅ Les animations et effets sont visibles
- ✅ Le site est responsive sur mobile

### 4.3 Configurer un domaine personnalisé (optionnel)

1. Dans le dashboard Vercel, aller dans **"Settings"**
2. Cliquer sur **"Domains"**
3. Ajouter votre domaine personnalisé
4. Suivre les instructions pour configurer le DNS

## 🔄 Étape 5 : Mises à Jour Automatiques

### Comment ça marche

Vercel est maintenant connecté à votre dépôt GitHub. Chaque fois que vous poussez du code :

```bash
# Faire des modifications dans votre code
# Puis :
git add .
git commit -m "Description des modifications"
git push
```

**Vercel déploiera automatiquement** les changements en quelques secondes !

### Voir les déploiements

1. Aller sur le dashboard Vercel
2. Cliquer sur votre projet **"webagency"**
3. Voir l'onglet **"Deployments"** pour l'historique

## 🎯 Configuration Avancée (Optionnel)

### Activer HTTPS

- ✅ HTTPS est activé automatiquement par Vercel
- Certificat SSL gratuit inclus

### Analytics

1. Dans le dashboard Vercel
2. Aller dans **"Analytics"**
3. Activer les analytics pour voir les statistiques de visite

### Preview Deployments

Vercel crée automatiquement des previews pour chaque branche :
- La branche `main` → Production
- Les autres branches → Preview URLs

## 🛠️ Dépannage

### Problème : Le site ne s'affiche pas

**Solution** :
- Vérifier que `index.html` est à la racine du projet
- Vérifier les chemins des fichiers CSS/JS (relatifs, pas absolus)

### Problème : Les images ne s'affichent pas

**Solution** :
- Vérifier que le dossier `img/` est bien poussé sur GitHub
- Vérifier les chemins dans le HTML (`img/logo.png` et non `/img/logo.png`)

### Problème : Erreur 404

**Solution** :
- Vérifier que tous les fichiers HTML sont à la racine
- Vérifier les liens de navigation dans le menu

## 📊 Résumé des URLs

Après déploiement, vous aurez :

- **URL de production** : `https://webagency-xxx.vercel.app`
- **Dashboard Vercel** : `https://vercel.com/votre-username/webagency`
- **Dépôt GitHub** : `https://github.com/votre-username/webagency`

## 🎉 Félicitations !

Votre site WebAgency est maintenant en ligne et accessible partout dans le monde !

---

**Besoin d'aide ?**
- Documentation Vercel : [vercel.com/docs](https://vercel.com/docs)
- Support Vercel : [vercel.com/support](https://vercel.com/support)
