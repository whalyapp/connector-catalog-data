import { ICatalog } from "./types";

export const catalogData: ICatalog = {
    "vendors": [
        {
            "slug": "portable",
            "name": "Portable",
            "logoUrl": "/vendors/portable.png",
            "type": "ETL",
            "isOpenSource": false,
            "pricing": "$$",
            "website": "https://portable.io/"
        },
        {
            "slug": "fivetran",
            "name": "Fivetran",
            "logoUrl": "/vendors/fivetran.webp",
            "type": "ETL",
            "isOpenSource": false,
            "pricing": "$$$$",
            "website": "https://www.fivetran.com/"
        },
        {
            "slug": "rivery",
            "name": "Rivery",
            "logoUrl": "/vendors/rivery.png",
            "type": "ETL",
            "isOpenSource": false,
            "pricing": "$$$",
            "website": "https://rivery.io/"
        },
        {
            "slug": "airbyte",
            "name": "Airbyte",
            "logoUrl": "/vendors/airbyte.jpeg",
            "type": "ETL",
            "isOpenSource": true,
            "pricing": "$$$",
            "website": "https://airbyte.com/"
        },
        {
            "slug": "stitch",
            "name": "Stitch",
            "logoUrl": "/vendors/stitch.png",
            "type": "ETL",
            "isOpenSource": true,
            "pricing": "$$",
            "website": "https://www.stitchdata.com/"
        },
        {
            "slug": "hevo-data",
            "name": "Hevo Data",
            "logoUrl": "/vendors/hevo-data.jpeg",
            "type": "ETL",
            "isOpenSource": false,
            "pricing": "$$$",
            "website": "https://hevodata.com/"
        },
        {
            "slug": "whaly",
            "name": "Whaly",
            "logoUrl": "/vendors/whaly.png",
            "type": "BI",
            "isOpenSource": false,
            "pricing": "$$",
            "website": "https://whaly.io/"
        },
        {
            "slug": "google-datastream",
            "name": "Google Datastream",
            "logoUrl": "/vendors/datastream.png",
            "type": "ETL",
            "isOpenSource": false,
            "pricing": "$$",
            "website": "https://cloud.google.com/datastream"
        },
        {
            "slug": "salesforce",
            "name": "Salesforce",
            "logoUrl": "/vendors/salesforce.png",
            "type": "SaaS",
            "isOpenSource": false,
            "pricing": "Unknown",
            "website": "https://www.salesforce.com/eu/"
        },
        {
            "slug": "stripe",
            "name": "Stripe",
            "logoUrl": "/vendors/stripe.png",
            "type": "SaaS",
            "isOpenSource": false,
            "pricing": "$$",
            "website": "https://stripe.com/"
        },
        {
            "slug": "mixpanel",
            "name": "MixPanel",
            "logoUrl": "/vendors/mixpanel.png",
            "type": "SaaS",
            "isOpenSource": false,
            "pricing": "$$",
            "website": "https://mixpanel.com/"
        },
        {
            "slug": "amplitude",
            "name": "Amplitude",
            "logoUrl": "/vendors/amplitude.png",
            "type": "SaaS",
            "isOpenSource": false,
            "pricing": "$$",
            "website": "https://amplitude.com/"
        },
        {
            "slug": "hubspot",
            "name": "Hubspot",
            "logoUrl": "/vendors/hubspot.png",
            "type": "SaaS",
            "isOpenSource": false,
            "pricing": "$$",
            "website": "https://www.hubspot.com/"
        },
        {
            "slug": "google-analytics-v4",
            "name": "Google Analytics V4",
            "logoUrl": "/vendors/ga4.png",
            "type": "SaaS",
            "isOpenSource": false,
            "pricing": "Free",
            "website": "https://analytics.google.com"
        },
        {
            "slug": "braze",
            "name": "Braze",
            "logoUrl": "/vendors/braze.webp",
            "type": "SaaS",
            "isOpenSource": false,
            "pricing": "Unknown",
            "website": "https://www.braze.com/"
        }
    ],
    "sources": [
        {
            "slug": "hubspot",
            "logoUrl": "/sources/hubspot.png",
            "name": "HubSpot",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "whaly",
                "stitch",
                "hubspot",
                "portable",
                "rivery"
            ]
        },
        {
            "slug": "mixpanel",
            "logoUrl": "/sources/mixpanel.png",
            "name": "Mixpanel",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "whaly",
                "stitch",
                "mixpanel",
                "portable",
                "rivery"
            ]
        },
        {
            "slug": "amplitude",
            "logoUrl": "/sources/amplitude.png",
            "name": "Amplitude",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "whaly",
                "stitch",
                "amplitude",
                "portable",
                "rivery"
            ]
        },
        {
            "slug": "stripe",
            "logoUrl": "/sources/stripe.png",
            "name": "Stripe",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "whaly",
                "stitch",
                "stripe",
                "portable",
                "rivery"
            ]
        },
        {
            "slug": "intercom",
            "logoUrl": "/sources/intercom.png",
            "name": "Intercom",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "whaly",
                "stitch",
                "portable",
                "rivery"
            ]
        },
        {
            "slug": "salesforce",
            "logoUrl": "/sources/salesforce.png",
            "name": "Salesforce",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "whaly",
                "stitch",
                "salesforce",
                "rivery"
            ]
        },
        {
            "slug": "postgresql",
            "logoUrl": "/sources/postgresql.png",
            "name": "PostgreSQL",
            "type": "Database",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "whaly",
                "stitch",
                "google-datastream",
                "rivery"
            ]
        },
        {
            "slug": "linkedin-ads",
            "logoUrl": "/sources/linkedin.png",
            "name": "LinkedIn Ads",
            "type": "Application",
            "vendors": [
                "hevo-data",
                "fivetran",
                "airbyte",
                "whaly",
                "stitch",
                "portable",
                "rivery"
            ]
        },
        {
            "slug": "quickbooks",
            "logoUrl": "/sources/quickbooks.png",
            "name": "QuickBooks",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "whaly",
                "stitch",
                "rivery"
            ]
        },
        {
            "slug": "klaviyo",
            "logoUrl": "/sources/klaviyo.png",
            "name": "Klaviyo",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "stitch",
                "portable",
                "rivery"
            ]
        },
        {
            "slug": "jira",
            "logoUrl": "/sources/jira.png",
            "name": "Jira",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "stitch",
                "portable",
                "rivery"
            ]
        },
        {
            "slug": "google-analytics-(universal---legacy)",
            "logoUrl": "/sources/ga4.png",
            "name": "Google Analytics (Universal - Legacy)",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "stitch",
                "airbyte",
                "whaly",
                "rivery"
            ]
        },
        {
            "slug": "pipedrive",
            "logoUrl": "/sources/pipedrive.png",
            "name": "Pipedrive",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte",
                "whaly",
                "stitch",
                "portable",
                "rivery"
            ]
        },
        {
            "slug": "mailchimp",
            "logoUrl": "/sources/mailchimp.png",
            "name": "Mailchimp",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "stitch",
                "portable",
                "rivery"
            ]
        },
        {
            "slug": "github",
            "logoUrl": "/sources/github.png",
            "name": "GitHub",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "whaly",
                "stitch",
                "portable"
            ]
        },
        {
            "slug": "google-ads",
            "logoUrl": "/sources/google-ads.png",
            "name": "Google Ads",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "whaly",
                "stitch",
                "rivery"
            ]
        },
        {
            "slug": "recurly",
            "logoUrl": "/sources/recurly.png",
            "name": "Recurly",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "stitch",
                "portable",
                "rivery"
            ]
        },
        {
            "slug": "facebook-ads",
            "logoUrl": "/sources/facebook-ads.png",
            "name": "Facebook Ads",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "whaly",
                "stitch",
                "rivery"
            ]
        },
        {
            "slug": "mongodb",
            "logoUrl": "/sources/mongodb.png",
            "name": "MongoDB",
            "type": "Database",
            "vendors": [
                "fivetran",
                "hevo-data",
                "whaly",
                "stitch",
                "airbyte",
                "rivery"
            ]
        },
        {
            "slug": "oracle",
            "logoUrl": "/sources/oracle.jpeg",
            "name": "Oracle",
            "type": "Database",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "stitch",
                "google-datastream",
                "rivery"
            ]
        },
        {
            "slug": "mysql",
            "logoUrl": "/sources/mysql.png",
            "name": "MySQL",
            "type": "Database",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "stitch",
                "google-datastream",
                "rivery"
            ]
        },
        {
            "slug": "google-sheets",
            "logoUrl": "/sources/gsheet.png",
            "name": "Google Sheets",
            "type": "File",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "whaly",
                "stitch",
                "rivery"
            ]
        },
        {
            "slug": "marketo",
            "logoUrl": "/sources/marketo.png",
            "name": "Marketo",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "stitch",
                "rivery"
            ]
        },
        {
            "slug": "freshdesk",
            "logoUrl": "/sources/freshworks.png",
            "name": "Freshdesk",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "stitch",
                "portable"
            ]
        },
        {
            "slug": "google-search-console",
            "logoUrl": "/sources/google-search-console.png",
            "name": "Google Search Console",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "stitch",
                "rivery"
            ]
        },
        {
            "slug": "asana",
            "logoUrl": "/sources/asana.png",
            "name": "Asana",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "stitch",
                "portable"
            ]
        },
        {
            "slug": "recharge",
            "logoUrl": "/sources/recharge.png",
            "name": "ReCharge",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte",
                "stitch",
                "portable",
                "rivery"
            ]
        },
        {
            "slug": "shopify",
            "logoUrl": "/sources/shopify.png",
            "name": "Shopify",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "stitch",
                "rivery"
            ]
        },
        {
            "slug": "chargebee",
            "logoUrl": "/sources/chargebee.png",
            "name": "Chargebee",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "stitch",
                "portable"
            ]
        },
        {
            "slug": "pendo",
            "logoUrl": "/sources/pendo.png",
            "name": "Pendo",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "stitch",
                "portable",
                "rivery"
            ]
        },
        {
            "slug": "sendgrid",
            "logoUrl": "/sources/sendgrid.png",
            "name": "SendGrid",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "stitch",
                "rivery"
            ]
        },
        {
            "slug": "typeform",
            "logoUrl": "/sources/typeform.png",
            "name": "Typeform",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "stitch",
                "portable"
            ]
        },
        {
            "slug": "amazon-s3",
            "logoUrl": "/sources/s3.png",
            "name": "Amazon S3",
            "type": "File",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "stitch",
                "rivery"
            ]
        },
        {
            "slug": "sftp",
            "logoUrl": "/sources/sftp.png",
            "name": "SFTP",
            "type": "File",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "stitch",
                "rivery"
            ]
        },
        {
            "slug": "segment",
            "logoUrl": "/sources/segment.png",
            "name": "Segment",
            "type": "Events",
            "vendors": [
                "fivetran",
                "hevo-data",
                "whaly",
                "stitch",
                "rivery"
            ]
        },
        {
            "slug": "google-analytics-v4",
            "logoUrl": "/sources/ga4.png",
            "name": "Google Analytics V4",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte",
                "whaly",
                "hevo-data",
                "google-analytics-v4"
            ]
        },
        {
            "slug": "activecampaign",
            "logoUrl": "/sources/activecampaign.png",
            "name": "ActiveCampaign",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "stitch",
                "portable"
            ]
        },
        {
            "slug": "braintree",
            "logoUrl": "/sources/braintree.png",
            "name": "Braintree",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "stitch"
            ]
        },
        {
            "slug": "bigcommerce",
            "logoUrl": "/sources/bigcommerce.png",
            "name": "BigCommerce",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "stitch"
            ]
        },
        {
            "slug": "square",
            "logoUrl": "/sources/square.png",
            "name": "Square",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte",
                "stitch",
                "portable"
            ]
        },
        {
            "slug": "lever",
            "logoUrl": "/sources/lever.png",
            "name": "Lever",
            "type": "Application",
            "vendors": [
                "fivetran",
                "stitch",
                "airbyte",
                "portable"
            ]
        },
        {
            "slug": "airtable",
            "logoUrl": "/sources/airtable.png",
            "name": "Airtable",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte",
                "whaly",
                "rivery"
            ]
        },
        {
            "slug": "delighted",
            "logoUrl": "",
            "name": "Delighted",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "stitch"
            ]
        },
        {
            "slug": "outbrain",
            "logoUrl": "",
            "name": "Outbrain",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "stitch",
                "rivery"
            ]
        },
        {
            "slug": "help-scout",
            "logoUrl": "/sources/help-scout.png",
            "name": "Help Scout",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "stitch",
                "portable"
            ]
        },
        {
            "slug": "netsuite",
            "logoUrl": "",
            "name": "NetSuite",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "stitch",
                "rivery"
            ]
        },
        {
            "slug": "snapchat-ads",
            "logoUrl": "/sources/snapchat-ads.webp",
            "name": "Snapchat Ads",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "rivery"
            ]
        },
        {
            "slug": "outreach",
            "logoUrl": "/sources/outreach.png",
            "name": "Outreach",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte",
                "stitch",
                "portable"
            ]
        },
        {
            "slug": "facebook-pages",
            "logoUrl": "",
            "name": "Facebook Pages",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "rivery"
            ]
        },
        {
            "slug": "magento",
            "logoUrl": "",
            "name": "Magento",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "stitch"
            ]
        },
        {
            "slug": "iterable",
            "logoUrl": "/sources/iterable.png",
            "name": "Iterable",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte",
                "stitch",
                "portable"
            ]
        },
        {
            "slug": "appsflyer",
            "logoUrl": "",
            "name": "AppsFlyer",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "stitch",
                "rivery"
            ]
        },
        {
            "slug": "front",
            "logoUrl": "/sources/front.webp",
            "name": "Front",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "stitch",
                "portable"
            ]
        },
        {
            "slug": "zuora",
            "logoUrl": "/sources/zuora.png",
            "name": "Zuora",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte",
                "stitch",
                "portable"
            ]
        },
        {
            "slug": "taboola",
            "logoUrl": "/sources/taboola.png",
            "name": "Taboola",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "stitch",
                "rivery"
            ]
        },
        {
            "slug": "surveymonkey",
            "logoUrl": "",
            "name": "SurveyMonkey",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte",
                "stitch",
                "rivery"
            ]
        },
        {
            "slug": "twilio",
            "logoUrl": "/sources/twilio.png",
            "name": "Twilio",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "portable"
            ]
        },
        {
            "slug": "elasticsearch",
            "logoUrl": "",
            "name": "Elasticsearch",
            "type": "Database",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "rivery"
            ]
        },
        {
            "slug": "sql-server",
            "logoUrl": "",
            "name": "SQL Server",
            "type": "Database",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte",
                "stitch"
            ]
        },
        {
            "slug": "webhooks",
            "logoUrl": "",
            "name": "Webhooks",
            "type": "Events",
            "vendors": [
                "fivetran",
                "hevo-data",
                "stitch",
                "rivery"
            ]
        },
        {
            "slug": "woocommerce",
            "logoUrl": "/sources/woocommerce.png",
            "name": "WooCommerce",
            "type": "Application",
            "vendors": [
                "hevo-data",
                "airbyte",
                "whaly",
                "portable"
            ]
        },
        {
            "slug": "harvest",
            "logoUrl": "/sources/getharvest.png",
            "name": "Harvest",
            "type": "Application",
            "vendors": [
                "airbyte",
                "stitch",
                "portable",
                "rivery"
            ]
        },
        {
            "slug": "pinterest-ads",
            "logoUrl": "",
            "name": "Pinterest Ads",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "stitch"
            ]
        },
        {
            "slug": "drift",
            "logoUrl": "/sources/drift.png",
            "name": "Drift",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte",
                "portable"
            ]
        },
        {
            "slug": "sailthru",
            "logoUrl": "",
            "name": "Sailthru",
            "type": "Application",
            "vendors": [
                "fivetran",
                "stitch",
                "rivery"
            ]
        },
        {
            "slug": "criteo",
            "logoUrl": "",
            "name": "Criteo",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "rivery"
            ]
        },
        {
            "slug": "kustomer",
            "logoUrl": "/sources/kustomer.png",
            "name": "Kustomer",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte",
                "portable"
            ]
        },
        {
            "slug": "prestashop",
            "logoUrl": "",
            "name": "PrestaShop",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte"
            ]
        },
        {
            "slug": "pardot",
            "logoUrl": "",
            "name": "Pardot",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "stitch"
            ]
        },
        {
            "slug": "instagram-business",
            "logoUrl": "",
            "name": "Instagram Business",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "rivery"
            ]
        },
        {
            "slug": "okta",
            "logoUrl": "/sources/okta.png",
            "name": "Okta",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte",
                "portable"
            ]
        },
        {
            "slug": "branch",
            "logoUrl": "",
            "name": "Branch",
            "type": "Application",
            "vendors": [
                "fivetran",
                "stitch",
                "rivery"
            ]
        },
        {
            "slug": "google-campaign-manager-360",
            "logoUrl": "/sources/google.png",
            "name": "Google Campaign Manager 360",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "stitch"
            ]
        },
        {
            "slug": "apple-search-ads",
            "logoUrl": "/sources/apple.png",
            "name": "Apple Search Ads",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "rivery"
            ]
        },
        {
            "slug": "greenhouse",
            "logoUrl": "",
            "name": "Greenhouse",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte",
                "rivery"
            ]
        },
        {
            "slug": "salesforce-marketing-cloud",
            "logoUrl": "/sources/salesforce.png",
            "name": "Salesforce Marketing Cloud",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "rivery"
            ]
        },
        {
            "slug": "adroll",
            "logoUrl": "",
            "name": "AdRoll",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "rivery"
            ]
        },
        {
            "slug": "google-play",
            "logoUrl": "/sources/google.png",
            "name": "Google Play",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "rivery"
            ]
        },
        {
            "slug": "sage-intacct",
            "logoUrl": "/sources/sage.png",
            "name": "Sage Intacct",
            "type": "Application",
            "vendors": [
                "fivetran",
                "stitch",
                "rivery"
            ]
        },
        {
            "slug": "youtube-analytics",
            "logoUrl": "",
            "name": "YouTube Analytics",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte"
            ]
        },
        {
            "slug": "tiktok-ads",
            "logoUrl": "",
            "name": "TikTok Ads",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte"
            ]
        },
        {
            "slug": "zendesk-support",
            "logoUrl": "/sources/zendesk.png",
            "name": "Zendesk Support",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte",
                "portable"
            ]
        },
        {
            "slug": "twitter-ads",
            "logoUrl": "",
            "name": "Twitter Ads",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "rivery"
            ]
        },
        {
            "slug": "uservoice",
            "logoUrl": "",
            "name": "UserVoice",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "stitch"
            ]
        },
        {
            "slug": "zoho-crm",
            "logoUrl": "/sources/zoho.png",
            "name": "Zoho CRM",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte",
                "portable"
            ]
        },
        {
            "slug": "xero",
            "logoUrl": "",
            "name": "Xero",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data",
                "stitch"
            ]
        },
        {
            "slug": "mariadb",
            "logoUrl": "",
            "name": "MariaDB",
            "type": "Database",
            "vendors": [
                "fivetran",
                "stitch",
                "rivery"
            ]
        },
        {
            "slug": "dynamodb",
            "logoUrl": "",
            "name": "DynamoDB",
            "type": "Database",
            "vendors": [
                "fivetran",
                "hevo-data",
                "stitch"
            ]
        },
        {
            "slug": "snowflake",
            "logoUrl": "",
            "name": "Snowflake",
            "type": "Database",
            "vendors": [
                "fivetran",
                "airbyte",
                "rivery"
            ]
        },
        {
            "slug": "google-cloud-storage",
            "logoUrl": "/sources/google.png",
            "name": "Google Cloud Storage",
            "type": "File",
            "vendors": [
                "fivetran",
                "hevo-data",
                "rivery"
            ]
        },
        {
            "slug": "azure-blob-storage",
            "logoUrl": "/sources/azure.png",
            "name": "Azure Blob Storage",
            "type": "File",
            "vendors": [
                "fivetran",
                "hevo-data",
                "rivery"
            ]
        },
        {
            "slug": "apache-kafka",
            "logoUrl": "",
            "name": "Apache Kafka",
            "type": "Events",
            "vendors": [
                "fivetran",
                "hevo-data",
                "airbyte"
            ]
        },
        {
            "slug": "invoiced",
            "logoUrl": "/sources/invoiced.png",
            "name": "Invoiced",
            "type": "Application",
            "vendors": [
                "hevo-data",
                "stitch",
                "portable"
            ]
        },
        {
            "slug": "zendesk",
            "logoUrl": "/sources/zendesk.png",
            "name": "Zendesk",
            "type": "Application",
            "vendors": [
                "hevo-data",
                "stitch",
                "rivery"
            ]
        },
        {
            "slug": "dixa",
            "logoUrl": "/sources/dixa.png",
            "name": "Dixa",
            "type": "Application",
            "vendors": [
                "airbyte",
                "stitch",
                "portable"
            ]
        },
        {
            "slug": "monday",
            "logoUrl": "/sources/monday.png",
            "name": "Monday",
            "type": "Application",
            "vendors": [
                "airbyte",
                "portable",
                "rivery"
            ]
        },
        {
            "slug": "bing-ads",
            "logoUrl": "",
            "name": "Bing Ads",
            "type": "Application",
            "vendors": [
                "airbyte",
                "stitch",
                "rivery"
            ]
        },
        {
            "slug": "zoom",
            "logoUrl": "/sources/zoom.png",
            "name": "Zoom",
            "type": "Application",
            "vendors": [
                "airbyte",
                "stitch",
                "portable"
            ]
        },
        {
            "slug": "salesloft",
            "logoUrl": "/sources/salesloft.png",
            "name": "Salesloft",
            "type": "Application",
            "vendors": [
                "airbyte",
                "whaly",
                "portable"
            ]
        },
        {
            "slug": "freshservice",
            "logoUrl": "/sources/freshworks.png",
            "name": "Freshservice",
            "type": "Application",
            "vendors": [
                "airbyte",
                "portable",
                "rivery"
            ]
        },
        {
            "slug": "customer-io",
            "logoUrl": "/sources/customer.png",
            "name": "Customer.io",
            "type": "Application",
            "vendors": [
                "airbyte",
                "stitch",
                "portable"
            ]
        },
        {
            "slug": "chargify",
            "logoUrl": "/sources/chargify.png",
            "name": "Chargify",
            "type": "Application",
            "vendors": [
                "airbyte",
                "portable",
                "rivery"
            ]
        },
        {
            "slug": "slack",
            "logoUrl": "",
            "name": "Slack",
            "type": "Application",
            "vendors": [
                "airbyte",
                "whaly",
                "rivery"
            ]
        },
        {
            "slug": "lemlist",
            "logoUrl": "/sources/lemlist.png",
            "name": "Lemlist",
            "type": "Application",
            "vendors": [
                "airbyte",
                "whaly",
                "portable"
            ]
        },
        {
            "slug": "shiphero",
            "logoUrl": "/sources/shiphero.png",
            "name": "ShipHero",
            "type": "Application",
            "vendors": [
                "stitch",
                "portable",
                "rivery"
            ]
        },
        {
            "slug": "adjust",
            "logoUrl": "",
            "name": "Adjust",
            "type": "Application",
            "vendors": [
                "fivetran",
                "rivery"
            ]
        },
        {
            "slug": "adobe-analytics",
            "logoUrl": "/sources/adobe.png",
            "name": "Adobe Analytics",
            "type": "Application",
            "vendors": [
                "fivetran",
                "rivery"
            ]
        },
        {
            "slug": "apple-app-store",
            "logoUrl": "/sources/apple.png",
            "name": "Apple App Store",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte"
            ]
        },
        {
            "slug": "sap-business-one",
            "logoUrl": "/sources/sap.png",
            "name": "SAP Business One",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte"
            ]
        },
        {
            "slug": "braze",
            "logoUrl": "",
            "name": "Braze",
            "type": "Application",
            "vendors": [
                "fivetran",
                "braze"
            ]
        },
        {
            "slug": "microsoft-dynamics-nav",
            "logoUrl": "/sources/microsoft.jpeg",
            "name": "Microsoft Dynamics NAV",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte"
            ]
        },
        {
            "slug": "google-analytics-360",
            "logoUrl": "/sources/ga4.png",
            "name": "Google Analytics 360",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data"
            ]
        },
        {
            "slug": "heap",
            "logoUrl": "",
            "name": "Heap",
            "type": "Application",
            "vendors": [
                "fivetran",
                "stitch"
            ]
        },
        {
            "slug": "aws-cloudtrail",
            "logoUrl": "",
            "name": "AWS CloudTrail",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte"
            ]
        },
        {
            "slug": "oracle-peoplesoft",
            "logoUrl": "/sources/oracle.jpeg",
            "name": "Oracle PeopleSoft",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte"
            ]
        },
        {
            "slug": "servicenow",
            "logoUrl": "",
            "name": "ServiceNow",
            "type": "Application",
            "vendors": [
                "fivetran",
                "rivery"
            ]
        },
        {
            "slug": "mandrill",
            "logoUrl": "",
            "name": "Mandrill",
            "type": "Application",
            "vendors": [
                "fivetran",
                "rivery"
            ]
        },
        {
            "slug": "microsoft-dynamics-ax",
            "logoUrl": "/sources/microsoft.jpeg",
            "name": "Microsoft Dynamics AX",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte"
            ]
        },
        {
            "slug": "microsoft-dynamics-gp",
            "logoUrl": "/sources/microsoft.jpeg",
            "name": "Microsoft Dynamics GP",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte"
            ]
        },
        {
            "slug": "mavenlink",
            "logoUrl": "",
            "name": "Mavenlink",
            "type": "Application",
            "vendors": [
                "fivetran",
                "rivery"
            ]
        },
        {
            "slug": "height",
            "logoUrl": "/sources/height.png",
            "name": "Height",
            "type": "Application",
            "vendors": [
                "fivetran",
                "portable"
            ]
        },
        {
            "slug": "spree-commerce",
            "logoUrl": "",
            "name": "Spree Commerce",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte"
            ]
        },
        {
            "slug": "google-ad-manager",
            "logoUrl": "/sources/google.png",
            "name": "Google Ad Manager",
            "type": "Application",
            "vendors": [
                "fivetran",
                "rivery"
            ]
        },
        {
            "slug": "eloqua",
            "logoUrl": "",
            "name": "Eloqua",
            "type": "Application",
            "vendors": [
                "fivetran",
                "stitch"
            ]
        },
        {
            "slug": "amazon-ads",
            "logoUrl": "/sources/amazon.jpeg",
            "name": "Amazon Ads",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte"
            ]
        },
        {
            "slug": "microsoft-advertising",
            "logoUrl": "/sources/microsoft.jpeg",
            "name": "Microsoft Advertising",
            "type": "Application",
            "vendors": [
                "fivetran",
                "hevo-data"
            ]
        },
        {
            "slug": "anaplan",
            "logoUrl": "",
            "name": "Anaplan",
            "type": "Application",
            "vendors": [
                "fivetran",
                "rivery"
            ]
        },
        {
            "slug": "microsoft-dynamics-crm",
            "logoUrl": "/sources/microsoft.jpeg",
            "name": "Microsoft Dynamics CRM",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte"
            ]
        },
        {
            "slug": "oracle-siebel-crm",
            "logoUrl": "/sources/oracle.jpeg",
            "name": "Oracle Siebel CRM",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte"
            ]
        },
        {
            "slug": "zen-cart",
            "logoUrl": "",
            "name": "Zen Cart",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte"
            ]
        },
        {
            "slug": "zendesk-sunshine",
            "logoUrl": "/sources/zendesk.png",
            "name": "Zendesk Sunshine",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte"
            ]
        },
        {
            "slug": "sugarcrm",
            "logoUrl": "",
            "name": "SugarCRM",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte"
            ]
        },
        {
            "slug": "workday",
            "logoUrl": "",
            "name": "Workday",
            "type": "Application",
            "vendors": [
                "fivetran",
                "stitch"
            ]
        },
        {
            "slug": "the-trade-desk",
            "logoUrl": "",
            "name": "The Trade Desk",
            "type": "Application",
            "vendors": [
                "fivetran",
                "rivery"
            ]
        },
        {
            "slug": "zendesk-chat",
            "logoUrl": "/sources/zendesk.png",
            "name": "Zendesk Chat",
            "type": "Application",
            "vendors": [
                "fivetran",
                "airbyte"
            ]
        },
        {
            "slug": "zendesk-sell",
            "logoUrl": "/sources/zendesk.png",
            "name": "Zendesk Sell",
            "type": "Application",
            "vendors": [
                "fivetran",
                "portable"
            ]
        },
        {
            "slug": "documentdb",
            "logoUrl": "",
            "name": "DocumentDB",
            "type": "Database",
            "vendors": [
                "fivetran",
                "hevo-data"
            ]
        },
        {
            "slug": "sap-hana",
            "logoUrl": "/sources/sap.png",
            "name": "SAP HANA",
            "type": "Database",
            "vendors": [
                "fivetran",
                "rivery"
            ]
        },
        {
            "slug": "ftp",
            "logoUrl": "",
            "name": "FTP",
            "type": "File",
            "vendors": [
                "fivetran",
                "hevo-data"
            ]
        },
        {
            "slug": "google-drive",
            "logoUrl": "/sources/google.png",
            "name": "Google Drive",
            "type": "File",
            "vendors": [
                "fivetran",
                "hevo-data"
            ]
        },
        {
            "slug": "redshift",
            "logoUrl": "",
            "name": "Redshift",
            "type": "Database",
            "vendors": [
                "hevo-data",
                "airbyte"
            ]
        },
        {
            "slug": "bigquery",
            "logoUrl": "",
            "name": "BigQuery",
            "type": "Database",
            "vendors": [
                "hevo-data",
                "airbyte"
            ]
        },
        {
            "slug": "drip",
            "logoUrl": "",
            "name": "Drip",
            "type": "Application",
            "vendors": [
                "hevo-data",
                "stitch"
            ]
        },
        {
            "slug": "wordpress",
            "logoUrl": "",
            "name": "WordPress",
            "type": "Application",
            "vendors": [
                "hevo-data",
                "airbyte"
            ]
        },
        {
            "slug": "aftership",
            "logoUrl": "/sources/aftership.png",
            "name": "AfterShip",
            "type": "Application",
            "vendors": [
                "hevo-data",
                "portable"
            ]
        },
        {
            "slug": "trello",
            "logoUrl": "/sources/trello.png",
            "name": "Trello",
            "type": "Application",
            "vendors": [
                "airbyte",
                "portable"
            ]
        },
        {
            "slug": "alloydb-for-postgresql",
            "logoUrl": "",
            "name": "AlloyDB for PostgreSQL",
            "type": "Database",
            "vendors": [
                "airbyte",
                "google-datastream"
            ]
        },
        {
            "slug": "microsoft-teams",
            "logoUrl": "/sources/microsoft.jpeg",
            "name": "Microsoft Teams",
            "type": "Application",
            "vendors": [
                "airbyte",
                "stitch"
            ]
        },
        {
            "slug": "orbit",
            "logoUrl": "",
            "name": "Orbit",
            "type": "Application",
            "vendors": [
                "airbyte",
                "whaly"
            ]
        },
        {
            "slug": "chartmogul",
            "logoUrl": "/sources/chartmogul.png",
            "name": "Chartmogul",
            "type": "Application",
            "vendors": [
                "airbyte",
                "portable"
            ]
        },
        {
            "slug": "tempo",
            "logoUrl": "/sources/tempo.png",
            "name": "Tempo",
            "type": "Application",
            "vendors": [
                "airbyte",
                "portable"
            ]
        },
        {
            "slug": "db2",
            "logoUrl": "",
            "name": "Db2",
            "type": "Database",
            "vendors": [
                "airbyte",
                "stitch"
            ]
        },
        {
            "slug": "looker",
            "logoUrl": "",
            "name": "Looker",
            "type": "Application",
            "vendors": [
                "airbyte",
                "stitch"
            ]
        },
        {
            "slug": "persistiq",
            "logoUrl": "/sources/persistiq.png",
            "name": "PersistIq",
            "type": "Application",
            "vendors": [
                "airbyte",
                "portable"
            ]
        },
        {
            "slug": "confluence",
            "logoUrl": "/sources/atlassian.png",
            "name": "Confluence",
            "type": "Application",
            "vendors": [
                "airbyte",
                "portable"
            ]
        },
        {
            "slug": "freshsales",
            "logoUrl": "/sources/freshworks.png",
            "name": "Freshsales",
            "type": "Application",
            "vendors": [
                "airbyte",
                "portable"
            ]
        },
        {
            "slug": "close-com",
            "logoUrl": "",
            "name": "Close.com",
            "type": "Application",
            "vendors": [
                "airbyte",
                "stitch"
            ]
        },
        {
            "slug": "pivotal-tracker",
            "logoUrl": "/sources/pivotaltracker.png",
            "name": "Pivotal Tracker",
            "type": "Application",
            "vendors": [
                "airbyte",
                "portable"
            ]
        },
        {
            "slug": "linkedin-pages",
            "logoUrl": "/sources/linkedin.png",
            "name": "LinkedIn Pages",
            "type": "Application",
            "vendors": [
                "airbyte",
                "fivetran"
            ]
        },
        {
            "slug": "pagerduty",
            "logoUrl": "/sources/pagerduty.png",
            "name": "PagerDuty",
            "type": "Application",
            "vendors": [
                "airbyte",
                "portable"
            ]
        },
        {
            "slug": "sentry",
            "logoUrl": "/sources/sentry.png",
            "name": "Sentry",
            "type": "Application",
            "vendors": [
                "airbyte",
                "portable"
            ]
        },
        {
            "slug": "gitlab",
            "logoUrl": "",
            "name": "GitLab",
            "type": "Application",
            "vendors": [
                "airbyte",
                "stitch"
            ]
        },
        {
            "slug": "pinterest",
            "logoUrl": "",
            "name": "Pinterest",
            "type": "Application",
            "vendors": [
                "airbyte",
                "rivery"
            ]
        },
        {
            "slug": "notion",
            "logoUrl": "/sources/notion.png",
            "name": "Notion",
            "type": "Application",
            "vendors": [
                "airbyte",
                "portable"
            ]
        },
        {
            "slug": "firebolt",
            "logoUrl": "",
            "name": "Firebolt",
            "type": "Database",
            "vendors": [
                "airbyte",
                "rivery"
            ]
        },
        {
            "slug": "brex",
            "logoUrl": "/sources/brex.png",
            "name": "Brex",
            "type": "Application",
            "vendors": [
                "whaly",
                "portable"
            ]
        },
        {
            "slug": "aircall",
            "logoUrl": "/sources/aircall.png",
            "name": "Aircall",
            "type": "Application",
            "vendors": [
                "whaly",
                "portable"
            ]
        },
        {
            "slug": "autopilot",
            "logoUrl": "/sources/autopilothq.png",
            "name": "Autopilot",
            "type": "Application",
            "vendors": [
                "stitch",
                "portable"
            ]
        },
        {
            "slug": "campaign-monitor",
            "logoUrl": "/sources/campaignmonitor.png",
            "name": "Campaign Monitor",
            "type": "Application",
            "vendors": [
                "stitch",
                "portable"
            ]
        },
        {
            "slug": "deputy",
            "logoUrl": "/sources/deputy.png",
            "name": "deputy",
            "type": "Application",
            "vendors": [
                "stitch",
                "portable"
            ]
        },
        {
            "slug": "fullstory",
            "logoUrl": "/sources/fullstory.png",
            "name": "Fullstory",
            "type": "Application",
            "vendors": [
                "stitch",
                "portable"
            ]
        },
        {
            "slug": "pepperjam",
            "logoUrl": "",
            "name": "Pepperjam",
            "type": "Application",
            "vendors": [
                "stitch",
                "rivery"
            ]
        },
        {
            "slug": "shippo",
            "logoUrl": "/sources/goshippo.png",
            "name": "Shippo",
            "type": "Application",
            "vendors": [
                "stitch",
                "portable"
            ]
        },
        {
            "slug": "sparkpost",
            "logoUrl": "/sources/sparkpost.png",
            "name": "SparkPost",
            "type": "Application",
            "vendors": [
                "stitch",
                "portable"
            ]
        },
        {
            "slug": "yotpo",
            "logoUrl": "",
            "name": "Yotpo",
            "type": "Application",
            "vendors": [
                "stitch",
                "rivery"
            ]
        },
        {
            "slug": "bamboohr",
            "logoUrl": "/sources/bamboohr.png",
            "name": "BambooHR",
            "type": "Application",
            "vendors": [
                "portable",
                "airbyte"
            ]
        },
        {
            "slug": "callrail",
            "logoUrl": "/sources/callrail.png",
            "name": "CallRail",
            "type": "Application",
            "vendors": [
                "portable",
                "rivery"
            ]
        },
        {
            "slug": "powerschool",
            "logoUrl": "",
            "name": "Powerschool",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "qualtrics",
            "logoUrl": "",
            "name": "Qualtrics",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "google-analytics-4-export",
            "logoUrl": "/sources/ga4.png",
            "name": "Google Analytics 4 Export",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "oracle-e-business-suite",
            "logoUrl": "/sources/oracle.jpeg",
            "name": "Oracle E-Business Suite",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "optimizely",
            "logoUrl": "",
            "name": "Optimizely",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "adp-workforce-now",
            "logoUrl": "",
            "name": "ADP Workforce Now",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "oracle-fusion-cloud-apps",
            "logoUrl": "/sources/oracle.jpeg",
            "name": "Oracle Fusion Cloud Apps",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "loaded-commerce",
            "logoUrl": "",
            "name": "Loaded Commerce",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "lightspeed-retail",
            "logoUrl": "",
            "name": "Lightspeed Retail",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "microsoft-lists",
            "logoUrl": "/sources/microsoft.jpeg",
            "name": "Microsoft Lists",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "ellucian-banner",
            "logoUrl": "",
            "name": "Ellucian Banner",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "oscommerce",
            "logoUrl": "",
            "name": "OsCommerce",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "amazon-cloudfront",
            "logoUrl": "/sources/amazon.jpeg",
            "name": "Amazon Cloudfront",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "salesforce-commerce-cloud",
            "logoUrl": "/sources/salesforce.png",
            "name": "Salesforce Commerce Cloud",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "splunk",
            "logoUrl": "",
            "name": "Splunk",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "microsoft-dynamics-365-fo",
            "logoUrl": "/sources/microsoft.jpeg",
            "name": "Microsoft Dynamics 365 F/O",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "crossbeam",
            "logoUrl": "",
            "name": "Crossbeam",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "adobe-analytics-data-feed",
            "logoUrl": "/sources/adobe.png",
            "name": "Adobe Analytics Data Feed",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "financialforce",
            "logoUrl": "",
            "name": "FinancialForce",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "blackboard",
            "logoUrl": "",
            "name": "Blackboard",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "microsoft-dynamics-365",
            "logoUrl": "/sources/microsoft.jpeg",
            "name": "Microsoft Dynamics 365",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "google-display-&-video-360",
            "logoUrl": "/sources/google.png",
            "name": "Google Display & Video 360",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "sap-business-bydesign",
            "logoUrl": "/sources/sap.png",
            "name": "SAP Business ByDesign",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "canvas",
            "logoUrl": "",
            "name": "Canvas",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "sap-s/4",
            "logoUrl": "/sources/sap.png",
            "name": "SAP S/4",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "marin-software",
            "logoUrl": "",
            "name": "Marin Software",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "medallia",
            "logoUrl": "",
            "name": "Medallia",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "coupa",
            "logoUrl": "",
            "name": "Coupa",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "epicor-prophet-21",
            "logoUrl": "",
            "name": "Epicor Prophet 21",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "sap-concur",
            "logoUrl": "/sources/sap.png",
            "name": "SAP Concur",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "google-analytics-(mcf)",
            "logoUrl": "/sources/google.png",
            "name": "Google Analytics (MCF)",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "aws-inventory",
            "logoUrl": "",
            "name": "AWS Inventory",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "twitter-organic",
            "logoUrl": "",
            "name": "Twitter Organic",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "workday-hcm",
            "logoUrl": "",
            "name": "Workday HCM",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "verizon-media",
            "logoUrl": "",
            "name": "Verizon Media",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "subscript",
            "logoUrl": "",
            "name": "Subscript",
            "type": "Application",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "opensearch",
            "logoUrl": "",
            "name": "OpenSearch",
            "type": "Database",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "email",
            "logoUrl": "",
            "name": "Email",
            "type": "File",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "dropbox",
            "logoUrl": "",
            "name": "Dropbox",
            "type": "File",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "box",
            "logoUrl": "",
            "name": "Box",
            "type": "File",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "onedrive",
            "logoUrl": "",
            "name": "OneDrive",
            "type": "File",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "sharepoint",
            "logoUrl": "",
            "name": "SharePoint",
            "type": "File",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "amazon-kinesis-firehose",
            "logoUrl": "/sources/amazon.jpeg",
            "name": "Amazon Kinesis Firehose",
            "type": "Events",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "snowplow",
            "logoUrl": "/sources/snowplow.png",
            "name": "Snowplow",
            "type": "Events",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "azure-service-bus",
            "logoUrl": "/sources/azure.png",
            "name": "Azure Service Bus",
            "type": "Events",
            "vendors": [
                "fivetran"
            ]
        },
        {
            "slug": "android-sdk",
            "logoUrl": "/sources/google.png",
            "name": "Android SDK",
            "type": "Events",
            "vendors": [
                "hevo-data"
            ]
        },
        {
            "slug": "clevertap",
            "logoUrl": "",
            "name": "CleverTap",
            "type": "Application",
            "vendors": [
                "hevo-data"
            ]
        },
        {
            "slug": "sendgrid-webhook",
            "logoUrl": "/sources/sendgrid.png",
            "name": "SendGrid Webhook",
            "type": "Application",
            "vendors": [
                "hevo-data"
            ]
        },
        {
            "slug": "swell",
            "logoUrl": "",
            "name": "Swell",
            "type": "Application",
            "vendors": [
                "hevo-data"
            ]
        },
        {
            "slug": "localytics",
            "logoUrl": "",
            "name": "Localytics",
            "type": "Application",
            "vendors": [
                "hevo-data"
            ]
        },
        {
            "slug": "shopify-webhook",
            "logoUrl": "/sources/shopify.png",
            "name": "Shopify Webhook",
            "type": "Application",
            "vendors": [
                "hevo-data"
            ]
        },
        {
            "slug": "openweather",
            "logoUrl": "",
            "name": "OpenWeather",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "shortio",
            "logoUrl": "",
            "name": "Shortio",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "drupal",
            "logoUrl": "",
            "name": "Drupal",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "google-workspace-admin-reports",
            "logoUrl": "/sources/google.png",
            "name": "Google Workspace Admin Reports",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "commercetools",
            "logoUrl": "",
            "name": "Commercetools",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "smartsheets",
            "logoUrl": "",
            "name": "Smartsheets",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "metabase",
            "logoUrl": "",
            "name": "Metabase",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "paystack",
            "logoUrl": "",
            "name": "Paystack",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "zenloop",
            "logoUrl": "",
            "name": "Zenloop",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "baton",
            "logoUrl": "",
            "name": "Baton",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "google-directory",
            "logoUrl": "/sources/google.png",
            "name": "Google Directory",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "talkdesk-explore",
            "logoUrl": "",
            "name": "Talkdesk Explore",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "plaid",
            "logoUrl": "",
            "name": "Plaid",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "paypal-transaction",
            "logoUrl": "",
            "name": "Paypal Transaction",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "cockroachdb",
            "logoUrl": "",
            "name": "CockroachDB",
            "type": "Database",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "clickhouse",
            "logoUrl": "",
            "name": "ClickHouse",
            "type": "Database",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "webflow",
            "logoUrl": "",
            "name": "Webflow",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "appfollow",
            "logoUrl": "",
            "name": "Appfollow",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "faker",
            "logoUrl": "",
            "name": "Faker",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "3pl-central",
            "logoUrl": "",
            "name": "3PL Central",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "cart-com",
            "logoUrl": "",
            "name": "Cart.com",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "onesignal",
            "logoUrl": "",
            "name": "OneSignal",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "hubplanner",
            "logoUrl": "",
            "name": "Hubplanner",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "freshcaller",
            "logoUrl": "/sources/freshworks.png",
            "name": "Freshcaller",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "tidb",
            "logoUrl": "",
            "name": "TiDB",
            "type": "Database",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "harness",
            "logoUrl": "",
            "name": "Harness",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "retently",
            "logoUrl": "",
            "name": "Retently",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "strava",
            "logoUrl": "",
            "name": "Strava",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "azure-table-storage",
            "logoUrl": "/sources/azure.png",
            "name": "Azure Table Storage",
            "type": "Database",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "orb",
            "logoUrl": "",
            "name": "Orb",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "glassfrog",
            "logoUrl": "",
            "name": "Glassfrog",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "linnworks",
            "logoUrl": "",
            "name": "Linnworks",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "amazon-seller-partner",
            "logoUrl": "/sources/amazon.jpeg",
            "name": "Amazon Seller Partner",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "kyriba",
            "logoUrl": "",
            "name": "Kyriba",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "pokéapi",
            "logoUrl": "",
            "name": "PokéAPI",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "exchange-rates-api",
            "logoUrl": "",
            "name": "Exchange Rates API",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "us-census-api",
            "logoUrl": "",
            "name": "US Census API",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "victorops",
            "logoUrl": "",
            "name": "VictorOps",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "jenkins",
            "logoUrl": "",
            "name": "Jenkins",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "qualaroo",
            "logoUrl": "",
            "name": "Qualaroo",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "dockerhub",
            "logoUrl": "",
            "name": "Dockerhub",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "searchmetrics",
            "logoUrl": "",
            "name": "SearchMetrics",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "flexport",
            "logoUrl": "",
            "name": "Flexport",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "amazon-sqs",
            "logoUrl": "/sources/amazon.jpeg",
            "name": "Amazon SQS",
            "type": "Events",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "timely",
            "logoUrl": "",
            "name": "Timely",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "posthog",
            "logoUrl": "",
            "name": "PostHog",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "zendesk-talk",
            "logoUrl": "/sources/zendesk.png",
            "name": "Zendesk Talk",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "apify-dataset",
            "logoUrl": "",
            "name": "Apify Dataset",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "instagram-ads",
            "logoUrl": "",
            "name": "Instagram Ads",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "robert-koch-institut-covid",
            "logoUrl": "",
            "name": "Robert Koch-Institut Covid",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "files",
            "logoUrl": "",
            "name": "Files",
            "type": "File",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "my-hours",
            "logoUrl": "",
            "name": "My Hours",
            "type": "Application",
            "vendors": [
                "airbyte"
            ]
        },
        {
            "slug": "pennylane",
            "logoUrl": "",
            "name": "Pennylane",
            "type": "Application",
            "vendors": [
                "whaly"
            ]
        },
        {
            "slug": "qonto",
            "logoUrl": "",
            "name": "Qonto",
            "type": "Application",
            "vendors": [
                "whaly"
            ]
        },
        {
            "slug": "lagrowthmachine",
            "logoUrl": "",
            "name": "LaGrowthMachine",
            "type": "Application",
            "vendors": [
                "whaly"
            ]
        },
        {
            "slug": "bubble",
            "logoUrl": "",
            "name": "Bubble",
            "type": "Application",
            "vendors": [
                "whaly"
            ]
        },
        {
            "slug": "recruitcrm",
            "logoUrl": "",
            "name": "RecruitCRM",
            "type": "Application",
            "vendors": [
                "whaly"
            ]
        },
        {
            "slug": "clubspeed",
            "logoUrl": "",
            "name": "Clubspeed",
            "type": "Application",
            "vendors": [
                "stitch"
            ]
        },
        {
            "slug": "codat",
            "logoUrl": "",
            "name": "Codat",
            "type": "Application",
            "vendors": [
                "stitch"
            ]
        },
        {
            "slug": "contentful",
            "logoUrl": "",
            "name": "Contentful",
            "type": "Application",
            "vendors": [
                "stitch"
            ]
        },
        {
            "slug": "desk-com",
            "logoUrl": "",
            "name": "Desk.com",
            "type": "Application",
            "vendors": [
                "stitch"
            ]
        },
        {
            "slug": "formkeep",
            "logoUrl": "",
            "name": "FormKeep",
            "type": "Application",
            "vendors": [
                "stitch"
            ]
        },
        {
            "slug": "impact",
            "logoUrl": "",
            "name": "Impact",
            "type": "Application",
            "vendors": [
                "stitch"
            ]
        },
        {
            "slug": "listrak",
            "logoUrl": "",
            "name": "Listrak",
            "type": "Application",
            "vendors": [
                "stitch"
            ]
        },
        {
            "slug": "liveperson",
            "logoUrl": "",
            "name": "LivePerson",
            "type": "Application",
            "vendors": [
                "stitch"
            ]
        },
        {
            "slug": "mailjet",
            "logoUrl": "",
            "name": "Mailjet",
            "type": "Application",
            "vendors": [
                "stitch"
            ]
        },
        {
            "slug": "mailshake",
            "logoUrl": "",
            "name": "Mailshake",
            "type": "Application",
            "vendors": [
                "stitch"
            ]
        },
        {
            "slug": "mambu",
            "logoUrl": "",
            "name": "Mambu",
            "type": "Application",
            "vendors": [
                "stitch"
            ]
        },
        {
            "slug": "onfleet",
            "logoUrl": "",
            "name": "Onfleet",
            "type": "Application",
            "vendors": [
                "stitch"
            ]
        },
        {
            "slug": "particle",
            "logoUrl": "",
            "name": "Particle",
            "type": "Application",
            "vendors": [
                "stitch"
            ]
        },
        {
            "slug": "platform-purple",
            "logoUrl": "",
            "name": "Platform Purple",
            "type": "Application",
            "vendors": [
                "stitch"
            ]
        },
        {
            "slug": "quick-base",
            "logoUrl": "",
            "name": "Quick Base",
            "type": "Application",
            "vendors": [
                "stitch"
            ]
        },
        {
            "slug": "referral-saasquatch",
            "logoUrl": "",
            "name": "Referral SaaSquatch",
            "type": "Application",
            "vendors": [
                "stitch"
            ]
        },
        {
            "slug": "revinate",
            "logoUrl": "",
            "name": "Revinate",
            "type": "Application",
            "vendors": [
                "stitch"
            ]
        },
        {
            "slug": "ringcentral",
            "logoUrl": "",
            "name": "RingCentral",
            "type": "Application",
            "vendors": [
                "stitch"
            ]
        },
        {
            "slug": "selligent",
            "logoUrl": "",
            "name": "Selligent",
            "type": "Application",
            "vendors": [
                "stitch"
            ]
        },
        {
            "slug": "sendwithus",
            "logoUrl": "",
            "name": "Sendwithus",
            "type": "Application",
            "vendors": [
                "stitch"
            ]
        },
        {
            "slug": "toggl",
            "logoUrl": "",
            "name": "Toggl",
            "type": "Application",
            "vendors": [
                "stitch"
            ]
        },
        {
            "slug": "urban-airship",
            "logoUrl": "",
            "name": "Urban Airship",
            "type": "Application",
            "vendors": [
                "stitch"
            ]
        },
        {
            "slug": "vero",
            "logoUrl": "",
            "name": "Vero",
            "type": "Application",
            "vendors": [
                "stitch"
            ]
        },
        {
            "slug": "zapier",
            "logoUrl": "",
            "name": "Zapier",
            "type": "Application",
            "vendors": [
                "stitch"
            ]
        },
        {
            "slug": "concord",
            "logoUrl": "/sources/concordnow.png",
            "name": "Concord",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "greenhouse-(harvest)",
            "logoUrl": "/sources/greenhouse.png",
            "name": "Greenhouse (Harvest)",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "datadog",
            "logoUrl": "/sources/datadog.png",
            "name": "Datadog",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "fleetio",
            "logoUrl": "/sources/fleetio.png",
            "name": "Fleetio",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "unbounce",
            "logoUrl": "/sources/unbounce.png",
            "name": "Unbounce",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "skulabs",
            "logoUrl": "/sources/skulabs.png",
            "name": "SKULabs",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "demio",
            "logoUrl": "/sources/demio.png",
            "name": "Demio",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "radar",
            "logoUrl": "/sources/radar.png",
            "name": "Radar",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "recreation-gov",
            "logoUrl": "/sources/recreation-gov.png",
            "name": "Recreation.gov",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "capsule",
            "logoUrl": "/sources/capsulecrm.png",
            "name": "Capsule",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "saasoptics",
            "logoUrl": "/sources/saasoptics.png",
            "name": "SaaSOptics",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "zoho-books",
            "logoUrl": "/sources/zoho.png",
            "name": "Zoho Books",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "meltwater",
            "logoUrl": "/sources/meltwater.png",
            "name": "Meltwater",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "trakstar",
            "logoUrl": "/sources/trakstar.png",
            "name": "Trakstar",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "gtmhub",
            "logoUrl": "/sources/gtmhub.png",
            "name": "Gtmhub",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "judge-me",
            "logoUrl": "/sources/judge.png",
            "name": "Judge.me",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "re:amaze",
            "logoUrl": "/sources/reamaze.png",
            "name": "Re:amaze",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "eventbrite",
            "logoUrl": "/sources/eventbrite.png",
            "name": "Eventbrite",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "sprout-social",
            "logoUrl": "/sources/sprout-social.png",
            "name": "Sprout Social",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "akeneo",
            "logoUrl": "/sources/akeneo.png",
            "name": "Akeneo",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "liveagent",
            "logoUrl": "/sources/liveagent.png",
            "name": "LiveAgent",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "tines",
            "logoUrl": "/sources/tines.png",
            "name": "Tines",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "gainsight-px",
            "logoUrl": "/sources/gainsight.png",
            "name": "Gainsight PX",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "dialpad",
            "logoUrl": "/sources/dialpad.png",
            "name": "Dialpad",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "yotpo-ugc",
            "logoUrl": "/sources/yotpo.png",
            "name": "Yotpo UGC",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "engagebay",
            "logoUrl": "/sources/engagebay.png",
            "name": "EngageBay",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "trade-gov",
            "logoUrl": "/sources/trade-gov.png",
            "name": "Trade.gov",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "nimble",
            "logoUrl": "/sources/nimble.png",
            "name": "Nimble",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "mailgun-by-pathwire",
            "logoUrl": "/sources/mailgun.png",
            "name": "Mailgun by Pathwire",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "wrike",
            "logoUrl": "/sources/wrike.png",
            "name": "Wrike",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "americommerce",
            "logoUrl": "/sources/americommerce.png",
            "name": "AmeriCommerce",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "linear",
            "logoUrl": "/sources/linear.png",
            "name": "Linear",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "churnzero",
            "logoUrl": "/sources/churnzero.png",
            "name": "ChurnZero",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "niftyimages",
            "logoUrl": "/sources/niftyimages.png",
            "name": "NiftyImages",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "reply",
            "logoUrl": "/sources/reply.png",
            "name": "Reply",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "bitly",
            "logoUrl": "/sources/bitly.png",
            "name": "Bitly",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "easyship",
            "logoUrl": "/sources/easyship.png",
            "name": "Easyship",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "linkedin-page-management",
            "logoUrl": "/sources/linkedin.png",
            "name": "LinkedIn Page Management",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "jebbit",
            "logoUrl": "/sources/jebbit.png",
            "name": "Jebbit",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "woodpecker",
            "logoUrl": "/sources/woodpecker.png",
            "name": "Woodpecker",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "airship",
            "logoUrl": "/sources/airship.png",
            "name": "Airship",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "formstack",
            "logoUrl": "/sources/formstack.png",
            "name": "Formstack",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "ukg-pro",
            "logoUrl": "/sources/ukg.png",
            "name": "UKG Pro",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "refersion",
            "logoUrl": "/sources/refersion.png",
            "name": "Refersion",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "recruitee",
            "logoUrl": "/sources/recruitee.png",
            "name": "Recruitee",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "nutshell",
            "logoUrl": "/sources/nutshell.png",
            "name": "Nutshell",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "veeqo",
            "logoUrl": "/sources/veeqo.png",
            "name": "Veeqo",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "copper",
            "logoUrl": "/sources/copper.png",
            "name": "Copper",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "wootric",
            "logoUrl": "/sources/wootric.png",
            "name": "Wootric",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "u-s--census-bureau",
            "logoUrl": "/sources/u-s--census-bureau.png",
            "name": "U.S. Census Bureau",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "agile-crm",
            "logoUrl": "/sources/agilecrm.png",
            "name": "Agile CRM",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "freshteam",
            "logoUrl": "/sources/freshworks.png",
            "name": "Freshteam",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "uppromote",
            "logoUrl": "/sources/uppromote.png",
            "name": "UpPromote",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "twilio-sendgrid",
            "logoUrl": "/sources/sendgrid.png",
            "name": "Twilio SendGrid",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "sellerchamp",
            "logoUrl": "/sources/sellerchamp.png",
            "name": "SellerChamp",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "simplecast",
            "logoUrl": "/sources/simplecast.png",
            "name": "Simplecast",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "weather-gov",
            "logoUrl": "/sources/weather-gov.png",
            "name": "Weather.gov",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "shortcut",
            "logoUrl": "/sources/shortcut.png",
            "name": "Shortcut",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "emailoctopus",
            "logoUrl": "/sources/emailoctopus.png",
            "name": "EmailOctopus",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "national-park-service",
            "logoUrl": "/sources/national-park-service.png",
            "name": "National Park Service",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "callpage",
            "logoUrl": "/sources/callpage.png",
            "name": "CallPage",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "medium",
            "logoUrl": "/sources/medium.png",
            "name": "Medium",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "eventzilla",
            "logoUrl": "/sources/eventzilla.png",
            "name": "Eventzilla",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "paylocity",
            "logoUrl": "/sources/paylocity.png",
            "name": "Paylocity",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "paperform",
            "logoUrl": "/sources/paperform.png",
            "name": "Paperform",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "servicetitan",
            "logoUrl": "/sources/servicetitan.png",
            "name": "ServiceTitan",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "checkout-com",
            "logoUrl": "/sources/checkout.png",
            "name": "Checkout.com",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "uplead",
            "logoUrl": "/sources/uplead.png",
            "name": "UpLead",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "productboard",
            "logoUrl": "/sources/productboard.png",
            "name": "Productboard",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "connectandsell",
            "logoUrl": "/sources/connectandsell.png",
            "name": "ConnectAndSell",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "dotdigital",
            "logoUrl": "/sources/dotdigital.png",
            "name": "Dotdigital",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "groove",
            "logoUrl": "/sources/groovehq.png",
            "name": "Groove",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "disqo",
            "logoUrl": "/sources/disqo.png",
            "name": "DISQO",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "megaphone",
            "logoUrl": "/sources/megaphone.png",
            "name": "Megaphone",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "appcues",
            "logoUrl": "/sources/appcues.png",
            "name": "Appcues",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "tatum",
            "logoUrl": "/sources/tatum.png",
            "name": "Tatum",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "bizzabo",
            "logoUrl": "/sources/bizzabo.png",
            "name": "Bizzabo",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "tanda",
            "logoUrl": "/sources/tanda.png",
            "name": "Tanda",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "userflow",
            "logoUrl": "/sources/userflow.png",
            "name": "Userflow",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "calendly",
            "logoUrl": "/sources/calendly.png",
            "name": "Calendly",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "apollo",
            "logoUrl": "/sources/apollo.png",
            "name": "Apollo",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "sendinblue",
            "logoUrl": "/sources/sendinblue.png",
            "name": "Sendinblue",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "ometria",
            "logoUrl": "/sources/ometria.png",
            "name": "Ometria",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "apparelmagic",
            "logoUrl": "/sources/apparelmagic.png",
            "name": "ApparelMagic",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "delighted-by-qualtrics",
            "logoUrl": "/sources/delighted.png",
            "name": "Delighted by Qualtrics",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "snyk",
            "logoUrl": "/sources/snyk.png",
            "name": "Snyk",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "insightly",
            "logoUrl": "/sources/insightly.png",
            "name": "Insightly",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "jotform",
            "logoUrl": "/sources/jotform.png",
            "name": "JotForm",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "ortto",
            "logoUrl": "/sources/ortto.png",
            "name": "Ortto",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "jumpcloud",
            "logoUrl": "/sources/jumpcloud.png",
            "name": "JumpCloud",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "everhour",
            "logoUrl": "/sources/everhour.png",
            "name": "Everhour",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "skio",
            "logoUrl": "/sources/skio.png",
            "name": "Skio",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "gelato",
            "logoUrl": "/sources/gelato.png",
            "name": "Gelato",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "accelevents",
            "logoUrl": "/sources/accelevents.png",
            "name": "Accelevents",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "sage-hr-(cake-hr)",
            "logoUrl": "/sources/sage.png",
            "name": "Sage HR (Cake HR)",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "coda",
            "logoUrl": "/sources/coda.png",
            "name": "Coda",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "loop",
            "logoUrl": "/sources/loopreturns.png",
            "name": "Loop",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "aweber",
            "logoUrl": "/sources/aweber.png",
            "name": "AWeber",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "postmark",
            "logoUrl": "/sources/postmarkapp.png",
            "name": "Postmark",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "formsite",
            "logoUrl": "/sources/formsite.png",
            "name": "Formsite",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "usgs-earthquake-catalog",
            "logoUrl": "/sources/usgs-earthquake-catalog.png",
            "name": "USGS Earthquake Catalog",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "hubstaff",
            "logoUrl": "/sources/hubstaff.png",
            "name": "Hubstaff",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "discord",
            "logoUrl": "/sources/discord.png",
            "name": "Discord",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "range",
            "logoUrl": "/sources/range.png",
            "name": "Range",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "on24",
            "logoUrl": "/sources/on24.png",
            "name": "ON24",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "kvcore",
            "logoUrl": "/sources/kvcore.png",
            "name": "kvCORE",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "rise",
            "logoUrl": "/sources/rise.png",
            "name": "Rise",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "zoho-desk",
            "logoUrl": "/sources/zoho.png",
            "name": "Zoho Desk",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "knoema",
            "logoUrl": "/sources/knoema.png",
            "name": "Knoema",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "revolut-merchant",
            "logoUrl": "/sources/revolut.png",
            "name": "Revolut Merchant",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "lob",
            "logoUrl": "/sources/lob.png",
            "name": "Lob",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "captivateiq",
            "logoUrl": "/sources/captivateiq.png",
            "name": "CaptivateIQ",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "gosquared",
            "logoUrl": "/sources/gosquared.png",
            "name": "GoSquared",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "channable",
            "logoUrl": "/sources/channable.png",
            "name": "Channable",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "piano",
            "logoUrl": "/sources/piano.png",
            "name": "Piano",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "breezy-hr",
            "logoUrl": "/sources/breezy.png",
            "name": "Breezy HR",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "follow-up-boss",
            "logoUrl": "/sources/followupboss.png",
            "name": "Follow Up Boss",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "pabbly-email-marketing",
            "logoUrl": "/sources/pabbly.png",
            "name": "Pabbly Email Marketing",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "moonclerk",
            "logoUrl": "/sources/moonclerk.png",
            "name": "MoonClerk",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "redtrack",
            "logoUrl": "/sources/redtrack.png",
            "name": "RedTrack",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "sellbrite",
            "logoUrl": "/sources/sellbrite.png",
            "name": "Sellbrite",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "wufoo",
            "logoUrl": "/sources/wufoo.png",
            "name": "Wufoo",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "harmonic",
            "logoUrl": "/sources/harmonic.png",
            "name": "Harmonic",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "kevel",
            "logoUrl": "/sources/kevel.png",
            "name": "Kevel",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "fastly",
            "logoUrl": "/sources/fastly.png",
            "name": "Fastly",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "cloudinary",
            "logoUrl": "/sources/cloudinary.png",
            "name": "Cloudinary",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "beekeeper",
            "logoUrl": "/sources/beekeeper.png",
            "name": "Beekeeper",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "getresponse",
            "logoUrl": "/sources/getresponse.png",
            "name": "GetResponse",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "pipe17",
            "logoUrl": "/sources/pipe17.png",
            "name": "Pipe17",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "sortly",
            "logoUrl": "/sources/sortly.png",
            "name": "Sortly",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "applicantstack",
            "logoUrl": "/sources/applicantstack.png",
            "name": "ApplicantStack",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "survicate",
            "logoUrl": "/sources/survicate.png",
            "name": "Survicate",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "shiphawk",
            "logoUrl": "/sources/shiphawk.png",
            "name": "ShipHawk",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "clearbit",
            "logoUrl": "/sources/clearbit.png",
            "name": "Clearbit",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "vitally",
            "logoUrl": "/sources/vitally.png",
            "name": "Vitally",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "officernd-(hybrid)",
            "logoUrl": "/sources/officernd.png",
            "name": "OfficeRnD (Hybrid)",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "crunchbase",
            "logoUrl": "/sources/crunchbase.png",
            "name": "Crunchbase",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "katana",
            "logoUrl": "/sources/katanamrp.png",
            "name": "Katana",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "zoho-inventory",
            "logoUrl": "/sources/zoho.png",
            "name": "Zoho Inventory",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "gem",
            "logoUrl": "/sources/gem.png",
            "name": "Gem",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "zoho-campaign",
            "logoUrl": "/sources/zoho.png",
            "name": "Zoho Campaign",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "adbutler",
            "logoUrl": "/sources/adbutler.png",
            "name": "AdButler",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "productplan",
            "logoUrl": "/sources/productplan.png",
            "name": "ProductPlan",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "textmagic",
            "logoUrl": "/sources/textmagic.png",
            "name": "TextMagic",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "easypost",
            "logoUrl": "/sources/easypost.png",
            "name": "EasyPost",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "treasury-gov",
            "logoUrl": "/sources/treasury-gov.png",
            "name": "Treasury.gov",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "ghost",
            "logoUrl": "/sources/ghost.png",
            "name": "Ghost",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "convertkit",
            "logoUrl": "/sources/convertkit.png",
            "name": "ConvertKit",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "yotpo-loyalty",
            "logoUrl": "/sources/yotpo.png",
            "name": "Yotpo Loyalty",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "codacy",
            "logoUrl": "/sources/codacy.png",
            "name": "Codacy",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "helpcrunch",
            "logoUrl": "/sources/helpcrunch.png",
            "name": "HelpCrunch",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "keap",
            "logoUrl": "/sources/keap.png",
            "name": "Keap",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "clickup",
            "logoUrl": "/sources/clickup.png",
            "name": "ClickUp",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "cvent",
            "logoUrl": "/sources/cvent.png",
            "name": "Cvent",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "bonusly",
            "logoUrl": "/sources/bonusly.png",
            "name": "Bonusly",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "listrak-(email)",
            "logoUrl": "/sources/listrak.png",
            "name": "Listrak (Email)",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "courier",
            "logoUrl": "/sources/courier.png",
            "name": "Courier",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "solarwinds-service-desk",
            "logoUrl": "/sources/solarwinds-service-desk.png",
            "name": "SolarWinds Service Desk",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "highlevel",
            "logoUrl": "/sources/gohighlevel.png",
            "name": "HighLevel",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "genius-referrals",
            "logoUrl": "/sources/geniusreferrals.png",
            "name": "Genius Referrals",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "cloudflare",
            "logoUrl": "/sources/cloudflare.png",
            "name": "Cloudflare",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "ramp",
            "logoUrl": "/sources/ramp.png",
            "name": "Ramp",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "baremetrics",
            "logoUrl": "/sources/baremetrics.png",
            "name": "Baremetrics",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "salesmachine",
            "logoUrl": "/sources/salesmachine.png",
            "name": "Salesmachine",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "rocketreach",
            "logoUrl": "/sources/rocketreach.png",
            "name": "RocketReach",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "omnisend",
            "logoUrl": "/sources/omnisend.png",
            "name": "Omnisend",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "launchdarkly",
            "logoUrl": "/sources/launchdarkly.png",
            "name": "LaunchDarkly",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "emma",
            "logoUrl": "/sources/myemma.png",
            "name": "Emma",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "usajobs",
            "logoUrl": "/sources/usajobs.png",
            "name": "USAJOBS",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "sender",
            "logoUrl": "/sources/sender.png",
            "name": "Sender",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "erply",
            "logoUrl": "/sources/erply.png",
            "name": "Erply",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "canny",
            "logoUrl": "/sources/canny.png",
            "name": "Canny",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "gorgias",
            "logoUrl": "/sources/gorgias.png",
            "name": "Gorgias",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "planet",
            "logoUrl": "/sources/planet.png",
            "name": "Planet",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "campaigner",
            "logoUrl": "/sources/campaigner.png",
            "name": "Campaigner",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "sendpulse",
            "logoUrl": "/sources/sendpulse.png",
            "name": "SendPulse",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "opsgenie",
            "logoUrl": "/sources/opsgenie.png",
            "name": "Opsgenie",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "cin7",
            "logoUrl": "/sources/cin7.png",
            "name": "Cin7",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "affinity",
            "logoUrl": "/sources/affinity.png",
            "name": "Affinity",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "returnlogic",
            "logoUrl": "/sources/returnlogic.png",
            "name": "ReturnLogic",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "gladly",
            "logoUrl": "/sources/gladly.png",
            "name": "Gladly",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "mailjet-by-pathwire",
            "logoUrl": "/sources/mailjet.png",
            "name": "Mailjet by Pathwire",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "gong",
            "logoUrl": "/sources/gong.png",
            "name": "Gong",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "stamped-io",
            "logoUrl": "/sources/stamped.png",
            "name": "Stamped.io",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "talentlyft",
            "logoUrl": "/sources/talentlyft.png",
            "name": "TalentLyft",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "satismeter",
            "logoUrl": "/sources/satismeter.png",
            "name": "SatisMeter",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "klaus",
            "logoUrl": "/sources/klausapp.png",
            "name": "Klaus",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "bureau-of-labor-statistics",
            "logoUrl": "/sources/bureau-of-labor-statistics.png",
            "name": "Bureau of Labor Statistics",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "zenoti",
            "logoUrl": "/sources/zenoti.png",
            "name": "Zenoti",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "twitch",
            "logoUrl": "/sources/twitch.png",
            "name": "Twitch",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "nist",
            "logoUrl": "/sources/nist.png",
            "name": "NIST",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "listrak-(sms)",
            "logoUrl": "/sources/listrak.png",
            "name": "Listrak (SMS)",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "friendbuy",
            "logoUrl": "/sources/friendbuy.png",
            "name": "Friendbuy",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "google-calendar",
            "logoUrl": "/sources/google.png",
            "name": "Google Calendar",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "vidyard",
            "logoUrl": "/sources/vidyard.png",
            "name": "Vidyard",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "fda",
            "logoUrl": "/sources/fda.png",
            "name": "FDA",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "shipstation",
            "logoUrl": "/sources/shipstation.png",
            "name": "ShipStation",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "firstpromoter",
            "logoUrl": "/sources/firstpromoter.png",
            "name": "FirstPromoter",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "workramp",
            "logoUrl": "/sources/workramp.png",
            "name": "WorkRamp",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "returnly",
            "logoUrl": "/sources/returnly.png",
            "name": "Returnly",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "close",
            "logoUrl": "/sources/close.png",
            "name": "Close",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "new-relic",
            "logoUrl": "/sources/newrelic.png",
            "name": "New Relic",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "useriq",
            "logoUrl": "/sources/useriq.png",
            "name": "UserIQ",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "moonmail",
            "logoUrl": "/sources/moonmail.png",
            "name": "MoonMail",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "circleci",
            "logoUrl": "/sources/circleci.png",
            "name": "CircleCI",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "avaza",
            "logoUrl": "/sources/avaza.png",
            "name": "Avaza",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "emsi",
            "logoUrl": "/sources/emsi.png",
            "name": "Emsi",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "digitalocean",
            "logoUrl": "/sources/digitalocean.png",
            "name": "DigitalOcean",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "billsby",
            "logoUrl": "/sources/billsby.png",
            "name": "Billsby",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "mail-blaze",
            "logoUrl": "/sources/mailblaze.png",
            "name": "Mail Blaze",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "pingboard",
            "logoUrl": "/sources/pingboard.png",
            "name": "Pingboard",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "hunter",
            "logoUrl": "/sources/hunter.png",
            "name": "Hunter",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "quickbase",
            "logoUrl": "/sources/quickbase.png",
            "name": "Quickbase",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "moosend",
            "logoUrl": "/sources/moosend.png",
            "name": "Moosend",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "short-io",
            "logoUrl": "/sources/short.png",
            "name": "Short.io",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "the-world-bank",
            "logoUrl": "/sources/the-world-bank.png",
            "name": "The World Bank",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "shipwire",
            "logoUrl": "/sources/shipwire.png",
            "name": "Shipwire",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "zenhub",
            "logoUrl": "/sources/zenhub.png",
            "name": "ZenHub",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "samsara",
            "logoUrl": "/sources/samsara.png",
            "name": "Samsara",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "lattice",
            "logoUrl": "/sources/lattice.png",
            "name": "Lattice",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "chili-piper",
            "logoUrl": "/sources/chilipiper.png",
            "name": "Chili Piper",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "elastic-email",
            "logoUrl": "/sources/elasticemail.png",
            "name": "Elastic Email",
            "type": "Application",
            "vendors": [
                "portable"
            ]
        },
        {
            "slug": "linkedin-social",
            "logoUrl": "/sources/linkedin.png",
            "name": "Linkedin Social",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "sprinklr",
            "logoUrl": "",
            "name": "Sprinklr",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "app-store-connect-–-analytics",
            "logoUrl": "",
            "name": "App Store Connect – Analytics",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "amazon-redshift",
            "logoUrl": "/sources/amazon.jpeg",
            "name": "Amazon Redshift",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "revcontent",
            "logoUrl": "",
            "name": "Revcontent",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "convert-media",
            "logoUrl": "",
            "name": "Convert Media",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "crimson-hexagon",
            "logoUrl": "",
            "name": "Crimson Hexagon",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "mediamath",
            "logoUrl": "",
            "name": "MediaMath",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "helpscout",
            "logoUrl": "",
            "name": "HelpScout",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "tiger-pistol",
            "logoUrl": "",
            "name": "Tiger Pistol",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "optimove",
            "logoUrl": "",
            "name": "Optimove",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "sensortower",
            "logoUrl": "",
            "name": "SensorTower",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "moat-analytics",
            "logoUrl": "",
            "name": "Moat Analytics",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "youtube-reporting",
            "logoUrl": "",
            "name": "YouTube Reporting",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "gmail",
            "logoUrl": "",
            "name": "Gmail",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "insight-squared",
            "logoUrl": "",
            "name": "Insight Squared",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "kochava",
            "logoUrl": "",
            "name": "Kochava",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "docebo",
            "logoUrl": "",
            "name": "Docebo",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "appsee",
            "logoUrl": "",
            "name": "Appsee",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "doubleclick",
            "logoUrl": "",
            "name": "DoubleClick",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "vertamedia",
            "logoUrl": "",
            "name": "VertaMedia",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "stackadapt",
            "logoUrl": "",
            "name": "StackAdapt",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "streamrail",
            "logoUrl": "",
            "name": "StreamRail",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "spotx",
            "logoUrl": "",
            "name": "SpotX",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "azure-data-lake",
            "logoUrl": "/sources/azure.png",
            "name": "Azure Data Lake",
            "type": "File",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "genesys",
            "logoUrl": "",
            "name": "Genesys",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "customer-gauge",
            "logoUrl": "",
            "name": "Customer Gauge",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "teradata",
            "logoUrl": "",
            "name": "Teradata",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "netbase",
            "logoUrl": "",
            "name": "Netbase",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "yahoo-ads",
            "logoUrl": "",
            "name": "Yahoo Ads",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "appnexus",
            "logoUrl": "",
            "name": "AppNexus",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "adobe-ads",
            "logoUrl": "/sources/adobe.png",
            "name": "Adobe Ads",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "active-campaign",
            "logoUrl": "",
            "name": "Active Campaign",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "hibob",
            "logoUrl": "",
            "name": "Hibob",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "redis",
            "logoUrl": "",
            "name": "Redis",
            "type": "Database",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "lkqd",
            "logoUrl": "",
            "name": "LKQD",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "cassandra",
            "logoUrl": "",
            "name": "Cassandra",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "salesforce-social-studio",
            "logoUrl": "/sources/salesforce.png",
            "name": "Salesforce Social Studio",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "amazon-aurora",
            "logoUrl": "/sources/amazon.jpeg",
            "name": "Amazon Aurora",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "picasso-labs",
            "logoUrl": "",
            "name": "Picasso Labs",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "bronto",
            "logoUrl": "",
            "name": "Bronto",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "hasoffers",
            "logoUrl": "",
            "name": "HasOffers",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "nuviad",
            "logoUrl": "",
            "name": "Nuviad",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "adaptv",
            "logoUrl": "",
            "name": "AdapTV",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "paypal-reports",
            "logoUrl": "",
            "name": "PayPal Reports",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "databricks-sql",
            "logoUrl": "",
            "name": "Databricks SQL",
            "type": "Database",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "currency-service",
            "logoUrl": "",
            "name": "Currency Service",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "voluum",
            "logoUrl": "",
            "name": "Voluum",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "shareasale",
            "logoUrl": "",
            "name": "ShareASale",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "adaptive-insights",
            "logoUrl": "",
            "name": "Adaptive Insights",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "amazon-athena",
            "logoUrl": "/sources/amazon.jpeg",
            "name": "Amazon Athena",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "trendkite",
            "logoUrl": "",
            "name": "Trendkite",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "magnetic",
            "logoUrl": "",
            "name": "Magnetic",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "netsuite-restlets",
            "logoUrl": "",
            "name": "Netsuite RESTlets",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "brandwatch",
            "logoUrl": "",
            "name": "Brandwatch",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "tiktok",
            "logoUrl": "",
            "name": "TikTok",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "content-ad",
            "logoUrl": "",
            "name": "Content.Ad",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "couchbase",
            "logoUrl": "",
            "name": "Couchbase",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "netsuite-analytics",
            "logoUrl": "",
            "name": "Netsuite Analytics",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "search-ads-360",
            "logoUrl": "",
            "name": "Search Ads 360",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "avantlink",
            "logoUrl": "",
            "name": "Avantlink",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "oath",
            "logoUrl": "",
            "name": "Oath",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "ironsource",
            "logoUrl": "",
            "name": "ironSource",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "impact-radius",
            "logoUrl": "",
            "name": "Impact Radius",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "azure-sql",
            "logoUrl": "/sources/azure.png",
            "name": "Azure SQL",
            "type": "Database",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "hivestack",
            "logoUrl": "",
            "name": "Hivestack",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "innovid",
            "logoUrl": "",
            "name": "Innovid",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "dear-systems",
            "logoUrl": "",
            "name": "DEAR Systems",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "bluesnap",
            "logoUrl": "",
            "name": "BlueSnap",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "index-exchange-client-audit-logs",
            "logoUrl": "",
            "name": "Index Exchange Client Audit Logs",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "reddit-ads",
            "logoUrl": "",
            "name": "Reddit Ads",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "pardot-by-salesforce",
            "logoUrl": "/sources/salesforce.png",
            "name": "Pardot by Salesforce",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "gothamads",
            "logoUrl": "",
            "name": "GothamAds",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "appreciate",
            "logoUrl": "",
            "name": "Appreciate",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "socialbakers",
            "logoUrl": "",
            "name": "Socialbakers",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "keepcon",
            "logoUrl": "",
            "name": "Keepcon",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "microsoft-sql-server",
            "logoUrl": "/sources/microsoft.jpeg",
            "name": "Microsoft SQL Server",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "netsuite-reporting",
            "logoUrl": "",
            "name": "Netsuite Reporting",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "delta-projects",
            "logoUrl": "",
            "name": "Delta Projects",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "app-store-connect-–-sales",
            "logoUrl": "",
            "name": "App Store Connect – Sales",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "cellxpert",
            "logoUrl": "",
            "name": "Cellxpert",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "azure-synapse-analytics",
            "logoUrl": "/sources/azure.png",
            "name": "Azure Synapse Analytics",
            "type": "Database",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "adquant",
            "logoUrl": "",
            "name": "Adquant",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "doubleverify",
            "logoUrl": "",
            "name": "DoubleVerify",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "treasure-data",
            "logoUrl": "",
            "name": "Treasure Data",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "jw-player-analytics",
            "logoUrl": "",
            "name": "JW Player Analytics",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "mobile-action",
            "logoUrl": "",
            "name": "Mobile Action",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "vertica",
            "logoUrl": "",
            "name": "Vertica",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "cedato",
            "logoUrl": "",
            "name": "Cedato",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "yandex",
            "logoUrl": "",
            "name": "Yandex",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "google-bigquery",
            "logoUrl": "/sources/google.png",
            "name": "Google BigQuery",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "salesforce-desk",
            "logoUrl": "/sources/salesforce.png",
            "name": "Salesforce Desk",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "display-and-video-360",
            "logoUrl": "",
            "name": "Display and Video 360",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        },
        {
            "slug": "nium",
            "logoUrl": "",
            "name": "Nium",
            "type": "Application",
            "vendors": [
                "rivery"
            ]
        }
    ]
}