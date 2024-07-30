<?php
class ViewAccueil
{
    private ?string $result;

    public function __construct(?string $result)
    {
        $this->result = $result;


    }
    /**
     * Get the value of result
     */
    public function getResult()
    {
        return $this->result;
    }

    /**
     * Set the value of result
     */
    public function setResult($result): self
    {
        $this->result = $result;
        return $this;
    }

    public function renderAccueil()
    {
        ob_start();
        ?>
        <!DOCTYPE html>
        <html lang="fr">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>

        <body>
            <h1>Exo POO - Class en MVC</h1>
            <p><?php echo $this->result ?></p>
        </body>

        </html>
        <?php
        return ob_get_clean();
    }
}