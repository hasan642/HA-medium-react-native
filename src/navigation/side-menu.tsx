import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

/**
 * interfaces and types.
 */
interface ProfileSectionProps {

};

/**
 * A function component that shows a side menu.
 */
function SideMenu() {
    return (
        <View style={styles.container}>
            <ProfileSection />
        </View>
    );
};

/**
 * functions.
 */
function ProfileSection(props: ProfileSectionProps) {
    return (
        <View style={styles.profileSection}>

        </View>
    );
};

/**
 * styles.
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue'
    },
    profileSection: {
        height: 200,
        // backgroundColor:
    }
});

/**
 * export as default.
 */
export default SideMenu;