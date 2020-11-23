<?php
class Clients
{

    /*****************Attributs***************** */
    private $_idClient;
    private $_nomClient;
    private $_prenomClient;
    private $_codePostal;
    private $_ville;

    /*****************Accesseurs***************** */
    public function getIdClient()
    {
        return $this->_idClient;
    }

    public function setIdClient(int $idClient)
    {
        $this->_idClient = $idClient;
    }
    
    public function getNomClient()
    {
        return $this->_nomClient;
    }

    public function setNomClient($nomClient)
    {
        $this->_nomClient = $nomClient;
    }

    public function getPrenomClient()
    {
        return $this->_prenomClient;
    }

    public function setPrenomClient($prenomClient)
    {
        $this->_prenomClient = $prenomClient;
    }

    public function getCodePostal()
    {
        return $this->_codePostal;
    }

    public function setCodePostal($codePostal)
    {
        $this->_codePostal = $codePostal;
    }

    public function getVille()
    {
        return $this->_ville;
    }

    public function setVille($ville)
    {
        $this->_ville = $ville;
    }
    
    /*****************Constructeur***************** */

    public function __construct(array $options = [])
    {
        if (!empty($options)) // empty : renvoi vrai si le tableau est vide
        {
            $this->hydrate($options);
        }
    }
    public function hydrate($data)
    {
        foreach ($data as $key => $value)
        {
            $methode = "set" . ucfirst($key); //ucfirst met la 1ere lettre en majuscule
            if (is_callable(([$this, $methode]))) // is_callable verifie que la methode existe
            {
                $this->$methode($value);
            }
        }
    }

    /*****************Autres Méthodes***************** */
    
    /**
     * Transforme l'objet en chaine de caractères
     *
     * @return String
     */
    public function toString()
    {
        return $this->getNomClient().' '.$this->getPrenomClient().' habite '.$this->getCodePostal().' '.$this->getVille();
        
    }

}