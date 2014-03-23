<?php

namespace Didier\Bundle\WebsiteBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="didier_website_default_home")
     */
    public function homeAction()
    {
        return $this->render('DidierWebsiteBundle:Default:home.html.twig');
    }
}
