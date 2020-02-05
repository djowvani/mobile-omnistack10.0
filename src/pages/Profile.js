// Basic React import
import React from 'react';
// Webpage view importing
import { WebView } from 'react-native-webview';

// Function to read the dev's Github username and acess it's webpage
function Profile({ navigation }) {
    const githubUsername = navigation.getParam('github_username');

    return <WebView style={{ flex: 1 }} source={{ uri: `https://github.com/${githubUsername}` }} />
}

export default Profile;