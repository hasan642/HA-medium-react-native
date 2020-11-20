import React from 'react';
import { View, Button } from 'react-native';
import { NavigationComponentProps } from 'react-native-navigation';
import { goTo } from 'navigation';
import { color } from 'theme';
import { translate } from 'i18n';
import { Header } from 'components';

/**
 * type checking.
 */
interface HomeProps extends NavigationComponentProps {

};

function HomeScreen(props: HomeProps) {
    return (
        <View style={{
            backgroundColor: color.offWhite,
            flex: 1
        }}>
            <Header
                title={translate('screens.home')}
            />

            <Button
                title='ggg'
                onPress={() => {

                    goTo(
                        props.componentId,
                        'NOTIFICATIONS_SCREEN'
                    )
                }}
            />
        </View>
    );
};

/**
 * export as default.
 */
export default HomeScreen;