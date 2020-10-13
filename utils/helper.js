import { View, StyleSheet, AsyncStorage } from 'react-native'
import * as Permissions from 'expo-permissions'
import * as Notifications from 'expo-notifications'


const NOTIFICATION_KEY = 'UdaciFlashCards:notifications'

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
  return {
    title: 'Log your stats!',
    body: "👋 don't forget to complete one quiz today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.removeItem(NOTIFICATION_KEY)
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              // If permissions granted then...
              // Cancellation is a precaution against setting more than one notification.
              Notifications.cancelAllScheduledNotificationsAsync()

              Notifications.scheduleNotificationAsync({
                content: createNotification(),
                trigger: {
                  hour:16,
                  minute:6,
                  repeats: true,
                },
              });

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true) )
            }
          })
      }
    })
}