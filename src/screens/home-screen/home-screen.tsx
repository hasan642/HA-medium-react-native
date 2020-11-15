import React from 'react';
import { View, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { StorageHelper } from 'utils';

export default function Home(props: any) {
    return (
        <View style={{
            backgroundColor: 'red',
            flex: 1
        }}>
            <Button
                title='ggg'
                onPress={() => {
                    StorageHelper.clearAll();
                    Navigation.mergeOptions(props.componentId, {
                        sideMenu: {
                            left: {
                                visible: true
                            }
                        }
                    });
                }}
            />
        </View>
    );
};