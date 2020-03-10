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
        'cpTrigger' => 'admin',

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
        'staticAssetsVersion' => 17,
        
    ],

    // Development environment settings
    'dev' => [
       'siteUrl' => [
          'default' => 'https://fiftyseven.test',
          'brighton' => 'https://brightoncomedygarden.test',
          'bristol' => 'https://bristolcomedygarden.test',
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
            'default' => 'https://fiftyseven-stage.frb.io',
            'brighton' => 'https://www.brightoncomedygarden.co.uk',
            'bristol' => 'https://www.bristolcomedygarden.co.uk',
            'greenwich' => 'https://www.greenwichcomedyfestival.co.uk',
        ],


        'devMode' => false,
        'enableTemplateCaching' => false,
        'allowUpdates' => true,
        // Set the environmental variables
         'staticAssetsVersion' => time(),
    ],

    // Production environment settings
    'production' => [

        'siteUrl' => [
            'default' => 'https://fiftyseven-prod.frb.io',
            'brighton' => 'https://www.brightoncomedygarden.co.uk',
            'bristol' => 'https://www.bristolcomedygarden.co.uk',
            'greenwich' => 'https://www.greenwichcomedyfestival.co.uk',
        ],

        'devMode' => false,
        'enableTemplateCaching' => true,
        'allowUpdates' => false,
    ],
    

];



