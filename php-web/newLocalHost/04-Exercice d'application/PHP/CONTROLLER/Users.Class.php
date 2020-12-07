<?php

class Users
{

    /*****************Attributs***************** */
    private $_idUser;
    private $_nomUser;
    private $_prenomUser;
    private $_pseudo;
    private $_motDePasse;
    private $_idRole;

    /*****************Accesseurs***************** */
    public function getIdUser()
    {
        return $this->_idUser;
    }

    public function setIdUser($idUser)
    {
        $this->_idUser = $idUser;
    }
    
    public function getNomUser()
    {
        return $this->_nomUser;
    }

    public function setNomUser($nomUser)
    {
        $this->_nomUser = $nomUser;
    }

    public function getPrenomUser()
    {
        return $this->_prenomUser;
    }

    public function setPrenomUser($prenomUser)
    {
        $this->_prenomUser = $prenomUser;
    }


    public function getPseudo()
    {
        return $this->_pseudo;
    }

    public function setPseudo($pseudo)
    {
        $this->_pseudo = $pseudo;
    }

    public function getMotDePasse()
    {
        return $this->_motDePasse;
    }

    public function setMotDePasse($motDePasse)
    {
        $this->_motDePasse = $motDePasse;
    }

    public function getIdRole()
    {
        return $this->_idRole;
    }

    public function setIdRole($idRole)
    {
        $this->_idRole = $idRole;
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
        return "IdUser : ".$this->getIdUser()."NomUser : ".$this->getNomUser()."PrenomUser : ".$this->getPrenomUser()."IdRole : ".$this->getIdRole()."\n";
    }

   

    
}