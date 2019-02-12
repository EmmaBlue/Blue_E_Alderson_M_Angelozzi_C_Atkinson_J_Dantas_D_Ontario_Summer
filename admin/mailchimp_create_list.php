<?php

    $apikey = '1704523e86396ec69239cf5ba42716d5-us20'; // replace with your API key
    $dc = 'us20'; // replace with your data center

    $data = array( // the information for your new list--not all is required
        "name" => "Summer Ontario",
        "contact" => array(
            "company" => "Summer Ontario Hackathon",
            "address1" => "137 Dundas Street",
            "address2" => "",
            "city" => "London",
            "state" => "Ontario",
            "zip" => "N6A 1E9",
            "country" => "Canada",
            "phone" => ""
        ),
        "permission_reminder" => "You are receiving this email because you love Summer in Ontario.",
        "use_archive_bar" => false,
        "campaign_defaults" => array(
            "from_name" => "Summer Ontario",
            "from_email" => "newsletter@summerontario.ca",
            "subject" => "Summer Ontario Newsletter",
            "language" => "English"
        ),
        "notify_on_subscribe" => "c_angelozzi@fanshaweonline.ca",
        "notify_on_unsubscribe" => "c_angelozzi@fanshaweonline.ca",
        "email_type_option" => false,
        "visibility" => "prv"
    );
    $data = json_encode($data); // API requires JSON objects
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "http://".$dc.".api.mailchimp.com/3.0/lists/"); // ../lists/ URL to create new list resource
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POSTREQUEST, true); // declare request is POST type
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data); // set POST data
    curl_setopt($ch, CURLOPT_USERPWD, "user:".$apikey); // HTML Basic Auth
    $output = curl_exec($ch); // execute and capture response
    curl_close($ch);
    print_r($output); // display API response
