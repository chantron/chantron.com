<?php namespace Chantron\Controllers;

use Chantron\Contracts\Controller;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

class Mailer extends Controller
{
    public function send(Request $request, Response $response, $args)
    {
        $params = $request->getParsedBody();

        if (!$params['from']) {
            return $this->json([
                'success' => false,
                'message' => 'You must enter your email.',
            ], 400);
        }

        if (!$params['text']) {
            return $this->json([
                'success' => false,
                'message' => 'You must submit a message.',
            ], 400);
        }

        $domain = $this->container['settings']['mailgun']['domain'];
        $params = filter_var_array($params, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $params['to'] = $this->container['settings']['mailgun']['to'];
        $params['from'] = filter_var($params['from'], FILTER_VALIDATE_EMAIL);
        $params['subject'] = 'A new message has been received re: ' . $params['subject'];
        $params['text'] = $params['name'] . ' (' . $params['from'] . ') says: ' . "\n" . $params['text'];

        if (!$params['from']) {
            return $this->json([
                'success' => false,
                'message' => 'Invalid email address.'
            ], 400);
        }

        try {
            $results = $this->mail->sendMessage($domain, $params);
            return $this->json([
                'success' => true,
                'message' => 'Message successfully sent.'
            ]);
        } catch (\Mailgun\Connection\Exceptions\MissingRequiredParameters $error) {
            return $this->json([
                'success' => false,
                'message' => 'Could not send message.'
            ], 400);
        }
    }
}
