import React from 'react';
import { View, Button } from 'react-native';
import { NavigationComponentProps } from 'react-native-navigation';
import { goTo } from 'navigation';

/**
 * type checking.
 */
interface HomeProps extends NavigationComponentProps {

};

export default function Home(props: HomeProps) {
    return (
        <View style={{
            backgroundColor: 'red',
            flex: 1
        }}>
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