/**
 * WebAgency - Script JavaScript
 * Gestion de la navigation et validation du formulaire de contact
 * Auteur: WebAgency
 * Date: 2026
 */

// ========================================
// VARIABLES GLOBALES
// ========================================

// Éléments du DOM
let contactForm;
let nomCompletInput;
let emailInput;
let telephoneInput;
let sujetSelect;
let messageTextarea;
let typeDemandeRadios;

// Champs conditionnels
let champsInformation;
let champsSupport;
let champsReclamation;
let domaineInteretSelect;
let numeroTicketInput;
let urgenceSelect;
let dateIncidentInput;

// Messages d'erreur
let errorNomComplet;
let errorEmail;
let errorTelephone;
let errorSujet;
let errorMessage;
let errorTypeDemande;

// ========================================
// INITIALISATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('WebAgency - Initialisation du script...');
    
    // Initialiser la navigation mobile
    initNavigationMobile();
    
    // Initialiser le formulaire de contact si on est sur la page contact
    if (document.getElementById('contactForm')) {
        initFormulaireContact();
    }
    
    // Ajouter des animations au scroll
    initAnimationsScroll();
    
    console.log('WebAgency - Script initialisé avec succès!');
});

// ========================================
// NAVIGATION MOBILE
// ========================================

/**
 * Initialise le menu hamburger pour mobile
 */
function initNavigationMobile() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            console.log('Menu mobile toggled');
        });
        
        // Fermer le menu quand on clique sur un lien
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
}

// ========================================
// FORMULAIRE DE CONTACT
// ========================================

/**
 * Initialise tous les éléments du formulaire de contact
 */
function initFormulaireContact() {
    console.log('Initialisation du formulaire de contact...');
    
    // Récupérer les éléments du formulaire
    contactForm = document.getElementById('contactForm');
    nomCompletInput = document.getElementById('nomComplet');
    emailInput = document.getElementById('email');
    telephoneInput = document.getElementById('telephone');
    sujetSelect = document.getElementById('sujet');
    messageTextarea = document.getElementById('message');
    typeDemandeRadios = document.querySelectorAll('input[name="typeDemande"]');
    
    // Champs conditionnels
    champsInformation = document.getElementById('champs-information');
    champsSupport = document.getElementById('champs-support');
    champsReclamation = document.getElementById('champs-reclamation');
    domaineInteretSelect = document.getElementById('domaineInteret');
    numeroTicketInput = document.getElementById('numeroTicket');
    urgenceSelect = document.getElementById('urgence');
    dateIncidentInput = document.getElementById('dateIncident');
    
    // Messages d'erreur
    errorNomComplet = document.getElementById('error-nomComplet');
    errorEmail = document.getElementById('error-email');
    errorTelephone = document.getElementById('error-telephone');
    errorSujet = document.getElementById('error-sujet');
    errorMessage = document.getElementById('error-message');
    errorTypeDemande = document.getElementById('error-typeDemande');
    
    // Vérifier que tous les éléments sont présents
    if (!contactForm || !nomCompletInput || !emailInput || !telephoneInput || 
        !sujetSelect || !messageTextarea || !typeDemandeRadios) {
        console.error('Erreur: Certains éléments du formulaire sont manquants');
        return;
    }
    
    // Initialiser les événements
    initEventsFormulaire();
    
    console.log('Formulaire de contact initialisé avec succès!');
}

/**
 * Initialise tous les événements du formulaire
 */
function initEventsFormulaire() {
    // Validation en temps réel
    nomCompletInput.addEventListener('input', validerNomComplet);
    nomCompletInput.addEventListener('blur', validerNomComplet);
    
    emailInput.addEventListener('input', validerEmail);
    emailInput.addEventListener('blur', validerEmail);
    
    telephoneInput.addEventListener('input', validerTelephone);
    telephoneInput.addEventListener('blur', validerTelephone);
    
    sujetSelect.addEventListener('change', function() {
        validerSujet();
        gererChampsConditionnels();
    });
    
    messageTextarea.addEventListener('input', validerMessage);
    messageTextarea.addEventListener('blur', validerMessage);
    
    typeDemandeRadios.forEach(radio => {
        radio.addEventListener('change', validerTypeDemande);
    });
    
    // Soumission du formulaire
    contactForm.addEventListener('submit', soumettreFormulaire);
    
    console.log('Événements du formulaire initialisés');
}

// ========================================
// VALIDATION EN TEMPS RÉEL
// ========================================

/**
 * Valide le nom complet (minimum 3 caractères)
 */
