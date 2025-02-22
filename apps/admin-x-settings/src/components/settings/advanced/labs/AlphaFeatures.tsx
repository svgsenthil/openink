import FeatureToggle from './FeatureToggle';
import LabItem from './LabItem';
import List from '../../../../admin-x-ds/global/List';
import React from 'react';

const features = [{
    title: 'URL cache',
    description: 'Enable URL Caching',
    flag: 'urlCache'
},{
    title: 'Lexical multiplayer',
    description: 'Enables multiplayer editing in the lexical editor.',
    flag: 'lexicalMultiplayer'
},{
    title: 'Webmentions',
    description: 'Allows viewing received mentions on the dashboard.',
    flag: 'webmentions'
},{
    title: 'Websockets',
    description: 'Test out Websockets functionality at <code>/ghost/#/websockets</code>.',
    flag: 'websockets'
},{
    title: 'Stripe Automatic Tax',
    description: 'Use Stripe Automatic Tax at Stripe Checkout. Needs to be enabled in Stripe',
    flag: 'stripeAutomaticTax'
},{
    title: 'Email customization',
    description: 'Adding more control over the newsletter template',
    flag: 'emailCustomization'
},{
    title: 'Collections',
    description: 'Enables Collections 2.0',
    flag: 'collections'
},{
    title: 'Collections Card',
    description: 'Enables the Collections Card for pages - requires Collections and the beta Editor to be enabled',
    flag: 'collectionsCard'
},{
    title: 'Admin X',
    description: 'Enables Admin X, the new admin UI for Ghost',
    flag: 'adminXSettings'
},{
    title: 'Mail Events',
    description: 'Enables processing of mail events',
    flag: 'mailEvents'
},{
    title: 'Convert to Lexical',
    description: 'Convert mobiledoc posts to lexical upon opening in the editor.',
    flag: 'convertToLexical'
},{
    title: 'Import Member Tier',
    description: 'Enables tier to be specified when importing members',
    flag: 'importMemberTier'
},{
    title: 'Tips & donations',
    description: 'Enables publishers to collect one-time payments',
    flag: 'tipsAndDonations'
}];

const AlphaFeatures: React.FC = () => {
    return (
        <List titleSeparator={false}>
            {features.map(feature => (
                <LabItem
                    action={<FeatureToggle flag={feature.flag} />}
                    detail={feature.description}
                    title={feature.title} />
            ))}
        </List>
    );
};

export default AlphaFeatures;
