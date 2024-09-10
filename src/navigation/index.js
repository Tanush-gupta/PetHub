import { StyleSheet, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import Welcome from '../screen/welcome.js';
import AddPet from '../screen/addpet.js';

export default function Index() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null); // Start with null for the user

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null; // Return null or loading indicator while initializing

    return (
        <View style={styles.container}>
            {!user ? <AddPet /> : <Welcome />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