function validerNomComplet() {
    const valeur = nomCompletInput.value.trim();
    
    if (valeur.length === 0) {
        afficherErreur(nomCompletInput, errorNomComplet, 'Le nom complet est obligatoire.');
        return false;
    } else if (valeur.length < 3) {
        afficherErreur(nomCompletInput, errorNomComplet, 'Le nom doit contenir au moins 3 caractères.');
        return false;
    } else {
        afficherSucces(nomCompletInput, errorNomComplet, '');
        return true;
    }
}

/**
 * Valide l'email (format valide avec @ et .)
 */
function validerEmail() {
    const valeur = emailInput.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (valeur.length === 0) {
        afficherErreur(emailInput, errorEmail, 'L\'email est obligatoire.');
        return false;
    } else if (!regexEmail.test(valeur)) {
        afficherErreur(emailInput, errorEmail, 'Veuillez entrer un email valide (ex: nom@domaine.com).');
        return false;
    } else {
        afficherSucces(emailInput, errorEmail, '');
        return true;
    }
}

/**
 * Valide le téléphone (10 chiffres minimum, uniquement des chiffres)
 */
function validerTelephone() {
    const valeur = telephoneInput.value.trim();
    const regexTelephone = /^[0-9]+$/;
    
    if (valeur.length === 0) {
        afficherErreur(telephoneInput, errorTelephone, 'Le téléphone est obligatoire.');
        return false;
    } else if (!regexTelephone.test(valeur)) {
        afficherErreur(telephoneInput, errorTelephone, 'Le téléphone doit contenir uniquement des chiffres.');
        return false;
    } else if (valeur.length < 10) {
        afficherErreur(telephoneInput, errorTelephone, 'Le téléphone doit contenir au moins 10 chiffres.');
        return false;
    } else {
        afficherSucces(telephoneInput, errorTelephone, '');
        return true;
    }
}

/**
 * Valide le sujet de contact
 */
function validerSujet() {
    const valeur = sujetSelect.value;
    
    if (valeur === '') {
        afficherErreur(sujetSelect, errorSujet, 'Veuillez sélectionner un sujet.');
        return false;
    } else {
        afficherSucces(sujetSelect, errorSujet, '');
        return true;
    }
}

/**
 * Valide le message
 */
function validerMessage() {
    const valeur = messageTextarea.value.trim();
    
    if (valeur.length === 0) {
        afficherErreur(messageTextarea, errorMessage, 'Le message est obligatoire.');
        return false;
    } else if (valeur.length < 10) {
        afficherErreur(messageTextarea, errorMessage, 'Le message doit contenir au moins 10 caractères.');
        return false;
    } else {
        afficherSucces(messageTextarea, errorMessage, '');
        return true;
    }
}

/**
 * Valide le type de demande (radio buttons)
 */
function validerTypeDemande() {
    let radioSelectionne = false;
    
    typeDemandeRadios.forEach(radio => {
        if (radio.checked) {
            radioSelectionne = true;
        }
    });
    
    if (!radioSelectionne) {
        afficherErreur(null, errorTypeDemande, 'Veuillez sélectionner un type de demande.');
        return false;
    } else {
        afficherSucces(null, errorTypeDemande, '');
        return true;
    }
}

// ========================================
// CHAMPS CONDITIONNELS
// ========================================

/**
 * Gère l'affichage/masquage des champs conditionnels selon le sujet
 */
function gererChampsConditionnels() {
    const sujet = sujetSelect.value;
    
    // Masquer tous les champs conditionnels par défaut
    champsInformation.style.display = 'none';
    champsSupport.style.display = 'none';
    champsReclamation.style.display = 'none';
    
    // Réinitialiser les champs obligatoires
    if (domaineInteretSelect) domaineInteretSelect.required = false;
    if (numeroTicketInput) numeroTicketInput.required = false;
    if (urgenceSelect) urgenceSelect.required = false;
    if (dateIncidentInput) dateIncidentInput.required = false;
    
    // Afficher les champs selon le sujet choisi
    switch (sujet) {
        case 'information':
            champsInformation.style.display = 'block';
            if (domaineInteretSelect) domaineInteretSelect.required = true;
            console.log('Champs conditionnels: Demande d\'information affichée');
            break;
            
        case 'support':
            champsSupport.style.display = 'block';
            if (numeroTicketInput) numeroTicketInput.required = true;
            if (urgenceSelect) urgenceSelect.required = true;
            console.log('Champs conditionnels: Support technique affiché');
            break;
            
        case 'reclamation':
            champsReclamation.style.display = 'block';
            if (dateIncidentInput) dateIncidentInput.required = true;
            console.log('Champs conditionnels: Réclamation affichée');
            break;
            
        case 'autre':
            // Aucun champ supplémentaire
            console.log('Champs conditionnels: Aucun champ supplémentaire pour "Autre"');
            break;
    }
}

