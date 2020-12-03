import React from 'react';
import { View } from 'react-native';
import { NavigationComponentProps } from 'react-native-navigation';
import { commonStyles } from 'theme';
import { translate } from 'i18n';
import {
    Header,
    List
} from 'components';
import TutorialCard from './tutorial-card';
import styles from './styles';

/**
 * type checking.
 */
interface HomeProps extends NavigationComponentProps {

};

/**
 * A function component that shows a home screen.
 */
function HomeScreen(props: HomeProps) {

    /**
     * Handles tutorial card press.
     */
    const handleTutorialCardPress = () => {
        console.log('tutorial card pressed');
    };

    /**
     * Handles menu icon press.
     */
    const handleMenuIconPress = () => {
        console.log('menu icon pressed');
    };

    /**
     * Renderes tutorial card.
     */
    const renderTutorialCard = ({ item }) => {
        return (
            <TutorialCard
                handleMenuIconPress={handleMenuIconPress}
                onPress={handleTutorialCardPress}
                title={'the decription of tutorial'}
                subTitle={'the sun title'}
                imgUri={'https://banner2.cleanpng.com/20180626/fhs/kisspng-avatar-user-computer-icons-software-developer-5b327cc98b5780.5684824215300354015708.jpg'}
            />
        );
    };

    return (
        <View style={commonStyles.screenContainer}>
            <Header
                title={translate('screens.home')}
            />

            <List
                data={[1, 2, 3, 4, 5]}
                renderItem={renderTutorialCard}
                style={styles.list}
            />
        </View>
    );
};

/**
 * export as default.
 */
export default HomeScreen;