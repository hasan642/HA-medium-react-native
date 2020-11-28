import React from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationComponentProps } from 'react-native-navigation';
import { color, typography } from 'theme';
import { translate } from 'i18n';
import { Header, Loader, } from 'components';

/**
 * type checking.
 */
interface HomeProps extends NavigationComponentProps {

};

function HomeScreen(props: HomeProps) {
    return (
        <View style={{
            backgroundColor: color.offWhite,
            flex: 1,
            padding:24
        }}>
            <Header
                title={translate('screens.home')}
            />

            <Text style={{
                fontFamily: typography.black,
                fontSize: 18
            }}>
                {'font one || الخط الاول'}
            </Text>

            <Text style={{
                fontFamily: typography.bold,
                fontSize: 18
            }}>
                {'font two || الخط الثاني'}
            </Text>

            <Text style={{
                fontFamily: typography.light,
                fontSize: 18
            }}>
                {'font three || الخط الثالث'}
            </Text>

            <Text style={{
                fontFamily: typography.regular,
                fontSize: 18
            }}>
                {'font four || الخط الرابع'}
            </Text>
        </View>
    );
};

/**
 * export as default.
 */
export default HomeScreen;