// ========================================
// VALIDATION À LA SOUMISSION
// ========================================

/**
 * Soumet le formulaire après validation complète
 */
function soumettreFormulaire(event) {
    event.preventDefault();
    console.log('Soumission du formulaire...');
    
    // Valider tous les champs
    const nomValide = validerNomComplet();
    const emailValide = validerEmail();
    const telephoneValide = validerTelephone();
    const sujetValide = validerSujet();
    const messageValide = validerMessage();
    const typeDemandeValide = validerTypeDemande();
    
    // Validation des champs conditionnels
    let champsConditionnelsValides = true;
    const sujet = sujetSelect.value;
    
    if (sujet === 'information') {
        champsConditionnelsValides = validerDomaineInteret();
    } else if (sujet === 'support') {
        champsConditionnelsValides = validerNumeroTicket() && validerUrgence();
    } else if (sujet === 'reclamation') {
        champsConditionnelsValides = validerDateIncident();
    }
    
    // Vérifier si tout est valide
    const toutEstValide = nomValide && emailValide && telephoneValide && 
                         sujetValide && messageValide && typeDemandeValide && 
                         champsConditionnelsValides;
    
    if (toutEstValide) {
        console.log('Formulaire valide - Affichage du succès');
        afficherSuccesFormulaire();
    } else {
        console.log('Formulaire invalide - Veuillez corriger les erreurs');
        // Faire défiler jusqu'au premier champ avec erreur
        const premierErreur = document.querySelector('.input-error');
        if (premierErreur) {
            premierErreur.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

/**
 * Valide le domaine d'intérêt (champ conditionnel)
 */
function validerDomaineInteret() {
    if (domaineInteretSelect && domaineInteretSelect.required) {
        const valeur = domaineInteretSelect.value;
        const errorElement = document.getElementById('error-domaineInteret');
        
        if (valeur === '') {
            afficherErreur(domaineInteretSelect, errorElement, 'Veuillez sélectionner un domaine d\'intérêt.');
            return false;
        } else {
            afficherSucces(domaineInteretSelect, errorElement, '');
            return true;
        }
    }
    return true;
}

/**
 * Valide le numéro de ticket (champ conditionnel)
 */
function validerNumeroTicket() {
    if (numeroTicketInput && numeroTicketInput.required) {
        const valeur = numeroTicketInput.value.trim();
        const errorElement = document.getElementById('error-numeroTicket');
        
        if (valeur.length === 0) {
            afficherErreur(numeroTicketInput, errorElement, 'Le numéro de ticket est obligatoire.');
            return false;
        } else {
            afficherSucces(numeroTicketInput, errorElement, '');
            return true;
        }
    }
    return true;
}

/**
 * Valide le niveau d'urgence (champ conditionnel)
 */
function validerUrgence() {
    if (urgenceSelect && urgenceSelect.required) {
        const valeur = urgenceSelect.value;
        const errorElement = document.getElementById('error-urgence');
        
        if (valeur === '') {
            afficherErreur(urgenceSelect, errorElement, 'Veuillez sélectionner un niveau d\'urgence.');
            return false;
        } else {
            afficherSucces(urgenceSelect, errorElement, '');
            return true;
        }
    }
    return true;
}

/**
 * Valide la date de l'incident (champ conditionnel)
 */
function validerDateIncident() {
    if (dateIncidentInput && dateIncidentInput.required) {
        const valeur = dateIncidentInput.value;
        const errorElement = document.getElementById('error-dateIncident');
        
        if (valeur === '') {
            afficherErreur(dateIncidentInput, errorElement, 'Veuillez sélectionner la date de l\'incident.');
            return false;
        } else {
            // Vérifier que la date n'est pas dans le futur
            const dateSelectionnee = new Date(valeur);
            const dateActuelle = new Date();
            
            if (dateSelectionnee > dateActuelle) {
                afficherErreur(dateIncidentInput, errorElement, 'La date de l\'incident ne peut pas être dans le futur.');
                return false;
            } else {
                afficherSucces(dateIncidentInput, errorElement, '');
                return true;
            }
        }
    }
    return true;
}

// ========================================
// AFFICHAGE DES MESSAGES
// ========================================

/**
 * Affiche un message d'erreur
 */
function afficherErreur(input, errorElement, message) {
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.color = 'var(--error-color)';
    }
    
    if (input) {
        input.classList.remove('input-valid');
        input.classList.add('input-error');
    }
}

/**
 * Affiche un message de succès ou efface l'erreur
 */
function afficherSucces(input, errorElement, message) {
    if (errorElement) {
        errorElement.textContent = message;
    }
    
    if (input) {
        input.classList.remove('input-error');
        input.classList.add('input-valid');
    }
}

/**
 * Affiche le message de succès après soumission
 */
function afficherSuccesFormulaire() {
    // Masquer le formulaire
    contactForm.style.display = 'none';
    
    // Afficher le message de succès
    const successMessage = document.getElementById('successMessage');
    const recapitulatif = document.getElementById('recapitulatif');
    
    if (successMessage && recapitulatif) {
        // Générer le récapitulatif des données
        const donnees = collecterDonneesFormulaire();
        recapitulatif.innerHTML = genererRecapitulatif(donnees);
        
        successMessage.style.display = 'block';
        successMessage.classList.add('fade-in');
        
        // Faire défiler vers le message de succès
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

/**
 * Collecte toutes les données du formulaire
 */
function collecterDonneesFormulaire() {
    const donnees = {
        nomComplet: nomCompletInput.value.trim(),
        email: emailInput.value.trim(),
        telephone: telephoneInput.value.trim(),
        sujet: sujetSelect.options[sujetSelect.selectedIndex].text,
        message: messageTextarea.value.trim(),
        typeDemande: null
    };
    
    // Récupérer le type de demande
    typeDemandeRadios.forEach(radio => {
        if (radio.checked) {
            donnees.typeDemande = radio.value === 'professionnel' ? 'Professionnel' : 'Personnel';
        }
    });
    
    // Récupérer les champs conditionnels
    if (sujetSelect.value === 'information' && domaineInteretSelect) {
        donnees.domaineInteret = domaineInteretSelect.options[domaineInteretSelect.selectedIndex].text;
    }
    
    if (sujetSelect.value === 'support') {
        if (numeroTicketInput) donnees.numeroTicket = numeroTicketInput.value.trim();
        if (urgenceSelect) donnees.urgence = urgenceSelect.options[urgenceSelect.selectedIndex].text;
    }
    
    if (sujetSelect.value === 'reclamation' && dateIncidentInput) {
        donnees.dateIncident = dateIncidentInput.value;
    }
    
    return donnees;
}

/**
 * Génère le HTML du récapitulatif
 */
function genererRecapitulatif(donnees) {
    let html = '<h4>Récapitulatif de votre demande :</h4>';
    
    html += `<p><strong>Nom complet :</strong> ${donnees.nomComplet}</p>`;
    html += `<p><strong>Email :</strong> ${donnees.email}</p>`;
    html += `<p><strong>Téléphone :</strong> ${donnees.telephone}</p>`;
    html += `<p><strong>Sujet :</strong> ${donnees.sujet}</p>`;
    html += `<p><strong>Type de demande :</strong> ${donnees.typeDemande}</p>`;
    
    if (donnees.domaineInteret) {
        html += `<p><strong>Domaine d'intérêt :</strong> ${donnees.domaineInteret}</p>`;
    }
    
    if (donnees.numeroTicket) {
        html += `<p><strong>Numéro de ticket :</strong> ${donnees.numeroTicket}</p>`;
    }
    
    if (donnees.urgence) {
        html += `<p><strong>Niveau d'urgence :</strong> ${donnees.urgence}</p>`;
    }
    
    if (donnees.dateIncident) {
        html += `<p><strong>Date de l'incident :</strong> ${donnees.dateIncident}</p>`;
    }
    
    html += `<p><strong>Message :</strong><br>${donnees.message}</p>`;
    
    return html;
}

// ========================================
// ANIMATIONS AU SCROLL
// ========================================

/**
 * Initialise les animations au défilement
 */
function initAnimationsScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observer les éléments à animer
    const elementsAAnimer = document.querySelectorAll('.service-card, .value-card, .team-member, .contact-card, .skill-category');
    
    elementsAAnimer.forEach(element => {
        observer.observe(element);
    });
}

// ========================================
// FONCTIONS UTILITAIRES
// ========================================

/**
 * Formate une date pour l'affichage
 */
function formaterDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

/**
 * Affiche un message dans la console (mode debug)
 */
function debug(message) {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('[DEBUG]', message);
    }
}

// ========================================
// GESTION DES ERREURS GLOBALES
// ========================================

window.addEventListener('error', function(event) {
    console.error('Erreur JavaScript:', event.error);
});

// ========================================
// FIN DU SCRIPT
// ========================================

console.log('WebAgency - Script JavaScript chargé avec succès!');