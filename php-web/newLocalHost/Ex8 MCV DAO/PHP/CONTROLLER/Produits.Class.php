<?php
class Produits
{

    /*****************Attributs***************** */
    private $_idProduit;
    private $_libelleProduit;
    private $_prix;
    private $_dateDePeremption;

    /*****************Accesseurs***************** */
    public function getIdProduit()
    {
        return $this->_idProduit;
    }

    public function setIdProduit($idProduit)
    {
        $this->_idProduit = $idProduit;
    }

    public function getLibelleProduit()
    {
        return $this->_libelleProduit;
    }

    public function setLibelleProduit($libelleProduit)
    {
        $this->_libelleProduit = $libelleProduit;
    }

    public function getPrix()
    {
        return $this->_prix;
    }

    public function setPrix($prix)
    {
        $this->_prix = $prix;
    }

    public function getDateDePeremption()
    {
        return $this->_dateDePeremption;
    }

    public function setDateDePeremption($dateDePeremption)
    {
        $this->_dateDePeremption = $dateDePeremption;
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
        return $this->getLibelleProduit().' '.$this->getPrix().' € périme le '.$this->getDateDePeremption();
    }

}