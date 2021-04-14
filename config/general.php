<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 */

return [
    // Global settings
    '*' => [

        // Default Week Start Day (0 = Sunday, 1 = Monday...)
        'defaultWeekStartDay' => 0,

        // Enable CSRF Protection (recommended)
        'enableCsrfProtection' => true,

        // Whether "index.php" should be visible in URLs
        'omitScriptNameInUrls' => true,

        // Control Panel trigger word
        'cpTrigger' => 'fiftyseven',

        'breakpoints' => [
                'small' => '640',
                'medium' => '1024',
                'large' => '1440',
                'xlarge' => '1440',
                'xxlarge' => '1440',
        ],

        'breakpointsContained' => [
                'small' => '640',
                'medium' => '1024',
                'large' => '1200',
                'xlarge' => '1200',
                'xxlarge' => '1200',
        ],

        // The secure key Craft will use for hashing and encrypting data
        'securityKey' => getenv('SECURITY_KEY'),
        
        'enableTemplateCaching' => false,

        // Set the environmental variables
        'staticAssetsVersion' => 27,
        
    ],

    // Development environment settings
    'dev' => [
       'siteUrl' => [
          'brighton' => 'https://brightoncomedygarden.test',
          'bristol' => 'https://bristolcomedygarden.test',
          'stAlbans' => 'https://stalbanscomedygarden.test',
          'greenwich' => 'https://greenwichcomedyfestival.test',
        ],

        // Dev Mode (see https://craftcms.com/support/dev-mode)
        'devMode' => true,
        'allowUpdates' => true,
        'enableTemplateCaching' => false,
        // Set the environmental variables
        'staticAssetsVersion' => time(),
    ],

    // Staging environment settings
    'staging' => [

        'siteUrl' => [
            'brighton' => 'https://fiftyseven-stage.frb.io',
            'bristol' => 'https://www.bristolcomedygarden.co.uk',
            'stAlbans' => 'https://www.stalbanscomedygarden.co.uk',
            'greenwich' => 'https://www.greenwichcomedyfestival.co.uk',
        ],


        'devMode' => true,
        'enableTemplateCaching' => false,
        'allowUpdates' => false,
        // Set the environmental variables
         'staticAssetsVersion' => time(),
    ],

    // Production environment settings
    'production' => [

        'siteUrl' => [
            'brighton' => 'https://www.brightoncomedygarden.co.uk',
            'bristol' => 'https://www.bristolcomedygarden.co.uk',
            'stAlbans' => 'https://www.stalbanscomedygarden.co.uk',
            'greenwich' => 'https://www.greenwichcomedyfestival.co.uk',
        ],

        'devMode' => false,
        'enableTemplateCaching' => true,
        'allowUpdates' => false,
    ],
    

];



