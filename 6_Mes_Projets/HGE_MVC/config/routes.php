<?php
// config/routes.php

$routes = [
    // Route pour la page d'accueil
    '' => [
        'controller' => 'AccueilController',
        'action' => 'index'
    ],

    // Route pour la page "Nos réalisations"
    'realisation' => [
        'controller' => 'RealisationController',
        'action' => 'index'
    ],

    // Route pour la page "Célébrer"
    'celebrer' => [
        'controller' => 'CelebrerController',
        'action' => 'index'
    ],

    // Route pour la page "Planning"
    'planning' => [
        'controller' => 'PlanningController',
        'action' => 'index'
    ],

    // Route pour la page "Contact"
    'contact' => [
        'controller' => 'ContactController',
        'action' => 'index'
    ],

    // Route pour la page "Connexion"
    'connexion' => [
        'controller' => 'ConnexionController',
        'action' => 'index'
    ],

    // Route pour la page "Utilisateur"
    'utilisateur' => [
        'controller' => 'UtilisateurController',
        'action' => 'index'
    ],

    'deconnexion' => [
        'controller' => 'DeconnexionController',
        'action' => 'index'
    ],
    // Autres routes (si nécessaire)
    // 'legal/copyright' => [
    //     'controller' => 'LegalController',
    //     'action' => 'copyright'
    // ],
    // 'legal/mentions' => [
    //     'controller' => 'LegalController',
    //     'action' => 'mentions'
    // ],

    // Route par défaut pour les pages non trouvées (404)
    '404' => [
        'controller' => 'ErrorController',
        'action' => 'notFound'
    ]
];