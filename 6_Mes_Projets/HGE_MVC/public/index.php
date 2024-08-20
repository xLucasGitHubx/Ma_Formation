<?php
// public/index.php
require_once '../env.php';
require_once '../config/db.php';
require_once '../config/routes.php';

// Fonction d'autoload pour les classes
function autoload($class_name)
{
    $controllerPath = "../app/Controllers/{$class_name}.php";
    if (file_exists($controllerPath)) {
        require_once $controllerPath;
        return;
    }

    $modelPath = "../app/Models/{$class_name}.php";
    if (file_exists($modelPath)) {
        require_once $modelPath;
        return;
    }
}

// Enregistrement de l'autoloader
spl_autoload_register('autoload');

// Fonction pour créer des instances de contrôleur avec les dépendances nécessaires
function createController($controllerName, $db = null)
{
    if ($controllerName === 'ConnexionController' && $db) {
        $model = new UtilisateurModel($db);
        return new $controllerName($model);
    }
    return new $controllerName();
}

// Parsing the URL to determine which controller and action to invoke
$request = trim($_SERVER['REQUEST_URI'], '/');
$request = parse_url($request, PHP_URL_PATH);

$routeFound = false;

// Créez une connexion à la base de données
$db = getDatabaseConnection();

foreach ($routes as $route => $params) {
    if (preg_match("#^$route$#", $request, $matches)) {
        $controllerName = $params['controller'];
        $action = $params['action'];

        $controller = createController($controllerName, $db);

        call_user_func_array([$controller, $action], array_slice($matches, 1));
        $routeFound = true;
        break;
    }
}

if (!$routeFound) {
    http_response_code(404);
    echo "404 Not Found";
}
