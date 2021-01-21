<?php

//Test StagiairesManager

echo "recherche id = 1" . "<br>";
$obj =StagiairesManager::findById(1);
var_dump($obj);
echo $obj->toString();

echo "ajout de l'objet". "<br>";
$newObj = new Stagiaires(["genreStagiaire" => "M", "nomStagiaire" => "Test", "prenomStagiaire" => "Test", "numSecuStagiaire" => "1231265651544", "numBenefStagiaire" => "45845645", "dateNaissanceStagiaire" => "12/10/2021", "emailStagiaire"=>"test@gmail.com"]);
var_dump(StagiairesManager::add($newObj));

// echo "Liste des objets" . "<br>";
// $array = StagiairesManager::getList();
// foreach ($array as $unObj)
// {
// 	echo $unObj->toString() . "<br><br>";
// }

// echo "on met à jour l'id 1" . "<br>";
// $obj->setGenreStagiaire("H");
// var_dump($obj);
// StagiairesManager::update($obj);
// $objUpdated = StagiairesManager::findById(1);
// echo "Liste des objets" . "<br>";
// $array = StagiairesManager::getList();
// foreach ($array as $unObj)
// {
// 	echo $unObj->toString() . "<br><br>";
// }

// echo "on supprime un objet". "<br>";
// $obj = StagiairesManager::findById(1);
// StagiairesManager::delete($obj);
// echo "Liste des objets" . "<br>";
// $array = StagiairesManager::getList();
// foreach ($array as $unObj)
// {
// 	echo $unObj->toString() . "<br><br>";
// }

// ?>