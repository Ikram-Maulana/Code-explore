<!-- Instruction Initial Project -->

1. Create Folder App and Public
2. App (Models, Views, Controller, Core)
3. Public (HTML, CSS, JS, Img)
4. In public create index.php and write `require_once '../app/init.php';`
5. Create file init.php in App folder
6. In init.php write `require_once 'core/App.php'` and `require_once 'core/Controller.php'`
7. To check this is going ok, in index.php write `$app = new App`
8. In App.php make controller and write `echo "OK!"`