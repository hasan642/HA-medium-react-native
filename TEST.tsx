import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { color, typography } from 'theme';

export function TestComponent() {
    return (
        <SafeAreaView style={{
            flex: 1, backgroundColor: '#FFF',
            padding: 24
        }}>
            <Text style={{
                fontFamily: typography.black,
                fontSize: 18
            }}>
                {'font one'}
            </Text>

            <Text style={{
                fontFamily: typography.bold,
                fontSize: 18
            }}>
                {'font two'}
            </Text>

            <Text style={{
                fontFamily: typography.light,
                fontSize: 18
            }}>
                {'font three'}
            </Text>

            <Text style={{
                fontFamily: typography.regular,
                fontSize: 18
            }}>
                {'font four'}
            </Text>
        </SafeAreaView>
    );
};