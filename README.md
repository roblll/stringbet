# Stringbet - Mobile App

Mobile app available on iOS and Android

App Store - Apple - https://apps.apple.com/us/app/stringbet/id1588579265

Play Store - Google - https://play.google.com/store/apps/details?id=com.rbzla.stringbet&hl=en_US&gl=US

## Description

Challenge yourself to memorize all preflop hand rankings and win percentages in Texas Holdem poker. The app randomly shows two cards. The user is tasked to provide the correct rank and win percentage of the current poker hand. The app will determine if the correct answer was provided or not. The correct answer will be displayed to help reinforce memorization. The app provides a list of the correct answers as a reference. Also, the app allows for narrowing or widening the range of poker hands to be randomly selected. This helps to incrementally adjust the difficulty. Finally, stats are recorded to track progress.

## Mobile App Implementation

The main user interaction is selecting the hand rank and hand percentage. This was implemented using a customized ScrollPicker component. As there was no scrolling selection component natively included in React Native, an open-source implementation was used. Although, a slight modification was added for aesthetic purposes. The rest of the app was built using built-in components like Modals or some custom-built components like the check button. Lastly, the app will automatically check for over-the-air updates each time the menu is accessed. This makes it more convenient to update the app without needing to resubmit to the App Store. The mobile app was built using the open source frameworks, React Native and Expo. This allows the app to be built simultaneously for iOS and Android.

Built using: TypeScript, React Native, Expo
