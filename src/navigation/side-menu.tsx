import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import {
    layout,
    color
} from '../theme';

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
        <View>

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
    }
});

/**
 * export as default.
 */
export default SideMenu;