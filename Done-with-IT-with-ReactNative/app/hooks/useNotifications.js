import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import expoPushTokensApi from "../api/expoPushTokens";

const useNotification = (notificationListener) => {
    useEffect(() => {
        registerForPushNotification();
        if (notificationListener) Notifications.addNotificationReceivedListener(notificationListener)
    }, []);

    const registerForPushNotification = async () => {
        try {
            const permissions = await Notifications.requestPermissionsAsync();
            if (!permissions.granted) return
            const { data: token } = await Notifications.getExpoPushTokenAsync();
            expoPushTokensApi.register(token);
            console.log(token)

        } catch (error) {
            console.log('Error to get token', error)
        }
    }
}

export default useNotification
